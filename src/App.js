import React, { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import { isUserLogged } from "./api/auth";

import Routing from "./routes/Routing";

import { AuthContext } from "./context/contexts";

import SignInSignUp from "./page/SignInSignUp";

function App() {
  const [user, setUser] = useState(null);
  const [loadUser, setLoadUser] = useState(false);
  const [refreshCheckLogin, setRefreshCheckLogin] = useState(false);

  useEffect(() => {
    setUser(isUserLogged());
    setRefreshCheckLogin(false);
    setLoadUser(true);
  }, [refreshCheckLogin]);

  return (
    <AuthContext.Provider value={{ setRefreshCheckLogin, user }}>
      {user ? (
        <Routing />
      ) : (
        <SignInSignUp />
      )}
      <ToastContainer
        position="top-right"
        autoClose={5000}
        newestOnTop={false}
        hideProgressBar
        closeOnClick
        rtl={false}
        pauseOnVisibilityChange
        draggable
        pauseOnHover
      />
    </AuthContext.Provider>
  );
}

export default App;
