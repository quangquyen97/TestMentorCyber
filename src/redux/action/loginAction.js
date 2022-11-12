import axios from "axios";
import { history } from "../../App";
import GetUserList from "../../page/getUserList";
import { TOKENCYBER } from "../../ulti/setting";



export const dangNhapAction = (details) => {

    return () => {

        axios.post("https://movienew.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap", details, {
            headers: {
                TokenCyberSoft: TOKENCYBER
            }
        }).then((res) => {
            console.log(res)
            if (res.status == 200) {
                history.push('/laydanhsachnguoidung')
                history.go(0)

            }
        }).catch((err) => {
            console.log(err)
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
            console.log(res)
            if (res.status == 200) {
                alert('create thanh cong')
                history.push('/login')
            }
        }).catch((err) => {
            console.log(err)
             if(err.response.status == 400){
                alert('Tai Khoan hoac email da ton tai')
            }
        })
    }
}