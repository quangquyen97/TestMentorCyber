import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { dangKyAction } from '../redux/action/loginAction';

function createUser() {
  const [details, setDetails] = useState({
    taiKhoan: "",
  matKhau: "",
  email: "",
  soDt: "",
  maNhom: "",
  hoTen: ""});

    const dispatch = useDispatch()
  const submithandler = e =>{
    e.preventDefault();
    dispatch(dangKyAction(details))
  }

  return (
    <form onSubmit={submithandler}>
      <div className="form-inner"> 
      <h2>Sign Up</h2>
  
          <div className="form-group">
            <label htmlFor= "taiKhoan">Tài Khoản</label>
            <input type="text" name="taiKhoan" id="taiKhoan" onChange={e => setDetails({...details, "taiKhoan": e.target.value}) }value={details.taiKhoan} />
          </div>
          <div className="form-group">
            <label htmlFor="matKhau">Mật Khẩu </label>
            <input type="password" name="matKhau" id="matKhau" onChange={e => setDetails({...details, "matKhau": e.target.value}) }value={details.matKhau}/>
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" onChange={e => setDetails({...details, "email": e.target.value}) }value={details.email}/>
          </div>
          <div className="form-group">
            <label htmlFor="soDt">Số Điện Thoại</label>
            <input type="number" name="soDt" id="soDt" onChange={e => setDetails({...details, "soDt": e.target.value}) }value={details.soDt}/>
          </div>
          <div className="form-group">
            <label htmlFor="maNhom">Mã Nhóm</label>
            <input type="text" name="maNhom" id="maNhom" onChange={e => setDetails({...details, "maNhom": e.target.value}) }value={details.maNhom}/>
          </div>
          <div className="form-group">
            <label htmlFor="hoTen">Họ và tên</label>
            <input type="text" name="hoTen" id="hoTen" onChange={e => setDetails({...details, "hoTen": e.target.value}) }value={details.hoTen}/>
          </div>
          <input type="submit" value="SignUp"/>
      </div>
    </form>
  )

}

export default createUser