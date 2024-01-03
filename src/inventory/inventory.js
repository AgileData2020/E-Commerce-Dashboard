import React, { useRef, useState } from 'react';
import DataGrid, { Column, Toolbar, Item, FilterRow, SearchPanel, Editing, } from 'devextreme-react/data-grid';
import { FlexboxGrid } from 'rsuite';
import { Panel } from 'rsuite';
import { useSelector, useDispatch } from 'react-redux';
import { updateInventory } from '../redux/slices/inventory';
import Organic from '../organic';
const Inventory = () => {
    const inventoryData = useSelector(state => state?.inventory?.inventoryData);
    const gridRef = useRef(null);

    const dispatch = useDispatch();



    const deepCopyData = JSON.parse(JSON.stringify(inventoryData));;


    const handleRowUpdated = (e) => {
        // e.data contains the updated row data

        const index = deepCopyData.findIndex(item => item.id === e.data.id);

        if (index !== -1) {
            deepCopyData[index] = { ...deepCopyData[index], ...e.data };
            dispatch(updateInventory(deepCopyData))
            return true; // Object updated successfully
        }

        return false; // Object with the specified id not found
    };




    // You can call your custom function or perform any other action here
    // For example, you might want to make an API call to save the changes to the server.


    const handleRowInserted = (e) => {
        // Perform actions specific to the insertion of a new row here
        deepCopyData.push(e.data)
        dispatch(updateInventory(deepCopyData))

    };

    return (
        <>


            <FlexboxGrid justify="space-around" style={{ marginTop: '20px' }}>

                <FlexboxGrid.Item colspan={24} md={6}>
                    <Panel header={'Products'} shaded>

                        <DataGrid
                            dataSource={deepCopyData.reverse()}
                            showBorders={true}
                            showColumnLines={true}
                            showRowLines={true}
                            ref={gridRef}
                            keyExpr="id"
                            height={500}
                            onRowUpdated={handleRowUpdated}
                            onRowInserted={handleRowInserted}


                        >
                            <FilterRow visible={true} />
                            <SearchPanel
                                visible={true}
                                width={240}
                                placeholder="Search..." />
                            <Editing
                                mode="cell"
                                allowUpdating={true}
                                allowAdding={true}
                            />

                            <Column dataField="id" caption="ID" />
                            <Column dataField="name" caption="Product Name" />
                            <Column dataField="inventory" caption="Stock Level" title={'if stock level less than 1000 then color change for Low inventory alerts'} cellRender={(data) => {

                                return <span className={data.value < 1000 ? 'stockLevel' : ''}>{data.value}</span>;

                            }} />
                            <Column dataField="date" caption="Created Date" dataType="date" />
                            <Column dataField="category" caption="Category" />
                            <Column dataField="price" caption="Price" format="currency" />
                            <Column dataField="description" caption="Description" />
                            <Toolbar>
                                <Item name="addRowButton" showText="always" />

                                <Item name="searchPanel" />
                            </Toolbar>

                        </DataGrid>
                    </Panel>
                </FlexboxGrid.Item>
            </FlexboxGrid ></>
    );
}

export default Inventory;
