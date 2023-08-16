import React from "react";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import { UseApiCall } from '../../../api/fetch/UseApiCall';
import { useDispatch } from "react-redux";

import { Navigate } from "react-router-dom";
// import { AUTH } from "../../../api/fetch/ApiEndpoint";

export const loginUser = createAsyncThunk("v1/login", async (payload) => {

    // const response = await UseApiCall(AUTH.LOGIN, payload);
    // return response;
    // console.log(payload, 'payload')
    return payload
})

export const sliceLogin = createSlice({
    name: 'login',
    initialState: {
        email: "",
        token: "",
        uuid: "",
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