import React,{useEffect} from 'react';
import {BrowserRouter as Router, Route, Switch, Redirect} from "react-router-dom"
import './App.css';
import Header from './Header'
import Home from "./Home"
import Checkout from "./Checkout"
import Login from "./Login"
import {auth} from './firebase'
import {useStateValue} from './StateProvider'


function App() {
  const [{ user },dispatch] = useStateValue()
  // 
  useEffect(()=>{
  const unsubcribe = auth.onAuthStateChanged((authUser) => {
      if (authUser){
        // 
        dispatch({
          type:'SET_USER',
          user: authUser

        })
      }
      else{
        dispatch({
          type:'SET_USER',
          user: null
        })
      }
    })
    return() =>{
      unsubcribe()
    }
  },[]);

  // console.log('User is' ,user)
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/login">
            <Login/>
          </Route>
          <Route path="/checkout">
            <Header/>
            <Checkout/>
            {/* {!user && <Redirect to='/login'/>} */}
          </Route>
          <Route path="/">
            <Header/>
            <Home/>
          </Route>
        </Switch>
        
      </div>
    </Router>
  );
}

export default App;
