/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useContext } from "react";
import ProductCard from "./ProductCard";
import { ProductContext } from "../../context/ProductContext";

const ProductContainer = ({sort, page}) => {

	const {products} = useContext(ProductContext);
	
	return(
		<div className="product-container">{products && products.map((product, index) => {

			const limit = page*16;
			const offSet = limit-16;

			if(index >= offSet && index < limit){
				return (
					<ProductCard {...product} key={`${product._id}-${index}`}/>
					)
				}else{
					return null;
				}
			})}
		</div>
	)
}

export default ProductContainer;
