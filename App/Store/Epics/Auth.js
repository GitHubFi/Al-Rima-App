// import actionTypes from '../actionTypes';
// import {Observable} from 'rxjs';
// import firebase from 'react-native-firebase';
//
// export default class AuthEpic{
// static signUp(action$){
//     return action$.ofType(actionTypes.SIGNUP_PROG).switchMap(({payload})=>{
//         // console.log(payload)
//          return firebase.auth().createUserWithEmailAndPassword(payload.email,payload.password).pluck("response").map((obj)=>{
//              console.log(obj)
//          })
//
//     })
// }
// }