import { getDoc, doc, getFirestore } from "firebase/firestore";
import { useState, useEffect } from "react";

export const useGetProductById = (productId) => {
    const [product, setProduct] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {

        const db = getFirestore();

        const element = doc(db, "products", productId);
        getDoc(element).then((item) => {
            if(item.exists()) {
                setProduct({ id : item.id, ...item.data()})
            } 
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