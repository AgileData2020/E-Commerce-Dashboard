import { createSlice } from "@reduxjs/toolkit";
import { act } from "react-dom/test-utils";

export const sliceCommon = createSlice({
    name: 'commonData',
    initialState: {
        isLoading: false,
        sheetActiveTab: 'Inlets'
    },
    reducers: {
        handleIsLoading: (state, action) => {
            state.isLoading = action.payload
        },

        setSheetActiveTab: (state, action) => {
            state.sheetActiveTab = action.payload
        }
    }
})
export const { handleIsLoading, setSheetActiveTab } = sliceCommon.actions

export default sliceCommon.reducer;