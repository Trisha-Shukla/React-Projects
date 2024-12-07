import {configureStore} from '@reduxjs/toolkit'
import recipeDetail from './recipeSlice/recipeSlice'



const store=configureStore({
    reducer: {
        recipeData: recipeDetail,
        
    } ,
})

export default store