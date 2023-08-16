import React from 'react';
import { Circles } from 'react-loader-spinner';
import LoadingOverlay from "react-loading-overlay";
const Loader = () => {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '85vh' }}>
            <div>
                <LoadingOverlay
                    text={"Loading..."}
                    active={true}
                    spinner={<Circles color="#1b32d5" />}
                />
            </div>
        </div>
    );
}

export default Loader;
