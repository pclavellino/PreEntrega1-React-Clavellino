import { useState, useEffect } from "react";
import { getProductById } from "../asyncMock";

export const useGetProductById = (productId) => {
    const [product, setProduct] = useState([])
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        getProductById(productId)
        .then(response => {
            setProduct(response)
        })
        .finally(() => {
            setIsLoading(false)
        })
    })

    return {
        product,
        isLoading
    }
}