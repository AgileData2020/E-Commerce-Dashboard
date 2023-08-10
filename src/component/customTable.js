import { Table } from 'rsuite';
import Button from 'rsuite/Button';
import { useEffect, useState } from 'react';
import DataGrid, { Column, Pager, Paging, Scrolling, Sorting, LoadPanel, SearchPanel } from 'devextreme-react/data-grid';
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
  return (


    <>
      {/* <Table
          virtualized
          height={500}
          onRowClick={handleRowClick}
          bordered
          cellBordered
          // autoHeight
          affixHeader
          affixHorizontalScrollbar
          data={tableBodyData}
          loading={tableHeaderData.length === 0 ? true : false}

        >
          {tableHeaderData.map((column, index) => (
            <>
              <Table.Column key={column.Title + index} style={{ width: '200px' }} flexGrow={1} resizable>
                <Table.HeaderCell >{column.Title}   </Table.HeaderCell>
                <Table.Cell dataKey={column.data_key} />
              
              </Table.Column>


            </>
          ))}

          
        </Table> */}


      <DataGrid
        height={HelperClass.tableHeightDecider(tableBodyData)}
        dataSource={tableBodyData}
        // defaultColumns={HelperClass.getTableColumns(tableHeaderData)}
        showBorders={true}
        wordWrapEnabled={true}
        showColumnLines={true}
        showRowLines={true}
        columnResizingMode={'nextColumn'}
      >
        {/* <SearchPanel visible={true} highlightCaseSensitive={true} width="95%" class="mx-auto" /> */}
        <Scrolling mode="virtual" />
        <LoadPanel enabled={true} />


        {tableHeaderData.map(column => (
          <Column key={column.data_key} dataField={column.data_key} caption={column.data_key}
            cellRender={cellData => {
              const cellValue = cellData.value;
              let backgroundColor = 'transparent'; // Default background color
              let color = "black"
              if (column.data_key === 'N2') {
                // Apply conditional cell color for the "Age" column
                // backgroundColor = cellValue >= 18 ? 'green' : 'red';
                color = cellValue >= 18 ? 'black' : 'red';

              }

              const cellStyles = {
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
          />
        ))}
      </DataGrid>

    </>
  )
}
