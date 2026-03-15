import React, { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export const useCart = () => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error('useCart must be used within a CartProvider');
    }
    return context;
};

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState(() => {
        const savedCart = localStorage.getItem('nurasa_cart');
        return savedCart ? JSON.parse(savedCart) : [];
    });

    useEffect(() => {
        localStorage.setItem('nurasa_cart', JSON.stringify(cart));
    }, [cart]);

    const addToCart = (product, variant) => {
        setCart(prevCart => {
            const existingItemIndex = prevCart.findIndex(item => 
                item.id === product.id && item.variant.id === variant.id
            );

            if (existingItemIndex > -1) {
                const newCart = [...prevCart];
                newCart[existingItemIndex].quantity += 1;
                return newCart;
            }

            return [...prevCart, { 
                id: product.id, 
                name: product.name, 
                image: product.image,
                variant: variant,
                quantity: 1 
            }];
        });
    };

    const removeFromCart = (productId, variantId) => {
        setCart(prevCart => prevCart.filter(item => 
            !(item.id === productId && item.variant.id === variantId)
        ));
    };

    const updateQuantity = (productId, variantId, delta) => {
        setCart(prevCart => {
            return prevCart.map(item => {
                if (item.id === productId && item.variant.id === variantId) {
                    const newQty = Math.max(1, item.quantity + delta);
                    return { ...item, quantity: newQty };
                }
                return item;
            });
        });
    };
    const clearCart = () => setCart([]);

    const parsePrice = (priceStr) => {
        if (typeof priceStr === 'number') return priceStr;
        if (!priceStr) return 0;
        return parseInt(priceStr.replace(/[^0-9]/g, '')) || 0;
    };

    const cartTotal = cart.reduce((total, item) => {
        const price = parsePrice(item.variant.price);
        return total + (price * item.quantity);
    }, 0);

    const cartCount = cart.reduce((count, item) => count + item.quantity, 0);

    const formatWhatsAppMessage = () => {
        let message = `Halo Nurasa! Saya ingin memesan:\n\n`;
        cart.forEach((item, index) => {
            const price = parsePrice(item.variant.price);
            message += `${index + 1}. *${item.name}*\n`;
            message += `   Varian: ${item.variant.label} (${item.variant.size})\n`;
            message += `   Jumlah: ${item.quantity} x Rp ${price.toLocaleString('id-ID')}\n`;
            message += `   Subtotal: Rp ${(price * item.quantity).toLocaleString('id-ID')}\n\n`;
        });
        message += `*Total Pesanan: Rp ${cartTotal.toLocaleString('id-ID')}*\n\n`;
        message += `Mohon info detail pengiriman selanjutnya ya. Terima kasih!`;
        return encodeURIComponent(message);
    };

    const checkoutToWhatsApp = () => {
        const phoneNumber = '6285137143942'; // Nomor WA Nurasa
        const message = formatWhatsAppMessage();
        window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
    };

    return (
        <CartContext.Provider value={{ 
            cart, 
            addToCart, 
            removeFromCart, 
            updateQuantity, 
            clearCart, 
            cartTotal, 
            cartCount,
            checkoutToWhatsApp 
        }}>
            {children}
        </CartContext.Provider>
    );
};
