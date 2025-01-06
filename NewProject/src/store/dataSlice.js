import {createSlice} from "@reduxjs/toolkit"

const dataSlice=createSlice({
    name:"data",
    initialState:{
        data:null,
        loading:true,
    },
    reducers:{
        getData:(state,action)=>{
            state.data=action.payload;
            state.loading=false;
        },
        removerItem:(state,action)=>{
            const id=action.payload;
            const updateData=state.data.filter((data)=>data.id!==id);
            console.log(updateData);
            state.data=updateData;
            
        }
    }
})


export const {getData,removerItem}=dataSlice.actions;
export default dataSlice.reducer;