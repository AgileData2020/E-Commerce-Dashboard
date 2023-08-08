import React, { useEffect, useRef } from 'react';
import { createChart } from 'lightweight-charts';

const LightWeight = () => {


    const chartContainerRef = useRef(null);

    useEffect(() => {
        // Sample data sets (you can replace these with your actual data)
        const dataset1 = [
            { time: 1628198400000, value: 100 }, // Replace the timestamps and values with your data points
            { time: 1628284800000, value: 120 },
            { time: 1628371200000, value: 90 },
            // Add more data points as needed...
        ];

        const dataset2 = [
            { time: 1628198400000, value: 80 },
            { time: 1628284800000, value: 110 },
            { time: 1628371200000, value: 70 },
            // Add more data points as needed...
        ];

        let dataset =


            [
                {
                    time: "2023-07-27", value: 3.353

                },
                {
                    time: "2023-07-28", value: 3.276

                },
                {
                    time: "2023-07-29", value: 3.561

                },
                {
                    time: "2023-07-30",
                    value: 3.328

                },
                {
                    time: "2023-07-31",
                    value: 3.426

                },
                {
                    time: "2023-08-01",
                    value: 3.504

                },
                {
                    time: "2023-08-02",
                    value: 3.266

                },
                {
                    time: "2023-08-03",
                    value: 2.92

                },
                {
                    time: "2023-08-04",
                    value: 3.343

                },

            ]


        // Sort the dataset in ascending order based on time
        dataset = dataset.sort((a, b) => a.time - b.time);

        // Remove duplicate timestamps (optional)
        // dataset = dataset.filter((data, index) => index === 0 || data.time !== dataset[index - 1].time);
        // Create a new chart instance
        const chart = createChart(chartContainerRef.current, {
          
            height: 400,
        });

        // Add three line series to the chart
        // const lineSeries1 = chart.addLineSeries();
        // const lineSeries2 = chart.addLineSeries();
        const lineSeries3 = chart.addLineSeries();

        // Set colors for each line series
        // lineSeries1.applyOptions({
        //     color: 'blue',
        // });

        // lineSeries2.applyOptions({
        //     color: 'green',
        // });

        lineSeries3.applyOptions({
            color: 'red',
        });

        // Add the data to each series
        // lineSeries1.setData(dataset1);
        // lineSeries2.setData(dataset2);
        lineSeries3.setData(dataset);

        // Clean up the chart when the component unmounts
        return () => {
            chart.remove();
        };
    }, []);



    return <div ref={chartContainerRef}></div>;
}

export default LightWeight;
