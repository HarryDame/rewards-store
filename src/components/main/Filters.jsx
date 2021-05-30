import React from 'react';
import rightArrow from "../../assets/icons/arrow-right.svg";
import leftArrow from "../../assets/icons/arrow-left.svg";
import {ProductContext} from "../../context/ProductContext";

const Filter = ({handleSort, sort,handlePage, page, isFooter})=>{


    const {products, setProducts, showHistory} = useContext(ProductContext);
	const prodLen = products.length;
	const prodsOnPage = Math.min(16*page, prodLen);

	const [activeFilter, setActiveFilter] = useState(0);
	const [auxActive, setAuxActive] = useState(0);

	const filtersParams = [
		{callback: (p1, p2) => {
			const prop = p1.createDate ? "createDate" : "_id";
      return (p1[prop] < p2[prop]) ? -1 : 1;
		}, label: 'Most recent'},
		{callback: (p1, p2) => p1.cost - p2.cost, label: 'Lowest price'},
		{callback: (p1, p2) => p2.cost - p1.cost, label: 'Highest price'},
	];

	const sortProducts = (filterId, sortFunction) => {
		const sortedProducts = products.slice().sort(sortFunction);
		setProducts(sortedProducts);
	};

	const handleFilter = (filterId) => {
		setActiveFilter(filterId);
	}

	useEffect(() => {
		sortProducts(activeFilter, filtersParams[activeFilter].callback)
	// eslint-disable-next-line react-hooks/exhaustive-deps
	},[activeFilter])

	useEffect(() => {
		const aux = activeFilter;
		setActiveFilter(showHistory ? 0 : auxActive);
		setAuxActive(aux);

	},[showHistory])


    return (
        <div className={`filters-ctn ${isFooter ? "footer" : ""}`}>
			<span className="product-index">{prodsOnPage} of {prodLen} products</span>

			<div className={`filters ${isFooter ? "hidden" : ""}`}>
				<span className={`sort-title`}>Sort by: </span>
				{filtersParams.map(({label}, i) => (
					<button key={i} className={`filter ${activeFilter === i ? 'selected' : ''}`}
						onClick={() => handleFilter(i)}>
						{label}
					</button>
				))}
			</div>
			<div className="arrows">
				<img src={leftArrow} alt="left-arrow" className={`left ${page === 1 ? "hidden" : ""}`} onClick={handlePage} name="-1"/>
				<img src={rightArrow} alt="right-arrow" className={`right ${prodsOnPage >= prodLen ? "hidden" : ""}`} onClick={handlePage} name="1"/>
			</div>
		</div>
    )
};

export default Filter; 