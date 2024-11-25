import {configureStore} from "@reduxjs/toolkit"
import weatherDetails from './slice/detailSlice'

const store=configureStore({
    reducer:{
        details:weatherDetails,
    }
})

export default store;