import { RouteProps, Navigate, useLocation } from "react-router-dom";

export const PrivateRoute = ({ children }: RouteProps) => {
  const isLoggedIn = localStorage.getItem("accessToken");
  const location = useLocation().pathname;
  return isLoggedIn ? (
    <>{children}</>
  ) : (
    <Navigate to={"/login"} state={{ from: location }} replace />
  );
};
