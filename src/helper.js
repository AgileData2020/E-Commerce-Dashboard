// staticClass.js
import { Schema } from "rsuite";
import { salesTypesData, bestSallingProducts } from "./testData";
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


    }




};

// Export the object
export default HelperClass;
