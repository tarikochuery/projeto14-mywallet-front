import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { UserContext } from "../providers/UserProvider";

export const ProtectedRoute = () => {
  const { userInfo: { email } } = useContext(UserContext);
  if (!email) {
    return (
      <Navigate to='/' replace />
    );
  }
  return <Outlet />;
};