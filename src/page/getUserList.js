import React, { Fragment, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { history } from '../App'
import { getUserList } from '../redux/action/getUserListAction'
function GetUserList() {

  const dispatch = useDispatch()
  const arrUser = useSelector(state => state.GetUserList.arrUser)
  const [user, setUser] = useState({ taiKhoan: "", matKhau: "" });
  const userLogin = JSON.stringify(localStorage.getItem('USER_LOGIN'))
  useEffect(() => {
    if(userLogin == ''){
      dispatch(getUserList())
    }else{
      alert("bạn chưa đăng nhập")
    }
  }, [])

  console.log(arrUser)
  const Logout = () => {
    setUser({ taiKhoan: "", matKhau: "" });
    history.push("/login")
    history.go(0)
    localStorage.clear()
  }
  return (
    <div className='welcome'>
      <div className="table-user">
        
            <h1 style={{textAlign:'center'}}>Danh Sach Nguoi Dung</h1> 
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Tài Khoản</th>
              <th scope="col">Họ Tên</th>
              <th scope="col">Email</th>
              <th scope="col">Số Điện Thoại</th>
              <th scope="col">Mã Loại Người Dùng</th>
            </tr>
          </thead>
          <tbody>
            {arrUser.map((user, index) => {
              return <tr key={index}>
                <td>{user.taiKhoan}</td>
                <td>{user.hoTen}</td>
                <td>{user.email}</td>
                <td>{user.soDT}</td>
                <td>{user.maLoaiNguoiDung}</td>
              </tr>
            })}
          </tbody>
        </table>



      </div>
      <button className='logout-button' onClick={Logout}>Logout</button>
    </div>
  )
}

export default GetUserList