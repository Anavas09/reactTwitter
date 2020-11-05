import React, {useState} from 'react'
import SignInSignUp from './page/SignInSignUp'

function App() {
  const [user, setUser] = useState({name: "Angel"})

  return (
    <div>
      {user ? (<div><SignInSignUp /></div>) : <h1>Not Logged</h1>}
    </div>
  )
}

export default App;
