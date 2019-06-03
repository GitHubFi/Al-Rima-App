import actionTypes from '../actionTypes';


let INITIAL_STATE = {
    isProgress: false,
    isError: false,
    errorTest: '',
    currentUser: {},
    userName: {},
    UserList: [],
    Notification: null,
    Bill: null,


}
export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case actionTypes.SIGNUP_PROGRESS:
            return { ...state, isProgress: true }
        case actionTypes.SIGNUP_SUCCEED:
            return {
                ...state,
                currentUser: action.data, isProgress: false
            }
        case actionTypes.SIGNUP_ERROR:
            return { ...state, isError: true, errorTest: action.error }
        case actionTypes.SIGNUP_ERROR_ALERT:
            return { ...state, isError: false, errorTest: '', isProgress: false }
        case actionTypes.SIGNUP_PROGRESS:
            return { ...state, isProgress: true }
        case actionTypes.SIGNIN_SUCCEED:
            return { ...state, currentUser: action.data, isProgress: false }
        case actionTypes.SIGNIN_ERROR:
            return { ...state, isError: true, errorTest: action.error }
        case actionTypes.SIGNUP_ERROR_ALERT:
            return { ...state, isError: false, errorTest: '', isProgress: false }
        case actionTypes.GET_USER_SINGUP_PROGRESS:
            return { ...state, isProgress: true }
        case actionTypes.GET_USER_SINGUP_SUCCESS:
            return { ...state, UserList: action.data, isProgress: false }
        case actionTypes.GET_NOTIFICATION_PROGRESS:
            return { ...state, isProgress: true }
        case actionTypes.GET_NOTIFICATION_SUCCESS:
            return { ...state, Notification: action.data, isProgress: false }
        case actionTypes.GET_Bill_SUCCESS:
            return { ...state, Bill: action.data, isProgress: false }
        case actionTypes. GET_Bill_PROGRESS:
            return { ...state, isProgress: true }

           
        default:
            return state;
    }
}