import React, { useState, useEffect } from 'react';
import ReactApexChart from 'react-apexcharts';
import { FlexboxGrid, Panel } from 'rsuite';
import HelperClass from '../helper';
import Salestatuschart from './salestatuschart';
const ChartStraming = ({ seriesData, title, colors, revenueFlag, }) => {


    const options = {
        chart: {
            height: 350,
            type: 'line',

            toolbar: {
                show: false
            }
        },
        colors: colors,
        stroke: {
            show: true,
            // curve: 'smooth',
            // colors: undefined,
            width: 3,
            dashArray: 0,
        },
        markers: {
            shape: "circle",
            size: 5
        },
        title: {
            text: title,
            align: 'left'
        },


        xaxis: {
            categories: seriesData?.categories,
            title: {
                text: 'Time'
            }
        },
        yaxis: {
            title: {
                text: !revenueFlag ? 'Sales' : "Order , Revenue , Inventory"
            },
            axisTicks: {
                show: true,
            },
            axisBorder: {
                show: true,
                color: 'black'
            },

        },

    };
    let series = [];

    revenueFlag ?
        series = [
            {
                name: "Orders",
                data: seriesData?.orderArray
            },
            {
                name: "Inventory",
                data: seriesData?.inventoryArray
            },
            {
                name: "Revenue",
                data: seriesData?.revenueArray
            }
        ]
        :
        series = [
            {
                name: "Offline Sales",
                data: seriesData?.offLineSeries
            },
            {
                name: "Online Sales",
                data: seriesData?.onlineSeries
            }
        ]



    const pieSeries = HelperClass?.bestSalesProducts().sales;
    const pieOption = {
        chart: {
            type: 'donut',
        },
        labels: HelperClass?.bestSalesProducts()?.products,
        title: {
            text: 'Best Selling Products',
            align: 'left'
        },
        dataLabels: {
            enabled: true, // Ensure that labels are enabled
        },


        responsive: [{
            breakpoint: 480,
            options: {
                chart: {
                    width: 200
                },

                legend: {
                    position: 'top'
                }
            }
        }]
    };
    return (
        <FlexboxGrid justify="space-around" style={{ marginTop: '20px' }}>

            <FlexboxGrid.Item colspan={16} md={6}>
                <Panel shaded>

                    <ReactApexChart options={options} series={series} type="line" height={350} />


                </Panel>
            </FlexboxGrid.Item>


            <FlexboxGrid.Item colspan={8} md={6}>
                {
                    !revenueFlag ?
                        <Panel shaded>
                            <ReactApexChart options={pieOption} series={pieSeries} type="donut" height={360} />
                        </Panel> :
                        <Salestatuschart />
                }
            </FlexboxGrid.Item>



        </FlexboxGrid>

    );
};

export default ChartStraming;
