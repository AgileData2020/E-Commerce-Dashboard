
import React from 'react'
import './style.css';
import CustomTable from '../component/customTable'
import ChartStraming from '../component/chartStraming'

import HelperClass from '../helper';

const Dashboard = () => {

    const offLineSeries = HelperClass.salesTypes().offLineSale;
    const onLineSeries = HelperClass.salesTypes().onLineSale;
    const categories = HelperClass.salesTypes().salesTime;
    let seriesData = {
        offLineSeries,
        onLineSeries,
        categories
    }

    const tableData = HelperClass.generateFakeOrders(500);
    return (

        <>

            <ChartStraming seriesData={seriesData} title={'Sales'} colors={['#77B6EA', '#f44336']} />
            <CustomTable tableData={tableData} />

        </>


    )
}

export default React.memo(Dashboard)