import { createSlice } from '@reduxjs/toolkit';

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
      state.items.push(newItem); // Updated to state.items
    },
    deleteItem: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload.id); // Correctly update state
    },
    updateItem: (state, action) => {
      const index = state.items.findIndex(item => item.id === action.payload.id);
      if (index !== -1) {
        state.items[index] = action.payload;
      }
    }
  }
});

export const { addItem, deleteItem, updateItem } = shoppingSlice.actions;

export default shoppingSlice.reducer;
