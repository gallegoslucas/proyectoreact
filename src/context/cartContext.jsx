import { createContext, useState } from "react";

export const cartContext = createContext();

const ContextProvider = cartContext.Provider;

export function CartContextProvider({children}) {
   
    
    const [cart, setCart] = useState([]);

    function addToCart(product, count) {
        let itemAlreadyInCart = cart.findIndex(
            (itemInCart) => itemInCart.id === product.id
        );

        let newCart = [...cart];

        if (itemAlreadyInCart !== -1) {
            newCart[itemAlreadyInCart].count += count;
            setCart(newCart);
        } else {
            product.count = count;
            newCart.push(product);
            setCart(newCart);
        }
    }


    function itemsInCart() {
        let total = 0;
        cart.forEach((itemInCart) => (total = total + itemInCart.count));
        return total;
    }
    
    function clear() {
        setCart([]);
    }
    function removeItem(productId) {
        const newCart = [...cart];
        let filtered = newCart.filter((product) => product.id !== productId);
        setCart(filtered);

    }

    function priceInCart() {
        let totalCarro= 0;
        for (const elemento of cart) {
            totalCarro = totalCarro + (elemento.price * elemento.count);
        }
        return totalCarro;
    }

    

    return (
        <cartContext.Provider value={{ cart, addToCart, itemsInCart, clear, removeItem, priceInCart }}>
            {children}
        </cartContext.Provider>
    )
}
