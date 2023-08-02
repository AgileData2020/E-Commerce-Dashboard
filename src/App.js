
import { lazy, Suspense } from 'react';
import { Routes, Route, Navigate } from "react-router-dom";
import { routesPath } from './Routes';
import { useSelector, UseSelector } from 'react-redux/es/hooks/useSelector';
import Loader from '../src/component/Loader/loader'
const Login = lazy(() => import('./auth/login'));
const Dashboard = lazy(() => import('./Dashboard/index'));
const Upload = lazy(() => import("./upload/index"));
const Layout = lazy(() => import("./component/layout/index"));




function App() {


  const isLoading = useSelector(state => state)

  console.log(isLoading)
  let login = true;
  const ProtectedRoutes = ({ children, path }) => {
    if (login) {
      return (
        <Layout>
          {children}
        </Layout>

      )
    } else {
      // console.log(path, 'path')
      return < Navigate to="/" replace={true} />

    }

  }


  return (

    // <Loader />

    <Suspense fallback={
      <Loader />
    }>
      <Routes>


        <Route path={routesPath.Login} element={<Login />}></Route>


        <Route path={routesPath.UploadData} element={<Upload />}></Route>


        <Route path={routesPath.Dashboard}
          element={
            <ProtectedRoutes path="/">

              <Dashboard />

            </ProtectedRoutes>

          }>

        </Route>
      </Routes>

    </Suspense>
  );
}

export default App;
