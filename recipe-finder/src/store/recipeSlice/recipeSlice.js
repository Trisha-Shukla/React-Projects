import {createSlice} from '@reduxjs/toolkit'

const localstorageData=localStorage.getItem("searchResult");

const recipeSlice=createSlice({
    name:"warehouse",
    initialState:{
        searchQuery:localstorageData,
    },
    reducers:{
        searchRecipe:(state,action)=>{
            console.log(action.payload);
            state.searchQuery=action.payload
            
        },
    }
})

export const {searchRecipe}=recipeSlice.actions;
export default recipeSlice.reducer;