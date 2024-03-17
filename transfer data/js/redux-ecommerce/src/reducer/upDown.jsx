const initialState = [];

const handleAddToCart = (state = initialState, action) => {
  switch (action.type) {
    case "ADDTOCART":
      if (state.length > 0) {
        const item = state.find((item) => item.id === action.payload.id);
        if (!item) {
          return [...state, action.payload];
        } else {
          return state;
        }
      } else {
        return [...state, action.payload];
      }

    case "REMOVECART":
      state = state.filter((item) => item.id !== action.payload);
      return state;

    case "INCREASEQUANTITY":
      return state.map((item) => {
        return item.id === action.payload
          ? { ...item, quantity: item.quantity + 1 }
          : item;
      });

    case "DECREASEQUANTITY":
      return state.map((item) => {
        return item.id === action.payload && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item;
      });
    default:
      return state;
  }
};

export default handleAddToCart;
