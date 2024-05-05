import { SET_GLOBAL_VARIABLE } from './actions';

const initialState = {
  accesory: 'Shirts',
  page: 'Home',
 };
 
 const globalVariablesReducer = (state = initialState, action) => {
  switch (action.type) {
     case SET_GLOBAL_VARIABLE:
       return {
         ...state,
         [action.payload.variableName]: action.payload.variableValue,
       };
     default:
       return state;
  }
 };
 
 export default globalVariablesReducer;