import { getDoc, doc, getFirestore } from "firebase/firestore";
import { useState, useEffect } from "react";

export const useGetProductById = (productId) => {
    const [product, setProduct] = useState([])
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {

        const db = getFirestore();

        const element = doc(db, "productos", productId);
        getDoc(element).then((item) => {
            setProduct({ id : parseInt(item.id), ...item.data()})
        })
        .finally(() => {
            setIsLoading(false)
        })
    }, [productId])

    return {
        product,
        isLoading
    }
}