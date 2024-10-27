import { createSlice } from "@reduxjs/toolkit";


const contactSlice=createSlice({
    name:'contacts',
    initialState:{
        contactList:[],
        isEdit:'',
        searchContact:'',

    },
    reducers:{
        addContact(state,action){
            console.log(action.payload);
            console.log(action.type);
            console.log(state);
            
        state.contactList.push(action.payload)
        },
        editContact(state, action) {
            
            const indexToEdit = state.contactList.findIndex(data => data.id == state.editContactId);
            state.contactList.splice(indexToEdit, 1, action.payload)
            state.isEdit = "";
        },
        setEditId(state,action){
            console.log(action.payload);
            
            state.isEdit=action.payload;
        },
        deleteContact(state,action){
            const indexToDelete = state.contactList.findIndex(data => data.id == action.payload);
            state.contactList.splice(indexToDelete, 1);
            state.isEdit = "";
        },
        displaySearch(state,action){
            state.searchContact=action.payload;
            console.log(action.payload);
            
              
        }

        
    }
})
export const {addContact,editContact,setEditId,deleteContact,displaySearch}=contactSlice.actions;
export default contactSlice.reducer;
