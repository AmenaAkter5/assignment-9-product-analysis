import { useEffect, useState } from "react";

const useProducts = () => {

    // data load state
    const [products, setProducts] = useState([]);

    // products data fetch
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    return [products, setProducts];
};

export default useProducts;