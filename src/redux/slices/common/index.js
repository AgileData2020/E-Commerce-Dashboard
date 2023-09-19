import { createSlice } from "@reduxjs/toolkit";
import { act } from "react-dom/test-utils";

export const sliceCommon = createSlice({
    name: 'commonData',
    initialState: {
        isLoading: false,
        sheetActiveTab: 'Inlets',
        currentFile: '',
        currentFileID: '',
        tabNames: [],
        collapseable: true,
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
        getcurrentFileID: (state, action) => {
            state.currentFileID = action.payload;
        },
        getTabsName: (state, action) => {
            state.tabNames = action.payload;
        },

        setCollapse: (state, action) => {
            console.log(action.payload == 1)

            if (action.payload == 1) {
                state.collapseable = false;
            } else {
                state.collapseable = !state.collapseable;
            }

        }

    }
})
export const { handleIsLoading, setSheetActiveTab, getLatestFile, getTabsName, setCollapse, getcurrentFileID } = sliceCommon.actions

export default sliceCommon.reducer;