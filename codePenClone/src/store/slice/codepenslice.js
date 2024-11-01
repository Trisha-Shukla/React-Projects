import { createSlice } from "@reduxjs/toolkit";

const codepenSlice = createSlice({
    name: 'user',
    initialState: {
        userData: null,
        projects: null,
        searchTerm: '',
    },
    reducers: {
        setUser(state, action) {
            state.userData = action.payload;
        },
        setUserNull(state) {
            state.userData = null;
        },
        setProject(state, action) {
            state.projects = action.payload;
        },
        setProjectNull(state) {
            state.projects = null;
        },
        setSearchTerm(state, action) {
            console.log(action.payload);
            console.log("update search");
            
            state.searchTerm = action.payload;
        },
        setSearchTermNull(state) {
            state.searchTerm = '';
        }
    }
});

export const { setUser, setUserNull, setProject, setProjectNull, setSearchTerm, setSearchTermNull } = codepenSlice.actions;
export default codepenSlice.reducer;
