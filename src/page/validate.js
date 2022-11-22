const validate = (values) => {
    const err = {}
    const regexTk = /^[A-Z a-z]+$/
    const regexPass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{6,20}$/
    const regexSdt =/^[0-9].{9,12}$/
  
    if(!values.taiKhoan){
      err.taiKhoan = 'tài khoản không được bỏ trống'
    }else if(!values.taiKhoan.match(regexTk)){
      err.taiKhoan = "Tên tài khoản dài từ 6 đến 20 ký tự, không dấu"
    }

    if(!values.matKhau){
      err.matKhau = 'Mật khẩu không được bỏ trống'
    }

    if(!values.email){
      err.email = 'Email không được bỏ trống'
    }
    if(!values.soDt){
      err.soDt = 'Số điện thoại không được bỏ trống'
    }else if(!values.soDt.match(regexSdt)){
      err.soDt = "Số điện thoại chưa đúng định dạng"
    }

    if(!values.maNhom){
      err.maNhom = 'Mã nhóm không được bỏ trống'
    }

    if(!values.hoTen){
      err.hoTen = 'Họ tên không được bỏ trống'
    }
    return err 
  }

  export default validate