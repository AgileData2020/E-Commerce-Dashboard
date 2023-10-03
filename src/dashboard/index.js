
import React from 'react'
import './style.css';

import CustomTable from '../component/customTable'

import HelperClass from '../helper';


import ChartStraming from '../component/chartStraming';
const Dashboard = () => {

    const tableData = HelperClass.generateFakeOrders(500);

    let seriesOption = {
        'offLineSeries': HelperClass?.salesTypes()?.offLineSale,
        'onlineSeries': HelperClass?.salesTypes()?.onLineSale,
        'categories': HelperClass?.salesTypes()?.salesTime
    }
    return (

        <>

            <ChartStraming seriesData={seriesOption} title={'Offline & Online Sales'} colors={['#77B6EA', '#f44336']} />
            <CustomTable tableData={tableData} />

        </>

    )
}

export default React.memo(Dashboard)