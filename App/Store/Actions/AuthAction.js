import actionTypes from '../actionTypes';
import firebase from 'react-native-firebase';
import { AsyncStorage } from 'react-native';


export function signUpFunc(SignUpObj, path) {
    console.log("****************************************************s*********************", SignUpObj.Name)
    return dispatch => {
        dispatch(signUpRequest());
        firebase.auth().createUserWithEmailAndPassword(SignUpObj.email, SignUpObj.password).
            then(() => {
                let user = firebase.auth().currentUser;
                console.log("---------------********************--------------------", user)
                path.navigate('dashBoard');

                // console.log('New User', user);
                // let name = SignUpObj.Name;
                // user.displayName = SignUpObj.Name;
                let obj = {
                    name: SignUpObj.Name,
                    uid: user.uid,
                    email: user.email
                }
                // await AsyncStorage.setItem('User', obj);
                firebase.database().ref(`realState/RimaUsers/${user.uid}`).set(obj);
                dispatch(signUpSucceed(obj));
            })
            .catch(err => {
                dispatch(signUpError(err.message));
                path.navigate('signUp');
            })
    }
}

export function signinFunc(SignInObj, path) {
    return dispatch => {
        // console.log(SignInObj, path)
        dispatch(signInRequest());
        firebase.auth().signInWithEmailAndPassword(SignInObj.email, SignInObj.password)
            .then(() => {
                let user = firebase.auth().currentUser;
                console.log(user, "///////////////////////////////////////////////////////////////////////")
                path.navigate('dashBoard');

                let obj = {
                    // name: name,
                    uid: user.uid,
                    email: user.email
                }
                dispatch(signInSucced(obj));
                // console.log("1234455667789900----", obj)

            })
            .catch((err) => {
                dispatch(signInError(err.message));
                path.navigate('signIn');
            })
    }
}
function signInRequest() {
    return {
        type: actionTypes.SIGNIN_PROGRESS
    }
}
function signInSucced(data) {
    return {
        type: actionTypes.SIGNIN_SUCCEED,
        data
    }
}
function signInError(error) {
    return {
        type: actionTypes.SIGNIN_ERROR,
        error
    }
}
export function signInErrorAlert() {
    return {
        type: actionTypes.SIGNIN_ERROR_ALERT
    }
}
function signUpRequest() {
    return {
        type: actionTypes.SIGNUP_PROGRESS
    }
}
function signUpSucceed(data) {
    return {
        type: actionTypes.SIGNUP_SUCCEED,
        data
    }
}
function signUpError(error) {
    return {
        type: actionTypes.SIGNUP_ERROR,
        error
    }
}
export function signUpErrorAlert() {
    return {
        type: actionTypes.SIGNUP_ERROR_ALERT
    }
}


export function GetSignUpUser() {
    return dispatch => {
        console.log('get')
        dispatch(getUserProgress1())
        firebase.database().ref('realState/RimaUsers').on('value', snapshot => {
            // console.log(snapshot.val(),"+++++++++++++++++++++++++++++++++++++")
            let userList = snapshot.val(),
                userListKeys = Object.keys(userList);

            let arrList = [];
            userListKeys.map(i => {
                if (userList[i]) {
                    let obj = {
                        uid: userList[i].uid,
                        email: userList[i].email,
                        name: userList[i].name,
                    }
                    arrList.push(obj)
                }

            })
            console.log(arrList, '+++++++++++++++++++++++++++++++++++++')
            dispatch(getUserSuccess1(arrList))

        })
    }

}
function getUserProgress1() {
    return {
        type: actionTypes.GET_USER_SINGUP_PROGRESS
    }
}
function getUserSuccess1(data) {
    return {
        type: actionTypes.GET_USER_SINGUP_SUCCESS,
        data
    }
}

// function getUserError(error) {
//     return {
//         type: ActionTypes.GET_USER_FAILED,
//         payload: error
//     }
// }


