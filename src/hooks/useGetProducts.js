import { useState, useEffect } from "react";
import { collection, getDocs, getFirestore, query, where } from "firebase/firestore";

export const useGetProducts = (productCategory) => {

    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        
        const db = getFirestore();

        if (productCategory) {
            const productQuery = query(collection(db, "products"), where ("category", "==", productCategory));
        getDocs(productQuery).then((item) => {
            setProducts(item.docs.map((doc) => ({ id: doc.id, ...doc.data()})))
        })
        .finally(() => setIsLoading(false))
        } else {
            const productCollection = collection(db, "products");
        getDocs(productCollection).then((item) => {
            setProducts(item.docs.map((doc) => ({ id: doc.id, ...doc.data()})))
        })
        .finally(() => setIsLoading(false))
        }  

    }, [productCategory])

    return {
        products,
        isLoading
    }

}