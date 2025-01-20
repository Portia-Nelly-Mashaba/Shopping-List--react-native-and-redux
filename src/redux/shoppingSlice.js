import {createSlice} from '@reduxjs/toolkit';

export const shoppingSlice = createSlice({
    name: 'shopping',
    initialState: {
        items: []
    },
    reducers: {
        addItem: (state, action) => {
            const newItem = {
                id: action.payload.id,
                name: action.payload.name,
                quantity: action.payload.quantity
            };
            state.push(newItem);
        },
        deleteItem: (state, action) => {
            return state.items.filter(item => item.id !== action.payload.id);
        },
        updateItem: (state, action) => {
            const index = state.items.findIndex(item => item.id === action.payload.id);
            state.items[index] = action.payload;
        }
    }
});

export const {addItem, deleteItem, updateItem} = shoppingSlice.actions;

export default shoppingSlice.reducer;