import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import AppLayout from "./layouts/app-layout";
import Home from "./pages/home";
import Login from "./pages/login";
import Register from "./pages/register";
import CreatePost from "./pages/create-post";

const isAuth = () => !!localStorage.getItem("token");

const PrivateRoute = ({ children }) =>
  isAuth() ? children : <Navigate to="/login" replace />;

const PublicRoute = ({ children }) =>
  !isAuth() ? children : <Navigate to="/" replace />;

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* PUBLIC AUTH PAGES */}
        <Route
          path="/login"
          element={<PublicRoute>{/* <Login /> */}</PublicRoute>}
        />
        <Route
          path="/register"
          element={<PublicRoute>{/* <Register /> */}</PublicRoute>}
        />

        {/* ALL NORMAL PAGES */}
        <Route element={<AppLayout />}>
          <Route path="/" element={<Home />} />

          {/* ONLY PRIVATE PAGE */}
          <Route
            path="/create"
            element={<PrivateRoute>{/* <CreatePost /> */}</PrivateRoute>}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
