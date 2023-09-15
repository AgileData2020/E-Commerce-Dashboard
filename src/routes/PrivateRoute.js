// PrivateRoute.js
import React from 'react';
import { Navigate, Route } from 'react-router-dom';

import Layout from '../component/layout/layout';
const PrivateRoute = ({ Component, roles }) => {

    let token = localStorage.getItem('token');
    if (!token) {
        return <Navigate to="/" />;
    }
    if (roles.includes('admin')) {
        return <Layout><Component /></Layout>;
    } else {
        return <Navigate to="/unauthorized" />;
    }


};

export default PrivateRoute;
