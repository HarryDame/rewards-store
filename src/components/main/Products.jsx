import React, { useState, useEffect } from "react";
import ProductServices from "../../services/ProductService";
import ProductCard from "./ProductCard";

function Productos (){

    const [productos, setProductos]= useState([]);

    const getProducts = async () => { 
        const arrayDeProductos = await ProductService.getProductos(); 

        setProductos(arrayDeProductos); 
    }

    useEffect(getProducts,[]);
// Solo se deberia ejecutar una vex con el useEffect
    return (

        <div>
            {productos.map(producto => <ProductCard key={producto._id} {...producto}/>)}
        </div>
    )
};

export default Productos; 