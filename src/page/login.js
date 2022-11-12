import React, { useEffect, useState } from 'react';
import axios from "axios"
import { TOKENCYBER } from '../ulti/setting';
import { useDispatch, useSelector } from 'react-redux';
import { GetUserList } from '../redux/reducer/GetUserListReducer';
import { dangNhapAction } from '../redux/action/loginAction';
import { Link, NavLink } from 'react-router-dom';

function LoginForm({Login, err}) {
  const adminUser = {
    "taiKhoan": "",
    "matKhau": ""
  }
  const [details, setDetails] = useState({taiKhoan:"",matKhau:""});

  const dispatch = useDispatch();
  const submithandler = e =>{
    e.preventDefault();

    dispatch(dangNhapAction(details))
  }

  return (
    <form onSubmit={submithandler}>
      <div className="form-inner"> 
      <h2>Login</h2>
      {(err !== "")?(<div className='err'>{err}</div>):""}
          <div className="form-group">
            <label htmlFor= "name">Tên:</label>
            <input type="text" name="name" id="name"  />
          </div>
          <div className="form-group">
            <label htmlFor="taiKhoan">Tài Khoản: </label>
            <input type="text" name="taiKhoan" id="taiKhoan" onChange={e => setDetails({...details, "taiKhoan": e.target.value}) }value={details.taiKhoan}/>
          </div>
          <div className="form-group">
            <label htmlFor="matKhau">Mật Khẩu:</label>
            <input type="password" name="matKhau" id="matKhau" onChange={e => setDetails({...details, "matKhau": e.target.value}) }value={details.matKhau}/>
          </div>
          <input type="submit" value="Login" onClick={Login}/>
      <span className='createuser'>Dont have Acount? <NavLink to='/themnguoidung'>Create Account</NavLink></span>
      </div>
    </form>
  )
}

export default LoginForm; 