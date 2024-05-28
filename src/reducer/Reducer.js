import { SET_CAR } from '../actions/CarActions';
import { SET_USER, SET_ADMIN } from '../actions/UserActions';


const initialState = {
  cartItems: [],
  user: null,
  isAdmin: false,
};
 
const globalVariablesReducer = (state = initialState, action) => {
  switch (action.type) {
     case SET_CAR:
       return {
         ...state,
         cartItems: [...state.cartItems, action.payload],
       };
      case SET_USER:
      return {
        ...state,
        user: action.payload,
      };
      case SET_ADMIN:
        return {
          ...state,
          user: action.payload,
        };
     default:
       return state;
  }
};
 
export default globalVariablesReducer;