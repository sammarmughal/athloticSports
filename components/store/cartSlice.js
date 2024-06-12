import { createSlice } from '@reduxjs/toolkit';

const isClient = typeof window !== 'undefined';

const loadCartFromLocalStorage = () => {
  if (isClient) {
    const storedCart = localStorage.getItem('cart');
    return storedCart ? JSON.parse(storedCart) : [];
  }
  return [];
};

const initialState = {
  count: 0,
  items: loadCartFromLocalStorage(),
};

initialState.count = initialState.items.reduce((total, item) => total + item.quantity, 0);

const saveCartToLocalStorage = (items) => {
  if (isClient) {
    localStorage.setItem('cart', JSON.stringify(items));
  }
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const newItem = action.payload;

      const existingItem = state.items.find(
        (item) => item.sku_id === newItem.sku_id && item.size === newItem.size
      );

      if (existingItem) {
        existingItem.quantity += newItem.quantity || 1;
      } else {
        state.items.push({ ...newItem, quantity: newItem.quantity || 1 });
      }

      state.count = state.items.reduce((total, item) => total + item.quantity, 0);
      saveCartToLocalStorage(state.items);
    },
    incrementQuantity: (state, action) => {
      const { sku_id, size } = action.payload;
      const item = state.items.find(item => item.sku_id === sku_id && item.size === size);

      if (item) {
        item.quantity += 1;
        state.count += 1;
        saveCartToLocalStorage(state.items);
      }
    },
    decrementQuantity: (state, action) => {
      const { sku_id, size } = action.payload;
      const item = state.items.find(item => item.sku_id === sku_id && item.size === size);

      if (item && item.quantity > 1) {
        item.quantity -= 1;
        state.count -= 1;
        saveCartToLocalStorage(state.items);
      }
    },
    removeFromCart: (state, action) => {
      const { sku_id, size } = action.payload;
      const item = state.items.find(item => item.sku_id === sku_id && item.size === size);

      if (item) {
        state.count -= item.quantity;
        state.items = state.items.filter(
          item => !(item.sku_id === sku_id && item.size === size)
        );
        saveCartToLocalStorage(state.items);
      }
    },
    clearCart: (state) => {
      state.items = [];
      state.count = 0;
      saveCartToLocalStorage(state.items);
    }
  },
});

export const { addToCart, incrementQuantity, decrementQuantity, removeFromCart, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
