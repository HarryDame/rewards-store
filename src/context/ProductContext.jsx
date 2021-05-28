import React, {useState, useEffect} from "react";
import ProductService from "../services/ProductService";

export const ProductContext = React.createContext();

export default function ProductContextProvider({children}){

	const [products, setProducts] = useState([]);
	const [showHistory, setHistoryFlag] = useState(false);

	const fetchProducts = async () => {
		const products = await ProductService.getProducts();
		setProducts(products);
	}

	useEffect(() => {fetchProducts();},[]);

	return(
		<ProductContext.Provider value={{products, setProducts, showHistory, setHistoryFlag}}>
			{children}
		</ProductContext.Provider>
	)
}
