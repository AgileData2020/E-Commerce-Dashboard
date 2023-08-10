
import 'devextreme/dist/css/dx.light.css';
import { lazy, Suspense, useState, useEffect } from 'react';
import { Routes, Route, Navigate } from "react-router-dom";
import { routesPath } from './Routes';
import { useSelector, UseSelector } from 'react-redux/es/hooks/useSelector';
import Loader from '../src/component/Loader/loader'
const Login = lazy(() => import('./auth/login'));
const Dashboard = lazy(() => import('./Dashboard/index'));
const Upload = lazy(() => import("./upload/index"));

const AdminLayout = lazy(() => import("./component/layout/layout"))


function App() {

  const [currentPatth, setCurrentPath] = useState('/')

  const isLoading = useSelector(state => state)

  useEffect(() => {

  }, [currentPatth]);




  const ProtectedRoutes = ({ children, path }) => {

    setCurrentPath(path);
    let login = true;

    // isLoading.login.token
    if (login) {


      return (
        <AdminLayout>
          {children}
        </AdminLayout>

      )
    } else {

      return < Navigate to="/" replace={true} />

    }

  }


  return (

    isLoading.commonData?.isLoading ?
      <Loader />
      :
      <Suspense fallback={
        <Loader />
      }>
        <Routes>


          <Route path={routesPath.Login} element={<Login />}></Route>


          <Route path={routesPath.UploadData} element={
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
