import logo from './logo.svg';
import { lazy, Suspense } from 'react';
import { Routes, Route, useNavigate, Navigate } from "react-router-dom";
import { routesPath } from './Routes';
const Login = lazy(() => import('./auth/login'));
const Dashboard = lazy(() => import('./Dashboard/index'));
const Upload = lazy(() => import("./component/upload/index"));
const Loader = lazy(() => import("./component/Loader/loader"));
const Layout = lazy(() => import("./component/layout/index"));


function App() {

  let login = true;
  const ProtectedRoutes = ({ children, path }) => {


    console.log(path, 'children')

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

  const PublicRoutes = ({ children }) => {




    if (login) {

      return < Navigate to="/" replace={true} />

    } else {
      return children;


    }

  }
  return (



    <Suspense fallback={<Loader />}>
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
