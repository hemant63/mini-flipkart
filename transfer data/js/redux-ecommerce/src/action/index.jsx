export const addTocart = (payload) => {
  return {
    type: "ADDTOCART",
    payload: payload,
  };
};

export const removeCart = (payload) => {
  return {
    type: "REMOVECART",
    payload: payload,
  };
};

export const incQuantity = (payload) => {
  return {
    type: "INCREASEQUANTITY",
    payload: payload,
  };
};

export const decquantity = (payload) => {
  return {
    type: "DECREASEQUANTITY",
    payload: payload,
  };
};
