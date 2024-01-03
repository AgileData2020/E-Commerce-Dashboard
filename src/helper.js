// staticClass.js
import { Schema } from "rsuite";
import { salesTypesData, bestSallingProducts } from "./testData";
import { faker } from '@faker-js/faker';
const HelperClass = {
    // Define your static functions as properties
    loginSchema: () => {
        return Schema.Model({
            username: Schema.Types.StringType().isRequired('This field is required.'),
            password: Schema.Types.StringType().minLength(6, "Can't be less than 6 characters")
                .maxLength(30, 'Cannot be greater than 30 characters')
                .isRequired('This field required')
        });
    },
    salesTypes: () => {
        let offLineSale = [];
        let onLineSale = [];
        let salesTime = [];
        salesTypesData.forEach((item) => {
            offLineSale.push(item.OnlineSales);
            onLineSale.push(item.OfflineSales)
            salesTime.push(item.Month)
        })

        return {
            offLineSale,
            onLineSale,
            salesTime
        }
    },

    bestSalesProducts: () => {
        let products = [];
        let sales = [];

        bestSallingProducts.forEach((item) => {
            products.push(item.Product);
            sales.push(item.Sales)

        })

        return {
            products,
            sales
        }
    },

    generateFakeOrders: (count) => {
        const orders = [];
        const orderStatuses = ['Pending', 'Processing', 'Shipped', 'Delivered', 'Cancelled'];

        for (let i = 1; i <= count; i++) {
            const order = {
                OrderID: i,
                CustomerName: `Customer ${i}`,
                OrderDate: new Date(2023, Math.floor(Math.random() * 12), Math.floor(Math.random() * 28)),
                ShipCity: `City ${Math.floor(Math.random() * 10)}`,
                Total: Math.floor(Math.random() * 1000) + 100,
                OrderStatus: orderStatuses[Math.floor(Math.random() * orderStatuses.length)], // Random order status
            };
            orders.push(order);
        }
        return orders;
    },

    timeAggregation: (data, type) => {



        if (type === 'y') {

            const aggregatedDataYearly = data.reduce((result, item) => {
                const timestamp = new Date(item.date);
                const yearKey = timestamp.getFullYear().toString();

                if (!result[yearKey]) {
                    result[yearKey] = {
                        revenue: 0,
                        inventory: 0,
                        orders: 0,
                    };
                }

                result[yearKey].revenue += item.revenue;
                result[yearKey].inventory += item.inventory;
                result[yearKey].orders += item.orders;

                return result;
            }, {});

            return aggregatedDataYearly;
        } else if (type === 'w') {

            const aggregatedDataWeekly = data.reduce((result, item) => {
                const timestamp = new Date(item.date);
                const weekOfYear = getWeekOfYear(timestamp);

                console.log(weekOfYear, 'weekOfYear')
                if (!result[weekOfYear]) {
                    result[weekOfYear] = {
                        revenue: 0,
                        inventory: 0,
                        orders: 0,
                    };
                }

                result[weekOfYear].revenue += item.revenue;
                result[weekOfYear].inventory += item.inventory;
                result[weekOfYear].orders += item.orders;

                return result;
            }, {});

            // Helper function to calculate the week of the year
            function getWeekOfYear(date) {
                const startOfYear = new Date(date.getFullYear(), 0, 1);
                const days = Math.floor((date - startOfYear) / (24 * 60 * 60 * 1000));
                return Math.ceil((days + startOfYear.getDay() + 1) / 7);
            }
            return aggregatedDataWeekly
        } else if (type === 'm') {
            const aggregatedDataMonthly = data.reduce((result, item) => {
                const timestamp = new Date(item.date);
                const yearMonthKey = `${timestamp.getFullYear()}-${(timestamp.getMonth() + 1)
                    .toString()
                    .padStart(2, '0')}`;

                if (!result[yearMonthKey]) {
                    result[yearMonthKey] = {
                        revenue: 0,
                        inventory: 0,
                        orders: 0,
                    };
                }

                result[yearMonthKey].revenue += item.revenue;
                result[yearMonthKey].inventory += item.inventory;
                result[yearMonthKey].orders += item.orders;

                return result;
            }, {});



            return aggregatedDataMonthly;
        }


    },
    //  generate fake time series data 

    generateTimeSeriesData: () => {


        return [
            { id: 1, date: "2023-10-01 08:00:00", name: 'Fridge', description: 'test 1', organic: 5080, category: 'Electronics', inorganic: 6000, inventory: 7000, orders: 800 },
            { id: 2, date: "2024-10-02 08:00:00", name: 'Oven', description: 'test 1', organic: 4500, category: 'Electronics', inorganic: 2500, inventory: 800, orders: 1900 },
            { id: 3, date: "2023-10-03 12:00:00", name: 'Light', description: 'test 1', organic: 8500, category: 'Electronics', inorganic: 120, inventory: 7500, orders: 7200 },
            { id: 4, date: "2024-10-04 18:00:00", name: 'Radio', description: 'test 1', organic: 8700, category: 'Electronics', inorganic: 750, inventory: 6000, orders: 210 },
            { id: 5, date: "2021-10-01 08:00:00", name: 'Tie', description: 'test 1', organic: 700, category: 'Clothing', inorganic: 3500, inventory: 4000, orders: 600 },
            { id: 6, date: "2022-10-02 08:00:00", name: 'Jeans', description: 'test 1', organic: 800, category: 'Clothing', inorganic: 1800, inventory: 1200, orders: 1400 },
            { id: 7, date: "2022-10-03 12:00:00", name: 'Shirt', description: 'test 1', organic: 300, category: 'Clothing', inorganic: 200, inventory: 3500, orders: 4000 },
            { id: 8, date: "2021-10-04 18:00:00", name: 'Jacket', description: 'test 1', organic: 1400, category: 'Clothing', inorganic: 600, inventory: 3000, orders: 800 },
            { id: 9, date: "2024-10-01 08:00:00", name: 'Lamp light', description: 'test 1', organic: 1500, category: 'Home Decor', inorganic: 4500, inventory: 6000, orders: 750 },
            { id: 10, date: "2025-10-02 08:00:00", name: 'Sheet', description: 'test 1', organic: 100, category: 'Home Decor', inorganic: 2100, inventory: 900, orders: 1900 },
            { id: 11, date: "2022-10-03 12:00:00", name: 'light', description: 'test 1', organic: 700, category: 'Home Decor', inorganic: 150, inventory: 5800, orders: 720 },
            { id: 12, date: "2023-10-04 18:00:00", name: 'Table', description: 'test 1', organic: 5100, category: 'Home Decor', inorganic: 800, inventory: 6500, orders: 320 },

        ]
    }







};

// Export the object
export default HelperClass;
