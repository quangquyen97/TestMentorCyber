import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { dangNhapAction } from '../redux/action/loginAction';
import { NavLink } from 'react-router-dom';

function LoginForm({ Login, err }) {
  const [details, setDetails] = useState({ taiKhoan: "", matKhau: "" });
  const [errors, setErr] = useState({

  })
  const dispatch = useDispatch();
  const validateLogin = (value) => {
    const err = {}

    if (!value.taiKhoan) {
      err.taiKhoan = 'Tài khoản không được để trống'
    }
    if (!value.matKhau) {
      err.matKhau = 'Mật khẩu không được để trống'
    }
    return err
  }
  const handleSubmit = e => {
    e.preventDefault();

    setErr(validateLogin(details))
    if (Object.keys(validateLogin(details)).length === 0) {

      dispatch(dangNhapAction(details))
    }
  }


  return (
    <form onSubmit={handleSubmit}>
      <div className="form-inner">
        <h2>Login</h2>
        {(err !== "") ? (<div className='err'>{err}</div>) : ""}

        <div className="form-group">
          <label htmlFor="taiKhoan">Tài Khoản: </label>
          <input type="text" name="taiKhoan" id="taiKhoan" onChange={e => setDetails({ ...details, "taiKhoan": e.target.value })} value={details.taiKhoan} />
          <span className='alertMess' style={{ fontSize: '10px', color: 'red' }}>{errors.taiKhoan}</span>
        </div>
        <div className="form-group">
          <label htmlFor="matKhau">Mật Khẩu:</label>
          <input type="password" name="matKhau" id="matKhau" onChange={e => setDetails({ ...details, "matKhau": e.target.value })} value={details.matKhau} />
          <span style={{ fontSize: '10px', color: 'red' }} >{errors.matKhau}</span>
        </div>
        <input type="submit" value="Login" onClick={Login} />
        <span className='createuser'>Dont have Acount? <NavLink to='/themnguoidung'>Create Account</NavLink></span>
        <span className='createuser'>{err}</span>
      </div>
    </form>
  )
}

export default LoginForm; 