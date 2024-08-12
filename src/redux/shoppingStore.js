import React from 'react'
import { createStore } from 'redux'
import shoppingReducer from './shoppingReducer';
import { composeWithDevTools } from '@redux-devtools/extension';

const shoppingStore = createStore(shoppingReducer,composeWithDevTools());

export default shoppingStore