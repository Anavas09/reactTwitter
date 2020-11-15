import { useContext } from "react";
import { AuthContext } from "../context/contexts";

/**
 * Return login functions and user data
 */
const useLogin = () => useContext(AuthContext);

export default useLogin;