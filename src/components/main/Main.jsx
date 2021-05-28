import React, {useContext, useEffect, useState} from "react";
import Filter from "./Filters";
import ProductContainer from "./ProductContainer";
import {ProductContext} from "../../context/ProductContext";

const Main = () => {
	const [sort, setSort] = useState("0")
	const [page, setPage] = useState(1);
	const {products} = useContext(ProductContext);
	
	const handleSort = (e) => {
		setSort(e.target.name);
		setPage(1);
	}

	const handlePage = (e) => {
		const increment = parseInt(e.target.name, 10)
		setPage(page + increment);
	}

	useEffect(() => {
		setPage(1)
	},[products])

	return(
		<main className="main">
			{
				products.length < 1 ? 
					<Error /> 
				:
					<>
						<Filter handleSort={handleSort} sort={sort} handlePage={handlePage} page={page} isFooter={false} />
						<ProductContainer sort={sort} page={page} />
						<Filter handlePage={handlePage} page={page} isFooter={true} />
					</>
			}
		</main>
	)
}

export default Main;
