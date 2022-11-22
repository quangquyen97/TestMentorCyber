



const stateDefault = {
    arrUser:[],
    
    newUser:{}
}

export const GetUserList = (state = stateDefault, action) => {
    switch (action.type) {
        case 'GET_USER_LIST': {
            state.arrUser = action.arrUser
            return { ...state }
        }
        case 'SIGN_UP':{
            state.newUser = action.newUser
            return { ...state }
        }
        
        default:
            return { ...state }
    }
}   

