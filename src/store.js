import {configureStore} from '@reduxjs/toolkit'
import {thunk} from 'redux-thunk'
import {productListReducer} from './reducers/productReducers'
import {combineReducers} from 'redux'
import { cartReducer } from './reducers/cartReducers'; // Import your cartReducer


const reducer = combineReducers({
    productList: productListReducer,
    cart: cartReducer,

})


const initialState = {

}

const middleware = [thunk]

const store = configureStore({
    reducer,
    initialState,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(middleware),
})

export default store