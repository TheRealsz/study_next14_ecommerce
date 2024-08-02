"use client"

import { createContext, useContext, useState } from "react";

// Definir o tipo de um item do carrinho
interface CartItem {
    productId: number
    quantity: number
}

// Definir o tipo do contexto e o que ele deve conter 
interface CartContextType {
    items: CartItem[];
    addToCart: (productId: number) => void;
}

const CartContext = createContext({} as CartContextType);

export function CartProvider({ children }: { children: React.ReactNode }) {

    const [cartItems, setCartItems] = useState<CartItem[]>([]);

    function addToCart(productId: number) {
        // Verificando se o produto já está no carrinho
        setCartItems((oldState) => {
            const productInCart = oldState.some((item) => item.productId === productId);

            // Se ele já estiver no carrinho, aumentar a quantidade após percorrer o array
            if (productInCart) {
                return oldState.map((item) => item.productId === productId
                    ? { ...item, quantity: item.quantity + 1 }
                    : item
                );
            }

            // Caso nao esteja, adicionar o produto ao carrinho
            else {
                return [...oldState, { productId, quantity: 1 }];
            }
        });
    }

    return (
        <CartContext.Provider value={{ items: cartItems, addToCart: addToCart }}>
            {children}
        </CartContext.Provider>
    );
}

// Criar um hook para facilitar o uso do contexto
export const useCart = () => useContext(CartContext);