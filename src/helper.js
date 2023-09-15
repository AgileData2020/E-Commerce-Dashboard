// staticClass.js
import { Schema } from "rsuite";
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


    sheetDataMaker: (type, data) => {


        if (type === 'Model CS') {
            return data.model_cs;
        } else if (type === "Model Output") {
            return data.model_output;
        } else if (type === "Rollup") {
            return data.rollup;
        } else if (type === 'Liquids') {
            return data.liquids;
        } else if (type === 'Plant') {
            return data.plant;
        } else if (type === "High Pressure") {
            return data.high_pressure;
        } else if (type === "Compressor Stations") {
            return data.compressor_stations;
        } else if (type === 'Outlets') {
            return data.outlets;
        } else if (type === 'Inlets') {

            console.log(data.inlets, 'data.inlets')
            return data.inlets;
        } else if (type === 'Validation') {
            return data.validation;
        }
        else if (type === 'Input') {

            return data.input;
        }
        else if (type === 'Output') {

            return data['output'];
        }
        else if (type === 'Volumes') {

            return data['volume'];
        }
    },

    getTableColumns: (tableHeaderData) => {



        let tableColumnHeaders = [];

        tableHeaderData?.forEach(element => {
            tableColumnHeaders.push(element.data_key)
        });

        return tableColumnHeaders;
    },

    tableHeightDecider: (dataLength) => {


        if (dataLength?.length >= 100) {

            return 600;
        } else if (dataLength?.length <= 4) {
            return 200;
        } else if (dataLength?.length == 1) {

            return 100
        } else {

            return 600;
        }

    },
};

// Export the object
export default HelperClass;
