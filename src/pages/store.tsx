// import { createStore } from 'redux';
import { configureStore } from '@reduxjs/toolkit';

const initialState = {
  data: '',
};

const reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case 'SET_DATA':
      return {
        ...state,
        data: action.payload,
      };
    default:
      return state;
  }
};

// const store = createStore(reducer);
const store = configureStore({reducer})

export default store;