import jwt_decode from "jwt-decode";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { auth } from "../../../api/endPoints";
import axiosInstance from "../../../api/axiosInstance";
export const loginUser = createAsyncThunk("v1/login", async (payload, { rejectWithValue }) => {


    const formData = new FormData();



    formData.append('username', payload.username);
    formData.append('password', payload.password);

    try {
        const response = await axiosInstance.post(auth.Login, formData);
        localStorage.setItem('token', response.data?.access_token)
        return response.data.access_token;
    } catch (error) {
        return rejectWithValue(error);
    }

})

export const sliceLogin = createSlice({
    name: 'login',
    initialState: {

        token: "",

    },
    extraReducers(builder) {
        /* login reducer */
        builder.addCase(loginUser.pending, (state, action) => {
            console.log("Pending State");
        })
            .addCase(loginUser.fulfilled, (state, action) => {

                state.token = action.payload
                console.log(action, 'actionactionactionaction')

            })
            .addCase(loginUser.rejected, (state, action) => {
                console.log("Error", action);
            })
    }
})

export default sliceLogin.reducer;