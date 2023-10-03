import React, { useState, useEffect } from 'react';
import { Panel } from 'rsuite';
import ReactApexChart from 'react-apexcharts';
import { useSelector } from 'react-redux';
import { SelectPicker } from 'rsuite';
const Salestatuschart = () => {

    let revenueArray = [];
    let categories = [];

    const [category, setCategory] = useState(null);
    const inventoryData = useSelector(state => state?.inventory?.inventoryData);

    const filterDatabyCate = inventoryData.filter((item) => {
        if (category) {
            return item.category === category
        } else {
            return item
        }
    })
    filterDatabyCate.forEach(element => {
        revenueArray.push(element.revenue);
        categories.push(element.category)
    });
    const options = {
        chart: {
            type: 'bar',
        },

        xaxis: {
            categories: categories,
        },
        title: {
            text: 'Revenue data filterable by product categories',
            align: 'left'
        },
        colors: ['#2d64aa'],
        dataLabels: {
            style: {
                fontSize: '11px',
                fontWeight: 'bold'
            },
            enabled: true,
            dropShadow: {
                enabled: true,
                left: 2,
                top: 2,
                opacity: 0.5
            }
        },
        yaxis: [
            {
                axisTicks: {
                    show: true,
                },
                axisBorder: {
                    show: true,
                    color: 'black'
                },
                labels: {
                    style: {
                        colors: 'black',
                    }
                },
                title: {
                    text: 'Revenue',
                    style: {
                        color: 'black',
                        fontWeight: 'bold',
                        fontSize: '15px'
                    }
                },
                tooltip: {
                    enabled: true
                }
            },


        ],



    };

    const series = [{
        data: revenueArray
    }];


    const selectOption = categories?.map(
        item => ({ label: item, value: item })
    );

    useEffect(() => {

    }, [category])

    return (


        <Panel shaded>
            <SelectPicker onChange={(e) => setCategory(e)} data={selectOption} style={{ width: 224 }} />
            <ReactApexChart options={options} series={series} type="bar" height={315} />
        </Panel>







    );
}

export default Salestatuschart;
