/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */

import { useState, useEffect, createContext } from "react";
import { getProductos } from "../services/api";

export const ProductContext = createContext();

export const ProductProvider = ({children}) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            const data = await getProductos();
            setProducts(data);
        }
        fetchProducts();
    },[])

    return (
        <ProductContext.Provider value={{ products }}>
            {children}
        </ProductContext.Provider>
    )
}