import { createSlice } from '@reduxjs/toolkit';

const isClient = typeof window !== 'undefined';

// Load cart items from local storage
const loadCartFromLocalStorage = () => {
  if (isClient) {
    const storedCart = localStorage.getItem('cart');
    return storedCart ? JSON.parse(storedCart) : [];
  }
  return [];
};

// Initial state of the cart with items loaded from local storage
const initialState = {
  count: 0,
  items: loadCartFromLocalStorage(),
};

// Calculate the total count of items in the cart
initialState.count = initialState.items.reduce((total, item) => total + item.quantity, 0);

// Save cart items to local storage
const saveCartToLocalStorage = (items) => {
  if (isClient) {
    localStorage.setItem('cart', JSON.stringify(items));
  }
};

// Create the cart slice with actions and reducers
const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const newItem = action.payload;

      // Find an existing item in the cart with the same SKU and size
      const existingItem = state.items.find(
        (item) => item.sku_id === newItem.sku_id && item.size === newItem.size
      );

      if (existingItem) {
        // Increment the quantity if the item already exists
        existingItem.quantity += newItem.quantity || 1;
      } else {
        // Add the new item with default quantity 1 if not already present
        state.items.push({ ...newItem, quantity: newItem.quantity || 1 });
      }

      // Recalculate the total count of items in the cart
      state.count = state.items.reduce((total, item) => total + item.quantity, 0);

      // Save the updated cart to local storage
      saveCartToLocalStorage(state.items);
    },
    incrementQuantity: (state, action) => {
      const { sku_id, size } = action.payload;
      // Find the item to increment its quantity based on SKU and size
      const item = state.items.find(item => item.sku_id === sku_id && item.size === size);

      if (item) {
        item.quantity += 1;
        state.count += 1;
        saveCartToLocalStorage(state.items);
      }
    },
    decrementQuantity: (state, action) => {
      const { sku_id, size } = action.payload;
      // Find the item to decrement its quantity based on SKU and size
      const item = state.items.find(item => item.sku_id === sku_id && item.size === size);

      if (item && item.quantity > 1) {
        item.quantity -= 1;
        state.count -= 1;
        saveCartToLocalStorage(state.items);
      }
    },
    removeFromCart: (state, action) => {
      const { sku_id, size } = action.payload;
      // Find the item to remove based on SKU and size
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

// Export the actions to use in your components
export const { addToCart, incrementQuantity, decrementQuantity, removeFromCart, clearCart } = cartSlice.actions;

// Export the reducer to include in the store
export default cartSlice.reducer;
