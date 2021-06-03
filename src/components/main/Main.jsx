import React, {useContext, useEffect, useState} from "react";
import Filter from "./Filters";
import ProductContainer from "./ProductContainer";
import Error from "../general/Error";
import {ProductContext} from "../../context/ProductContext";
// import ProductServices from "../../services/ProductService";

const Main = () => {
	const [sort, setSort] = useState("0")
	const [page, setPage] = useState(1);
	const {products, setProducts} = useContext(ProductContext);
	
	const handleSort = (e) => {
		setSort(e.target.name);
		setPage(1);
	}

	const handlePage = (e) => {
		const increment = parseInt(e.target.name, 10)
		setPage(page + increment);
	}
	useEffect(() => {
		setPage(1);
	},[products]);
	
	// A Main llegan los 32 products pero porque algunas veces a lo ultimo llegan 0 y renderiza el <Error/> y otras llegan los 32 y los renderiza.

	// Solucionado!!!!
	return(
		<main className="main">
			{
				products.length < 1 ?
				<Error/>
				:
				<>
					<Filter handleSort={handleSort} sort={sort} handlePage={handlePage} page={page} isFooter={false} />
					<ProductContainer sort={sort} page={page}/>
					<Filter handlePage={handlePage} page={page} isFooter={true} />
				</>
				
				 
				
					
			}
		</main>
	)
}

export default Main;
