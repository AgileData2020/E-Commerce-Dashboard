import { createSlice } from "@reduxjs/toolkit";
import { revenueData } from "../../../testData";

export const inventorySlice = createSlice({
    name: 'inventory',
    initialState: {
        inventoryData: revenueData
    },
    reducers: {
        updateInventory: (state, action) => {
            console.log(action.payload, 'action.payload')


            state.inventoryData = action.payload
        },




    }
})
export const { updateInventory } = inventorySlice.actions

export default inventorySlice.reducer;