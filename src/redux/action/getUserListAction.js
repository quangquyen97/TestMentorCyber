import axios from "axios"
import { TOKENCYBER } from "../../ulti/setting"




export const getUserList = () => {
    return async (dispatch) =>{
    try {
        const result = await axios({
            url:`https://movienew.cybersoft.edu.vn/api/QuanLyNguoiDung/LayDanhSachNguoiDung?maNhom=GP01`,
            method: "GET",
            headers:{
                TokenCyberSoft: TOKENCYBER
            }
        })
        dispatch({
            type: 'GET_USER_LIST',
            arrUser: result.data.content})
        console.log(result)

    }catch(err){
        console.log(err)
    }
 }
}

