import { SET_CAR } from '../actions/CarActions';

const initialState = {
  cartItems: []
};
 
const globalVariablesReducer = (state = initialState, action) => {
  switch (action.type) {
     case SET_CAR:
       return {
         ...state,
         cartItems: [...state.cartItems, action.payload],
       };
     default:
       return state;
  }
};
 
export default globalVariablesReducer;