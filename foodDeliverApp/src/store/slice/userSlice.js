import { createSlice } from "@reduxjs/toolkit";
import {fetchUser} from '../../utils/helpers'

const userInfo=fetchUser();

const codepenSlice = createSlice({
    name: 'user',
    initialState: {
        userData: userInfo,        
    },
    reducers: {
        setUser(state, action) {
            state.userData = action.payload;
        },
        
    }
});

export const { setUser } = codepenSlice.actions;
export default codepenSlice.reducer;
