import React, { useState, useEffect } from 'react';
import ReactApexChart from 'react-apexcharts';
import { FlexboxGrid, Panel } from 'rsuite';
import HelperClass from '../helper';

const Organic = () => {


    let organic = [];
    let inOrganic = [];
    let categoriesData = []

    HelperClass.generateTimeSeriesData().forEach((item) => {

        organic.push(item.organic)
        inOrganic.push(item.inorganic)
        categoriesData.push(item.date)
    })


    const options = {
        chart: {
            height: 350,
            type: 'line',

            toolbar: {
                show: false
            }
        },
        colors: ['#77B6EA', '#f44336'],
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
            // text: title,
            align: 'left'
        },


        xaxis: {
            categories: categoriesData,
            title: {
                text: 'Time'
            }
        },
        yaxis: {
            title: {
                text: "Organic and In-organic traffic"
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



    series = [
        {
            name: "Organic",
            data: organic
        },
        {
            name: "In-organic",
            data: inOrganic
        }
    ]



    return (
        <FlexboxGrid justify="space-around" style={{ marginTop: '20px' }}>

            <FlexboxGrid.Item colspan={24} md={6}>
                <Panel shaded>

                    <ReactApexChart options={options} series={series} type="line" height={350} />


                </Panel>
            </FlexboxGrid.Item>






        </FlexboxGrid>

    );
};

export default Organic;
