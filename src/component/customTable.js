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
  const fixedColumnArrayRaw = ['Meter Name', 'Meter Number', 'Name'];
  const handleRowPrepared = (e) => {

    // console.log(e.key?.nan === 'Pressure' ? Object.values(e.key) : '', 'dsssss')

    if (e.rowType === 'data' && activeTabs.currentFile !== 'model_interface') {
      const backgroundColor = (e.data.Mcf === 'Inlet Comp' || e.data.Mcf === 'Outlet Comp' || e.data.Unnamed === null) ? '#3059D1' : '';
      e.rowElement.style.backgroundColor = backgroundColor;


    }
  };




  const headerCellRender = (data) => {
    const isSpecialHeader = data?.column?.caption === '999';

    if (isSpecialHeader && tableLabel === 'Composition Data') {
      return (
        <th>
          <span style={{ background: '#ffc7ce', padding: '20px', color: '#9c0006' }} >{data?.column?.caption}</span>
        </th>
      );
    }
    return <th>{data?.column?.caption}</th>;
  };

  const borderStyle = ['Pliny WB', 'Cypress WB', 'Golden WB', 'Bluto WB', 'Lowe WB', 'Tribute WB', 'Nailed it WB', 'Oasis WB', 'Olifant WB', 'Abigail WB']
  return (


    <>



      <DataGrid
        height={HelperClass.tableHeightDecider(tableBodyData)}
        dataSource={tableBodyData}
        // onCellPrepared={onCellPrepared}
        // onRowPrepared={handleRowPrepared}
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


        {tableHeaderData.map((column, index) =>
          <Column
            headerCellRender={headerCellRender}
            // cssClass={((activeTabs.sheetActiveTab === 'rollup' && tableLabel === 'Rollup Component Volume' || tableLabel === 'Rollup Component Heating Content') || activeTabs.sheetActiveTab === 'Validation' || activeTabs.sheetActiveTab === 'FlowCal Data' || activeTabs.sheetActiveTab === 'Envelope') ? 'cls' : ''}
            cssClass={activeTabs.sheetActiveTab === 'Model CS' && (borderStyle.includes(column.data_key) ? 'cls' : 'clss')}
            alignment="left"
            maxWidth={300}
            key={column.data_key}
            dataField={column.data_key.replaceAll('.', '_')}
            caption={column.data_key.search('Unnamed') != -1 ? '' : column.data_key.replaceAll('_', '.')}
            fixed={(activeTabs.sheetActiveTab === 'FlowCal Raw' && activeTabs.currentFile === 'model_interface') ? fixedColumnArrayRaw.includes(column.data_key) ? true : false : fixedColumnArray.includes(column.data_key) ? true : false}
            cellRender={cellData => {


              // console.log(cellData.key?. == 'InletComp' ? console.log('final', cellData.value < 100 && cellData.value) : cellData.key, 'dsssss')

              const cellValue = cellData.value;
              let backgroundColor = 'transparent'; // Default background color
              let color = "black"
              if (activeTabs.sheetActiveTab === 'Receiptpoints' && column.data_key === 'C1' && activeTabs.currentFile === 'model_interface') {
                // Apply conditional cell color for the "Age" column
                backgroundColor = cellValue < 70 ? 'red' : 'white';
                color = cellValue < 70 ? '#ffc000' : 'black';

              }
              if (activeTabs.sheetActiveTab === 'Receiptpoints' && column.data_key === 'N2' && activeTabs.currentFile === 'model_interface') {
                // Apply conditional cell color for the "Age" column
                backgroundColor = cellValue > 3 ? '#ffc7ce' : 'white';
                color = cellValue > 3 ? '#9c0006' : 'black';

              }
              else if (activeTabs.sheetActiveTab === 'Receiptpoints' && column.data_key === 'C6' && activeTabs.currentFile === 'model_interface') {
                backgroundColor = cellValue > 1 ? 'red' : 'white';
                color = cellValue > 1 ? '#ffc000' : 'black';

              }
              else if (column.data_key === 'MW' && activeTabs.currentFile === 'model_interface') {
                backgroundColor = (cellValue < 86 || cellValue > 114) ? '#f4b083' : 'white';
                color = (cellValue < 86 || cellValue > 114) ? 'black' : 'black';

              }
              else if (column.data_key === 'Is 2ϕ' && activeTabs.currentFile === 'model_interface') {

                backgroundColor = cellValue === 'True' ? '#f4b083' : 'white';
              }

              else if (cellData.key?.Unnamed === 'Pressure' && cellData.value < 25 && tableLabel === 'Composition Data') {
                backgroundColor = '#ffc7ce';
                color = '#9c0006'
              }
              else if ((cellData.key?.Mcf === 'Inlet Comp' || cellData.key?.Mcf === 'Outlet Comp') && (cellData.value < 200 && cellValue > 0)) {
                backgroundColor = '#4472c4';
                color = 'white'
              }

              else if ((cellData.key?.Mcf === null && tableLabel === 'Outlets 1') && (cellData.value < 200 && cellValue > 0)) {
                backgroundColor = '#4472c4';
                color = 'white'
              }

              else if ((tableLabel === 'Validation Input Table' && cellData.key?.Unnamed === null)) {
                backgroundColor = (cellValue != null && cellValue < 99.98 || cellValue > 100.2) ? '#fef2cb' : 'white';
                color = (cellValue < 99.98 || cellValue > 100.2) ? 'red' : 'black';
              }
              else if ((tableLabel === 'Model Input' && cellData.key?.Unnamed?.search('Hypo') != -1) && cellData.key?.Unnamed != null) {
                backgroundColor = cellValue > 0 ? '#dadada' : 'white';
                color = cellValue > 0 ? 'black' : 'black';
              }

              else if (activeTabs.sheetActiveTab === 'Receiptpoints' && column.data_key === 'Unnamed 3' && activeTabs.currentFile === 'model_interface') {
                if (typeof (cellValue) === 'string') {
                  // backgroundColor = cellValue.includes('(') ? 'red' : 'white';
                  color = cellValue.includes('(') ? 'red' : 'black';
                }

              }
              else if (activeTabs.sheetActiveTab === 'Rollup' && column.data_key === 'C6+' && activeTabs.currentFile === 'balance_with_model' && tableLabel === 'Rollup') {
                backgroundColor = cellValue > 1 ? '#ffc7ce' : 'white';
                color = cellValue > 1 ? '#9c0006' : 'black';
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

        )
        }


      </DataGrid >

    </>
  )
}
