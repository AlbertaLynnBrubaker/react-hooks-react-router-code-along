import React from "react"
import {Route, Switch} from 'react-router-dom'
import NavBar from "./NavBar";
import Home from "./Home"
import About from "./About"
import SignUp from "./SignUp"
import Login from "./Login"

function App() {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route exact path='/about'>
          <About />
        </Route>
        <Route exact path='/signup'>
          <SignUp />
        </Route>
        <Route exact path='/login'>
          <Login />
        </Route>
        <Route exact path='/'>
          <Home />
        </Route>
      </Switch>
    </div>
  )
}

export default App;