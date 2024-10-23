import { CartItem } from '@/lib/definations';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';




interface dataProps {
    totalShippingPrice: number,
    type: string,
}

interface shippingState {
    shippingPrice: number,
    totalPrice: number,
}

const initialState: shippingState = {
    shippingPrice: 0,
    totalPrice: 0,
};

export const shippingSlice = createSlice({
    name: 'shipping',
    initialState,
    reducers: {
        setShippingPrice: (state, action: PayloadAction<dataProps>) => {
            // state.shippingPrice = action.payload
            if(action.payload.type === "cash"){
                state.shippingPrice = 99.00;
                state.totalPrice = action.payload.totalShippingPrice + state.shippingPrice;
            }else{
                state.shippingPrice = 0;
                state.totalPrice = action.payload.totalShippingPrice - state.shippingPrice;
            }
            
            
        },
        
    },
});

export const { setShippingPrice } = shippingSlice.actions;

export default shippingSlice.reducer;