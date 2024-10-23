import { CartItem } from '@/lib/definations';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
// import type { PayloadAction } from '@reduxjs/toolkit';

interface CartState {
    items: CartItem[];
}

const initialState: CartState = {
    items: typeof window !== 'undefined' && localStorage.getItem('cart')
        ? JSON.parse(localStorage.getItem('cart')!)
        : [],
};

// const initialState: CartState = {
//     items: [],
// };

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        // Action to add or update product quantity in cart
        addToCart: (state, action: PayloadAction<CartItem>) => {
            const existingItem = state.items.find(item => item.productId === action.payload.productId);

            if (existingItem) {
                // If the product already exists, update the quantity
                existingItem.quantity = action.payload.quantity;
            } else {
                // If the product does not exist, add it to the cart
                state.items.push(action.payload);
            }

            // Sync state with localStorage
            localStorage.setItem('cart', JSON.stringify(state.items));
        },
        // Action to remove item from cart
        removeFromCart: (state, action: PayloadAction<number>) => {
            // Remove item by productId
            state.items = state.items.filter(item => item.productId !== action.payload);

            // Sync state with localStorage
            localStorage.setItem('cart', JSON.stringify(state.items));
        },
        
        ShippingCart: (state, action: PayloadAction<CartItem>) => {
            // const existingItem = state.items.find(item => item.productId === action.payload.productId);

            // if (existingItem) {
            //     existingItem.quantity = action.payload.quantity;
            // } else {
            //     state.items.push(action.payload);
            // }

            // localStorage.setItem('cart', JSON.stringify(state.items));
        },
        
        clearCart: (state) => {
            state.items = [];

            // Sync state with localStorage
            localStorage.removeItem('cart');
        },
    },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;

export default cartSlice.reducer;