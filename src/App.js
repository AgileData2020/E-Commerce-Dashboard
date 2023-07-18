import logo from './logo.svg';
import { lazy, Suspense } from 'react';
import { Routes, Route, useNavigate, Navigate } from "react-router-dom";
const Login = lazy(() => import('./auth/login'));
const Dashboard = lazy(() => import('./Dashboard/index'));
const Upload = lazy(() => import("./component/upload/index"));

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



    <Suspense fallback={<p>Loading.....</p>}>
      <Routes>
        {/* <Route path='/portfolio' element={<ProtectedRoutes><Protfolio /></ProtectedRoutes>}></Route>
        <Route path="/" element={<ProtectedRoutes path="/"><Home /></ProtectedRoutes>}></Route> */}

        <Route path="/" element={<Login />}></Route>
        <Route path="/upload" element={<Upload />}></Route>
        <Route path="/dashboard"
          element={
            <ProtectedRoutes path="/">

              <Dashboard />

            </ProtectedRoutes>
            // <Dashboard />
          }>

        </Route>
      </Routes>

    </Suspense>
  );
}

export default App;
