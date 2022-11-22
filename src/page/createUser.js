import React, { Suspense, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { dangKyAction } from '../redux/action/loginAction';
import validate from './validate';

function createUser() {
  const [details, setDetails] = useState({
    taiKhoan: "",
    matKhau: "",
    email: "",
    soDt: "",
    maNhom: "",
    hoTen: ""
  });
  const [errors, setErr] = useState({

  })

  const dispatch = useDispatch()

  const handleSubmit = e => {
    e.preventDefault();
    setErr(validate(details))
    if (Object.keys(validate(details)).length === 0) {
      dispatch(dangKyAction(details))
      console.log(Object.keys(errors).length)
    }


  }




  return (

    <form onSubmit={handleSubmit}>
      <div className="form-inner">
        <h2>Sign Up</h2>

        <div className="form-group">
          <label htmlFor="taiKhoan">Tài Khoản</label>
          <input type="text" name="taiKhoan" id="taiKhoan" onChange={e => setDetails({ ...details, "taiKhoan": e.target.value })} value={details.taiKhoan} />
          <span className='alertMess' style={{ fontSize: '10px', color: 'red' }}>{errors.taiKhoan}</span>
        </div>
        <div className="form-group">
          <label htmlFor="matKhau">Mật Khẩu </label>
          <input type="password" name="matKhau" id="matKhau" onChange={
            e => setDetails({ ...details, "matKhau": e.target.value })} value={details.matKhau} />
          <span style={{ fontSize: '10px', color: 'red' }} >{errors.matKhau}</span>
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" onChange={e => setDetails({ ...details, "email": e.target.value })} value={details.email} />
          <span className='alertMess' style={{ fontSize: '10px', color: 'red' }} >{errors.email}</span>
        </div>
        <div className="form-group">
          <label htmlFor="soDt">Số Điện Thoại</label>
          <input type="number" name="soDt" id="soDt" onChange={e => setDetails({ ...details, "soDt": e.target.value })} value={details.soDt} />
          <span style={{ fontSize: '10px', color: 'red' }} >{errors.soDt}</span>
        </div>
        <div className="form-group">
          <label htmlFor="maNhom">Mã Nhóm</label>
          <input type="text" name="maNhom" id="maNhom" onChange={e => setDetails({ ...details, "maNhom": e.target.value })} value={details.maNhom} />
          <span style={{ fontSize: '10px', color: 'red' }} >{errors.maNhom}</span>
        </div>
        <div className="form-group">
          <label htmlFor="hoTen">Họ và tên</label>
          <input type="text" name="hoTen" id="hoTen" onChange={e => setDetails({ ...details, "hoTen": e.target.value })} value={details.hoTen} />
          <span style={{ fontSize: '10px', color: 'red' }} >{errors.hoTen}</span>
        </div>
        <input type="submit" value="SignUp" />
      </div>
    </form>
  )

}

export default createUser