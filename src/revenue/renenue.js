import React, { useState, useEffect } from 'react';
import ChartStraming from '../component/chartStraming';
import HelperClass from '../helper';
import { Stack, Button, Divider } from 'rsuite';
import { useSelector } from 'react-redux';

const Renenue = () => {

    const inventoryData = useSelector(state => state?.inventory?.inventoryData);

    const [aggregationType, setAggrigationType] = useState('d');




    useEffect(() => {

    }, [aggregationType])



    let revenueArray = [];
    let inventoryArray = [];
    let orderArray = [];
    let categories = [];

    // data is already in days therefore no need to convert in days

    if (aggregationType === 'd') {

        inventoryData.forEach(element => {
            revenueArray.push(element.revenue);
            inventoryArray.push(element.inventory);
            orderArray.push(element.orders);
            categories.push(element.date)
        });

    } else {
        let resultData = HelperClass.timeAggregation(inventoryData, aggregationType);
        for (var key in resultData) {

            revenueArray.push(resultData[key].revenue);
            inventoryArray.push(resultData[key].inventory)
            orderArray.push(resultData[key].orders)
            categories.push(key)
        }
    }

    //  object for pass as props to ChartStraming component

    let seriesOption = {
        revenueArray,
        inventoryArray,
        orderArray,
        categories
    }

    return (
        <>
            <Stack divider={<Divider vertical />}>
                <Button onClick={() => setAggrigationType('d')}>Daily</Button>
                <Button onClick={() => setAggrigationType('w')}>Weekly</Button>
                <Button onClick={() => setAggrigationType('m')}> Month</Button>
                <Button onClick={() => setAggrigationType('y')}>Year</Button>
            </Stack>
            <ChartStraming revenueFlag={true} seriesData={seriesOption} title={'Orders and Sales, Inventory Trends Over Time'} colors={['#77B6EA', '#f44336', '#ffb300']} />
        </>
    );
}

export default Renenue;
