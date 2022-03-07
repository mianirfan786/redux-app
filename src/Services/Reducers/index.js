import React from 'react';
import {combineReducers} from 'redux';
import {cartItems} from './HomeReducer';

export default combineReducers({
    cartItems,
});
