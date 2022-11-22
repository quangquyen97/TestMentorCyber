import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import swal from 'sweetalert'
import { history } from '../App'
import { getUserList } from '../redux/action/getUserListAction'
function GetUserList() {

  const dispatch = useDispatch()
  const arrUser = useSelector(state => state.GetUserList.arrUser)
  const [user, setUser] = useState({ taiKhoan: "", matKhau: "" });
  const userLogin = window.localStorage.getItem('USER_LOGIN')
  console.log(userLogin)
  useEffect(() => {
    if(userLogin){
      dispatch(getUserList())
    }else{
      swal("Không đủ quyền truy cập",'bạn phải đăng nhập','error')
      history.push('login');
    }
  }, [])

  console.log(arrUser)
  const Logout = () => {
    setUser({ taiKhoan: "", matKhau: "" });
    history.push("/login")
    window.localStorage.clear()
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