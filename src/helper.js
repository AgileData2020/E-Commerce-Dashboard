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
        return data[type];
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
