import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { UserContext } from "../providers/UserProvider";

export const ProtectedRoute = () => {
  const { userInfo: { token } } = useContext(UserContext);
  if (!token) {
    return (
      <Navigate to='/' replace />
    );
  }
  return <Outlet />;
};