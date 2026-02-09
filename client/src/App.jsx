import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import AppLayout from "./layouts/app-layout";
import Home from "./pages/home";

const isAuth = () => !!localStorage.getItem("token");

const PrivateRoute = ({ children }) => {
  return isAuth() ? children : <Navigate to="/login" />;
};

const PublicRoute = ({ children }) => {
  return !isAuth() ? children : <Navigate to="/" />;
};

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<Home />} />

          {/* <Route
            path="/login"
            element={
              <PublicRoute>
                <Login />
              </PublicRoute>
            }
          />
          <Route
            path="/register"
            element={
              <PublicRoute>
                <Register />
              </PublicRoute>
            }
          />

          <Route
            path="/"
            element={
              <PrivateRoute>
                <Feed />
              </PrivateRoute>
            }
          />
          <Route
            path="/profile/:id"
            element={
              <PrivateRoute>
                <Profile />
              </PrivateRoute>
            }
          />
          <Route
            path="/post/:id"
            element={
              <PrivateRoute>
                <Thread />
              </PrivateRoute>
            }
          /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
