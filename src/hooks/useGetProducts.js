import { useState, useEffect } from "react";
import { getProductsByCategory } from "../asyncMock";
import { getProducts } from "../asyncMock";

export const useGetProducts = (productCategory) => {

    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {

        const showProducts = productCategory ? getProductsByCategory : getProducts;

        showProducts(productCategory)
        .then((response)=> setProducts(response))
        .finally(() => setIsLoading(false))
    }, [productCategory])

    /*useEffect(() => {
        getProducts()
        .then((response)=> setProducts(response))
        .finally(() => setIsLoading(false))
    }, [])*/

    return {
        products,
        isLoading
    }

}