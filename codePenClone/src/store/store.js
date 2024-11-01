import {configureStore} from '@reduxjs/toolkit'
import userReducer from './slice/codepenslice'

const store=configureStore({
    reducer: {
        users: userReducer
    } ,
})

export default store