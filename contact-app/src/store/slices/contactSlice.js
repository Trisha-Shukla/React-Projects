import { createSlice } from "@reduxjs/toolkit";


const contactSlice=createSlice({
    name:'contacts',
    initialState:{
        contactList:[],
        isEdit:''

    },
    reducers:{
        addContact(state,action){
            console.log(action.payload);
            console.log(action.type);
            
        state.contactList.push(action.payload)
        },
        editContact(state, action) {
            
            const indexToEdit = state.contactList.findIndex(data => data.id == state.editContactId);
            state.contactList.splice(indexToEdit, 1, action.payload)
            state.isEdit = "";
        },
        setEditId(state,action){
            console.log(action.payload);
            
            state.isEdit=action.payload
        },
        deleteContact(state,action){
            const indexToDelete = state.contactList.findIndex(data => data.id == action.payload);
            state.contactList.splice(indexToDelete, 1);
            state.isEdit = "";
        }

        
    }
})
export const {addContact,editContact,setEditId,deleteContact}=contactSlice.actions;
export default contactSlice.reducer;
