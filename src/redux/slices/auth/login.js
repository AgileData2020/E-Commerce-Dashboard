
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import axiosInstance from "../../../api/axiosInstance";
export const loginUser = createAsyncThunk("v1/login", async (payload) => {

    const response = await axiosInstance.get('/products');
    return response;

})

export const sliceLogin = createSlice({
    name: 'login',
    initialState: {
        email: "",
        token: "",

    },
    extraReducers(builder) {
        /* login reducer */
        builder.addCase(loginUser.pending, (state, action) => {
            // console.log("Pending State");
        })
            .addCase(loginUser.fulfilled, (state, action) => {
                console.log(action.payload, 'dssssssss')
                state.email = action.payload.test

            })
            .addCase(loginUser.rejected, (state, action) => {
                console.log("Error", action);
            })
    }
})

export default sliceLogin.reducer;