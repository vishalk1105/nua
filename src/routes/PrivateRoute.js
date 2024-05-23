import { Outlet, Navigate } from "react-router-dom";

const PrivateRoute = () => {
  const auth = localStorage.getItem("token");
  console.log(auth, "auth");
  if (auth === undefined) {
    <Navigate to="/login" />;
  }
  return auth ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;
