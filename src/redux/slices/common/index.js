import { createSlice } from "@reduxjs/toolkit";

export const sliceCommon = createSlice({
    name: 'commonData',
    initialState: {
        isLoading: false
    },
    reducers: {
        handleIsLoading: (state, action) => {
            state.isLoading = action.payload
        }
    }
})
export const { handleIsLoading } = sliceCommon.actions

export default sliceCommon.reducer;