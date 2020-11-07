import React, { useState } from 'react'
import { ToastContainer } from 'react-toastify';
import SignInSignUp from './page/SignInSignUp'

function App() {
  const [user, setUser] = useState({name: "Angel"})

  return (
    <div>
      {user ? (<div><SignInSignUp /></div>) : <h1>Not Logged</h1>}
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
    </div>
  )
}

export default App;
