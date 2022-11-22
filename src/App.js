import React from "react";
import GetUserList from "./page/getUserList";
import LoginForm from "./page/login"
import { Router, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";
import createUser from "./page/createUser";


export const history = createBrowserHistory();

export default function App() {
  return (

    <div className='App'>
      <Router history={history}>
        <Switch>
          <Route path='/laydanhsachnguoidung' exact component={GetUserList} />
          <Route path='/' exact component={LoginForm} />
          <Route path='/login' exact component= {LoginForm}/>
          <Route path='/themnguoidung' exact component = {createUser}/>
        </Switch>
      </Router>
    </div>
  )
}