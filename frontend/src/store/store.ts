import { combineReducers, configureStore } from '@reduxjs/toolkit'
import userReducer from './user/user.slice'

const reducers = combineReducers({
    user: userReducer
})

const store = configureStore({
    reducer: reducers

})

export default store