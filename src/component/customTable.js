import { Table } from 'rsuite';
import Button from 'rsuite/Button';
import { useEffect, useState } from 'react';


export default function CustomTable({ setOpen, tableHeaderData, tableBodyData, active }) {


  const [sortColumn, setSortColumn] = useState();
  const [sortType, setSortType] = useState();
  const [loading, setLoading] = useState(false);
  const [tableColumnData, setTableColumnData] = useState([]);
  const [tableContent, setTableContent] = useState([]);

  const handleRowClick = (rowData) => {

    // Access the ID of the clicked row's data object
    const { id } = rowData;
    console.log('Clicked ID:', rowData);
    // Now you can use the ID or perform any other actions
  };

  const chartingView = (rowData) => {
    // setOpen(true)
  }


  useEffect(() => {

    setTableColumnData(tableHeaderData)
    setTableContent(tableBodyData)
  }, [active])



  // const getData = () => {
  //   if (sortColumn && sortType) {
  //     return flow_cal_raw_data.sort((a, b) => {
  //       let x = a[sortColumn];
  //       let y = b[sortColumn];
  //       if (typeof x === 'string') {
  //         x = x.charCodeAt();
  //       }
  //       if (typeof y === 'string') {
  //         y = y.charCodeAt();
  //       }
  //       if (sortType === 'asc') {
  //         return x - y;
  //       } else {
  //         return y - x;
  //       }
  //     });
  //   }
  //   return flow_cal_raw_data;
  // };

  // const handleSortColumn = (sortColumn, sortType) => {
  //   setLoading(true);
  //   setTimeout(() => {
  //     setLoading(false);
  //     setSortColumn(sortColumn);
  //     setSortType(sortType);
  //   }, 500);
  // };
  return (


    <Table
      virtualized
      height={800}
      onRowClick={handleRowClick}
      bordered
      cellBordered
      // autoHeight
      affixHeader
      affixHorizontalScrollbar
      data={tableBodyData}
      loading={!tableBodyData ? true : false}

    >
      {tableHeaderData.map((column, index) => (
        <>
          <Table.Column key={column.Title} flexGrow={1} resizable>
            <Table.HeaderCell >{column.Title}  </Table.HeaderCell>
            <Table.Cell dataKey={column.data_key} />
            {/* <Cell>{column.name}</Cell> */}
          </Table.Column>


        </>
      ))}

      {/* <Table.Column width={100} fixed="right" style={{ display: 'none' }}>
        <Table.HeaderCell>Action</Table.HeaderCell>
        <Table.Cell style={{ display: 'none' }}>
          {(rowData) => (
            <Button onClick={() => chartingView(rowData)} appearance="primary">
              Action
            </Button>
          )}
        </Table.Cell>
      </Table.Column> */}
    </Table>
  )
}
