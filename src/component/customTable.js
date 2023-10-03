import { IconButton, Table } from 'rsuite';
import Button from 'rsuite/Button';
import FileDownloadIcon from '@rsuite/icons/FileDownload';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import DataGrid, { Column, Pager, Paging, Export, HeaderFilter, Scrolling, Sorting, LoadPanel, SearchPanel, Editing } from 'devextreme-react/data-grid';
import 'devextreme/dist/css/dx.common.css';
import 'devextreme/dist/css/dx.light.css';
import { FlexboxGrid } from 'rsuite';
import { Panel } from 'rsuite';
export default function CustomTable({ tableData }) {

  return (

    <>
      <FlexboxGrid justify="space-around" style={{ marginTop: '20px' }}>

        <FlexboxGrid.Item colspan={24} md={6}>
          <Panel header={'Recent Orders'} shaded>

            <DataGrid
              dataSource={tableData}
              showBorders={true}
              showColumnLines={true}
              showRowLines={true}
              height={500}
            >
              <Column dataField="OrderID" caption="Order ID" />
              <Column dataField="CustomerName" caption="Customer Name" />
              <Column dataField="OrderDate" caption="Order Date" dataType="date" />
              <Column dataField="ShipCity" caption="Ship City" />
              <Column dataField="Total" caption="Total" format="currency" />
              <Column dataField="OrderStatus" caption="Order Status" cellRender={(data) => {
                return <span className={data.data.OrderStatus.toLowerCase()}>{data.value}</span>;
              }} />
            </DataGrid>
          </Panel>
        </FlexboxGrid.Item>
      </FlexboxGrid>

    </>
  )
}
