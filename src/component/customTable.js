import { IconButton, Table } from 'rsuite';
import Button from 'rsuite/Button';
import { useEffect, useState } from 'react';
import DataGrid, { Column, Pager, Paging, HeaderFilter, Scrolling, Sorting, LoadPanel, SearchPanel } from 'devextreme-react/data-grid';
import HelperClass from '../helper';
export default function CustomTable({ setOpen, tableHeaderData, tableBodyData, active, }) {





  const handleRowClick = (rowData) => {

    // Access the ID of the clicked row's data object
    const { id } = rowData;

    // Now you can use the ID or perform any other actions
  };

  const chartingView = (rowData) => {
    // setOpen(true)
  }



  const colorCondition = true;
  return (


    <>



      <DataGrid
        height={HelperClass.tableHeightDecider(tableBodyData)}
        dataSource={tableBodyData}
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
            alignment="left"
            maxWidth={300} key={column.data_key}
            dataField={column.data_key}
            caption={column.data_key === 'Unnamed' ? '' : column.data_key}
            fixed={column.data_key === 'Serial Number' ? true : false}
            cellRender={cellData => {
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
