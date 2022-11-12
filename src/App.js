import React, { useState } from "react";
import { useDispatch } from "react-redux";
import GetUserList from "./page/getUserList";
import LoginForm from "./page/login"
import { BrowserRouter, Route, Router, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";
import createUser from "./page/createUser";


export const history = createBrowserHistory();

export default function App() {
  return (

    <div className='App'>
      <BrowserRouter history={history}>
        <Switch>
          <Route path='/laydanhsachnguoidung' exact component={GetUserList} />
          <Route path='/' exact component={LoginForm} />
          <Route path='/login' exact component= {LoginForm}/>
          <Route path='/themnguoidung' exact component = {createUser}/>
        </Switch>
      </BrowserRouter>
    </div>
  )
}



