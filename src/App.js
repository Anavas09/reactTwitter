import React, { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import { isUserLogged } from "./api/auth";
import { AuthContext } from "./context/contexts";
import SignInSignUp from "./page/SignInSignUp";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    console.log(isUserLogged());
    setUser(isUserLogged())
  }, [])

  return (
    <AuthContext.Provider value={user}>
      {user ? <h1>Logged</h1> : <SignInSignUp />}
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
