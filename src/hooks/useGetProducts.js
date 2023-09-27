import { useState, useEffect } from "react";
import { getProducts } from "../asyncMock";

export const useGetProducts = () => {

    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        getProducts()
        .then((response)=> setProducts(response))
        .finally(() => setIsLoading(false))
    }, [])

    return {
        products,
        isLoading
    }

}