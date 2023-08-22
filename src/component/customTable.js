import { IconButton, Table } from 'rsuite';
import Button from 'rsuite/Button';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import DataGrid, { Column, Pager, Paging, HeaderFilter, Scrolling, Sorting, LoadPanel, SearchPanel } from 'devextreme-react/data-grid';
import HelperClass from '../helper';
export default function CustomTable({ setOpen, tableHeaderData, tableBodyData, active, tableLabel }) {





  const handleRowClick = (rowData) => {

    // Access the ID of the clicked row's data object
    const { id } = rowData;

    // Now you can use the ID or perform any other actions
  };

  const chartingView = (rowData) => {
    // setOpen(true)
  }


  const activeTabs = useSelector(state => state.commonData.sheetActiveTab)


  const fixedColumnArray = ['Serial Number', 'Meter Name', 'Meter Number', 'Name'];

  const handleRowPrepared = (e) => {

    console.log(e.data, 'e.rowType')
    if (e.rowType === 'data') {
      const backgroundColor = (e.data.Mcf === 'Inlet Comp' || e.data.Mcf === 'Outlet Comp' || (e.data.Unnamed === null && e.data.Mcf === null)) ? '#3059D1' : '';
      e.rowElement.style.backgroundColor = backgroundColor;


    }
  };
  return (


    <>



      <DataGrid
        height={HelperClass.tableHeightDecider(tableBodyData)}
        dataSource={tableBodyData}
        onRowPrepared={handleRowPrepared}
        // defaultColumns={HelperClass.getTableColumns(tableHeaderData)}
        showBorders={true}
        width="100%"
        // wordWrapEnabled={true}
        scrolling={{
          mode: "virtual",
          showScrollbar: "always",
          useNative: true // or false, depending on your needs
        }}
        showColumnLines={true}
        showRowLines={true}
        allowColumnResizing={true}
        columnResizingMode={'widget'}
        columnAutoWidth={true}
      >

        {/* <SearchPanel visible={true} highlightCaseSensitive={true} width="95%" class="mx-auto" /> */}
        <Scrolling mode="virtual" />
        <LoadPanel enabled={true} />


        {tableHeaderData.map(column => (
          <Column
            cssClass={(activeTabs === 'Rollup' && tableLabel === 'Rollup Component Volume' || tableLabel === 'Rollup Component Heating Content') ? 'cls' : ''}
            alignment="left"
            cellStyle={{
              border: '12px solid black', // Set border width and style
            }}
            maxWidth={300}
            key={column.data_key}
            dataField={column.data_key}
            caption={column.data_key === 'Unnamed' ? '' : column.data_key}
            fixed={fixedColumnArray.includes(column.data_key) ? true : false}
            cellRender={cellData => {

              console.log(cellData, 'cellData')
              const cellValue = cellData.value;
              let backgroundColor = 'transparent'; // Default background color
              let color = "black"
              if (column.data_key === 'N2') {
                // Apply conditional cell color for the "Age" column
                // backgroundColor = cellValue >= 18 ? 'green' : 'red';
                color = cellValue >= 1 ? 'black' : 'black';

              }
              if (cellData.value === "") {
                // backgroundColor = 'blue';
                cellData.value = null
              }

              const cellStyles = {
                backgroundColor,
                color,
                // color: 'black',
                padding: '10px'
                // Set font color for better contrast
                // Add more styles as needed
              };

              return (
                <div style={cellStyles}>
                  {cellValue}
                </div>
              );
            }}

          >


          </Column>
        ))}
      </DataGrid>

    </>
  )
}
