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
            return data.compressor_stations
        } else if (type === 'Outlets') {
            return data.outlets
        } else {
            return data.inlets
        }
    },


};

// Export the object
export default HelperClass;
