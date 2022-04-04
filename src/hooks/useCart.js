import { useEffect, useState } from "react";
import { getStoredCart } from "../utilities_A/cart-storage";


const useCart = (products) => {

    // cart state
    const [cart, setCart] = useState([]);


    // get local storage cart data
    useEffect(() => {
        const storedCart = getStoredCart();
        const savedCart = [];

        for (const id in storedCart) {
            const addedProduct = products.find(product => product.id === id);
            if (addedProduct) {
                const quantity = storedCart[id];
                addedProduct.quantity = quantity;
                savedCart.push(addedProduct);
            }
        }
        setCart(savedCart);
    }, [products]);

    return [cart, setCart];
};

export default useCart;