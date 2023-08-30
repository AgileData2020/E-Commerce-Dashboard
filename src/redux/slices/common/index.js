import { createSlice } from "@reduxjs/toolkit";
import { act } from "react-dom/test-utils";

export const sliceCommon = createSlice({
    name: 'commonData',
    initialState: {
        isLoading: false,
        sheetActiveTab: 'Inlets',
        currentFile: '',
        tabNames: []
    },
    reducers: {
        handleIsLoading: (state, action) => {
            state.isLoading = action.payload
        },

        setSheetActiveTab: (state, action) => {
            state.sheetActiveTab = action.payload
        },

        getLatestFile: (state, action) => {
            state.currentFile = action.payload;
        },
        getTabsName: (state, action) => {
            state.tabNames = action.payload;
        }


    }
})
export const { handleIsLoading, setSheetActiveTab, getLatestFile, getTabsName } = sliceCommon.actions

export default sliceCommon.reducer;