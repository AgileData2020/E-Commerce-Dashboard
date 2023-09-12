

import './App.css';
import axiosInstance from './api/axiosInstance';
import { lazy, Suspense, useState, useEffect } from 'react';
import { Routes, Route, Navigate } from "react-router-dom";
import { useToaster, Message } from 'rsuite';
import { routesPath } from './Routes';

import { useNavigate } from 'react-router-dom';
import { useSelector, UseSelector } from 'react-redux/es/hooks/useSelector';
import Loader from '../src/component/Loader/loader'
const Login = lazy(() => import('./auth/login'));
const Dashboard = lazy(() => import('./Dashboard/index'));
const Upload = lazy(() => import("./upload/index"));

const AdminLayout = lazy(() => import("./component/layout/layout"));


function App() {

  const navigate = useNavigate();
  const toaster = useToaster();
  const [currentPatth, setCurrentPath] = useState('/')

  const isLoading = useSelector(state => state)

  useEffect(() => {

  }, [currentPatth]);




  const ProtectedRoutes = ({ children, path }) => {

    setCurrentPath(path);
    let login = true;

    if (isLoading.login.token) {

      return (
        <AdminLayout>
          {children}
        </AdminLayout>

      )
    }
    else {

      return < Navigate to="/" replace={true} />

    }

  }

  //  axios intercepter for handeling api reauest
  axiosInstance.interceptors.response.use(
    (response) => {

      // Return the response if it's successful
      return response;
    },
    (error) => {
      // Handle errors here
      if (error.response) {
        // The request was made, and the server responded with a status code
        if (error.response.status === 500) {
          toaster.push(<Message type="error">{error.response.data.detail}</Message>);
        }

        console.error('Status Code:', error.response.status);
        // console.error('Response Data:', error.response.data.detail);
      } else if (error.request) {
        // The request was made, but no response was received
        console.error('Request made but no response received:', error.request);
      } else {
        // Something happened in setting up the request that triggered an error
        console.error('Error setting up the request:', error.message);
      }

      // Return a rejected Promise to propagate the error further
      return Promise.reject(error);
    }
  );


  return (

    isLoading.commonData?.isLoading ?
      <Loader />
      :
      <Suspense fallback={
        <Loader />
      }>
        <Routes>


          <Route path={routesPath.Login} element={<Login />}></Route>


          <Route path={routesPath.UploadData + '/:file?'} element={
            <ProtectedRoutes path="/upload">

              <Upload />

            </ProtectedRoutes>

          }></Route>


          <Route path={routesPath.Dashboard}
            element={
              <ProtectedRoutes path="/Dashboard">

                <Dashboard />

              </ProtectedRoutes>

            }>

          </Route>
        </Routes>

      </Suspense>
  );
}

export default App;
