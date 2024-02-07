import axios from 'axios';
import { CART_ADD_ITEM, CART_REMOVE_ITEM, CART_SAVE_SHIPPING_ADDRESS, CART_LOAD_SHIPPING_ADDRESS } from "../constants/cartConstants";

export const addToCart = (id, qty) => async (dispatch, getState) => {
  try {
    const { data } = await axios.get(`http://127.0.0.1:8000/products/${id}/`);
  
    dispatch({
        type: CART_ADD_ITEM,
        payload: {
            product: data._id,
            name: data.name,
            image: data.image,
            price: data.price,
            countInStock: data.countInStock,
            qty
        }
    });

    const { cart } = getState();
    localStorage.setItem('cartItems', JSON.stringify(cart.cartItems || []));
  } catch (error) {
    // Handle error
  }
};

export const removeFromCart = (id) => (dispatch, getState) => {
  dispatch({
      type: CART_REMOVE_ITEM,
      payload: id
  });

  const { cart } = getState();
  localStorage.setItem('cartItems', JSON.stringify(cart.cartItems || []));
};

export const saveShippingAddress = (data) => async (dispatch, getState) => {
  dispatch({
      type: CART_SAVE_SHIPPING_ADDRESS,
      payload: data,
  });

  localStorage.setItem('shippingAddress', JSON.stringify(data));

  const { userLogin: { userInfo } } = getState();
  try {
    await axios.post('/save-shipping/', { ...data, user: userInfo._id });
  } catch (error) {
    // Handle error
  }
};

export const loadShippingAddress = () => (dispatch) => {
  const shippingAddressFromStorage = localStorage.getItem('shippingAddress')
    ? JSON.parse(localStorage.getItem('shippingAddress'))
    : {};

  dispatch({
    type: CART_LOAD_SHIPPING_ADDRESS,
    payload: shippingAddressFromStorage,
  });
};
