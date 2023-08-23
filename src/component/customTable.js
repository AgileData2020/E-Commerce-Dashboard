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


  const activeTabs = useSelector(state => state.commonData)


  const fixedColumnArray = ['Serial Number', 'Meter Name', 'Meter Number', 'Name'];

  const handleRowPrepared = (e) => {

    // console.log(e.key?.nan === 'Pressure' ? Object.values(e.key) : '', 'dsssss')

    if (e.rowType === 'data' && activeTabs.currentFile !== 'model_interface') {
      const backgroundColor = (e.data.Mcf === 'Inlet Comp' || e.data.Mcf === 'Outlet Comp' || e.data.Unnamed === null) ? '#3059D1' : '';
      e.rowElement.style.backgroundColor = backgroundColor;


    }
  };





  return (


    <>



      <DataGrid
        height={HelperClass.tableHeightDecider(tableBodyData)}
        dataSource={tableBodyData}
        // onCellPrepared={onCellPrepared}
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

            cssClass={((activeTabs.sheetActiveTab === 'rollup' && tableLabel === 'Rollup Component Volume' || tableLabel === 'Rollup Component Heating Content') || activeTabs.sheetActiveTab === 'Validation' || activeTabs.sheetActiveTab === 'FlowCal Data' || activeTabs.sheetActiveTab === 'Envelope') ? 'cls' : ''}
            alignment="left"
            maxWidth={300}
            key={column.data_key}
            dataField={column.data_key.replaceAll('.', '_')}
            caption={column.data_key === 'Unnamed' ? '' : column.data_key.replaceAll('_', '.')}
            fixed={fixedColumnArray.includes(column.data_key) ? true : false}
            cellRender={cellData => {

              console.log(cellData, 'cellData')
              console.log(cellData.key?.nan == 'Pressure' ? console.log('final', cellData.value < 25 && cellData.value) : 'nop', 'dsssss')
              const cellValue = cellData.value;
              let backgroundColor = 'transparent'; // Default background color
              let color = "black"
              if (column.data_key === 'C1' && activeTabs.currentFile === 'model_interface') {
                // Apply conditional cell color for the "Age" column
                backgroundColor = cellValue < 70 ? 'red' : 'white';
                color = cellValue < 70 ? 'white' : 'black';

              }
              else if (column.data_key === 'C6' && activeTabs.currentFile === 'model_interface') {
                backgroundColor = cellValue > 1 ? 'red' : 'white';
                color = cellValue > 1 ? 'white' : 'black';

              }
              else if (column.data_key === 'MW' && activeTabs.currentFile === 'model_interface') {
                backgroundColor = (cellValue < 86 || cellValue > 114) ? '#f4b083' : 'white';
                color = (cellValue < 86 || cellValue > 114) ? 'black' : 'black';

              }
              else if (column.data_key === 'Is 2ϕ' && activeTabs.currentFile === 'model_interface') {

                // console.log(cellValue, 'cellValue')
                backgroundColor = cellValue === 'True' ? '#f4b083' : 'white';

                // color = (cellValue < 86 || cellValue > 114) ? 'black' : 'black';

              }

              else if (column.data_key === 'Unnamed 3' && activeTabs.currentFile === 'model_interface') {

                // typeof ((cellValue)) === 'string' && console.log(cellValue.split(')'), 'sddddddddddddddddddddddddddddd')

                // backgroundColor = cellValue === 'True' ? '#f4b083' : 'white';

                // color = (cellValue < 86 || cellValue > 114) ? 'black' : 'black';

              } else if (cellData.key?.nan == 'Pressure' && cellData.value < 25) {
                backgroundColor = '#ffc7ce';
                color = '#9c0006'
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
