import axios from "axios";
import { history } from "../../App";
import { TOKENCYBER } from "../../ulti/setting";
import swal from "sweetalert";



export const dangNhapAction = (details) => {
    
    return () => {

       const result =  axios.post("https://movienew.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap", details, {
            headers: {
                TokenCyberSoft: TOKENCYBER
            }
        }).then((res) => {
            if (res.status === 200) {
                window.localStorage.setItem('USER_LOGIN', JSON.stringify(res.data.content.accessToken));
                history.push('/laydanhsachnguoidung')
            }
            
        }).catch((err) => {
            swal('Đăng nhập thất bại',err.response.data.content,'error')
        })
    }
}
export const dangKyAction = (details) => {
    return () => {

        axios.post("https://movienew.cybersoft.edu.vn/api/QuanLyNguoiDung/DangKy", details, {
            headers: {
                TokenCyberSoft: TOKENCYBER
            }
        }).then((res) => {
            if (res.status === 200) {
                swal('Đăng ký thành công', `${res.data.message}`, 'success')
                history.push('/login')
            }

            // history.go(0)
        }).catch((err) => {
            console.log(err)
                swal('Đăng ký thất bại', `${err.response.data.content}`,'error')
            
        })
      
    }
}