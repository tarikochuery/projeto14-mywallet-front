import { useContext } from "react";
import { UserContext } from "../providers/UserProvider";

export const ProtectedRoute = () => {
  const { userInfo: { email } } = useContext(UserContext);
  return (
    <div>ProtectedRoute</div>
  );
};