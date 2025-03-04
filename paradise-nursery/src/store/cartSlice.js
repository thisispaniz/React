import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
    items: [],
    totalQuantity: 0,
    totalPrice: 0,
    },
    reducers: {
    addToCart: (state, action) => {
        const item = state.items.find((p) => p.id === action.payload.id);
        if (!item) {
        state.items.push({ ...action.payload, quantity: 1 });
        }
        state.totalQuantity += 1;
        state.totalPrice += action.payload.price;
    },
    increaseQuantity: (state, action) => {
        const item = state.items.find((p) => p.id === action.payload);
        if (item) {
        item.quantity += 1;
        state.totalQuantity += 1;
        state.totalPrice += item.price;
        }
    },
    decreaseQuantity: (state, action) => {
        const item = state.items.find((p) => p.id === action.payload);
        if (item && item.quantity > 1) {
        item.quantity -= 1;
        state.totalQuantity -= 1;
        state.totalPrice -= item.price;
        }
    },
    removeItem: (state, action) => {
        const item = state.items.find((p) => p.id === action.payload);
        if (item) {
        state.totalQuantity -= item.quantity;
        state.totalPrice -= item.price * item.quantity;
        state.items = state.items.filter((p) => p.id !== action.payload);
        }
    },
    },
});

export const { addToCart, increaseQuantity, decreaseQuantity, removeItem } =
    cartSlice.actions;
export default cartSlice.reducer;
