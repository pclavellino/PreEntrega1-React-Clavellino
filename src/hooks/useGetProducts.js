import { useState, useEffect } from "react";
import { collection, getDocs, getFirestore, query, where } from "firebase/firestore";

export const useGetProducts = (productCategory) => {

    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        
        const db = getFirestore();

        if (productCategory) {
            const productQuery = query(collection(db, "productos"), where ("categoria", "==", productCategory));
        getDocs(productQuery).then((item) => {
            setProducts(item.docs.map((doc) => ({ id: parseInt(doc.id), ...doc.data()})))
        })
        .finally(() => setIsLoading(false))
        } else {
            const productCollection = collection(db, "productos");
        getDocs(productCollection).then((item) => {
            setProducts(item.docs.map((doc) => ({ id: parseInt(doc.id), ...doc.data()})))
        })
        .finally(() => setIsLoading(false))
        }  

    }, [productCategory])

    return {
        products,
        isLoading
    }

}