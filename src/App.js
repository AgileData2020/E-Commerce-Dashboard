import logo from './logo.svg';
import { lazy, Suspense } from 'react';
import { Routes, Route, useNavigate, Navigate } from "react-router-dom";
import { routesPath } from './Routes';

// import { Circles } from 'react-loader-spinner'; later we remove after testing
// import LoadingOverlay from "react-loading-overlay"; later we remove after testing
import Loader from '../src/component/Loader/loader'
const Login = lazy(() => import('./auth/login'));
const Dashboard = lazy(() => import('./Dashboard/index'));
const Upload = lazy(() => import("./component/upload/index"));
const Layout = lazy(() => import("./component/layout/index"));




function App() {

  // Later we remove after testing
  // const Loader = () => {

  //   return (
  //     <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '85vh' }}>
  //       <div>
  //         <LoadingOverlay
  //           text={"Loading..."}
  //           active={true}
  //           spinner={<Circles color="#1b32d5" />}
  //         />
  //       </div>
  //     </div>
  //   )
  // }
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
