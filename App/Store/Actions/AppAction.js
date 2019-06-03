import actionTypes from '../actionTypes';
import firebase from 'react-native-firebase';
import firebaseAuth from 'react-native-firebase';


///////////////////////////// service /////////////////////////////////
export function serviceAction(obj) {
    console.log(obj, 'service')

    return dispatch => {
        dispatch(serviceRequest());
        // firebase.database().ref(`realState${obj.user}`)
        let addId = firebase
            .database().ref(`realState/userServices`).push().key;
        // console.log(addId)
        let updates = {};
        let addUser = {
            time: firebase.database.ServerValue.TIMESTAMP,
            serviceData: obj

        }
        updates[
            `realState/userServices/${addId}`
        ] = addUser;
        firebase
            .database()
            .ref()
            .update(updates);
        dispatch(serviceSuccess())
    }
}




function serviceRequest() {
    return {
        type: actionTypes.SERVICE_PROGRESS
    }
}
function serviceSuccess() {
    return {
        type: actionTypes.SERVICE_SUCCESS,
    }
}
function serviceError(error) {
    return {
        type: actionTypes.SERVICE_ERROR,
        error
    }
}
export function serviceErrorAlert() {
    return {
        type: actionTypes.SERVICE_ERROR_ALERT
    }
}



///////////////////////////// payment /////////////////////////////////

// export function paymentAction(data){

//     console.log(data, 'payment');
//     return dispatch => {
//         dispatch(paymentRequest());
//         let addId= firebase.database()
//         .ref(`realState/${data.user}`).child('userPayments')
//         .push().key;

//         let updates={};
//         let addUser ={
//             time:firebase.database.ServerValue.TIMESTAMP,
//             paymentData:data
//         }

//         updates[
//             `realState/${data.user}/userPayments/${addId}`
//         ] = addUser;

//         firebase.database()
//         .ref()
//         .update(updates);
//         dispatch(paymentSuccess())


//     }
// }



//   function paymentRequest(){
//       return{
//           type:actionTypes.PAYMENT_PROGRESS
//       }
//   }

//   function paymentSuccess(){
//       return{
//         type:actionTypes.PAYMENT_SUCCESS
//       }
//   }

//   function paymentErro(error){
//       return{
//           type:actionTypes.PAYMENT_ERROR,
//           error
//       }
//   }

//   export function paymentErrorAlert(){
//       return{
//           type:actionTypes.PAYMENT_ERROR_ALERT
//       }
//   }

//////////////////////////Ceeate payment Action////////////////////
export function paymentAction(obj) {
    console.log(obj, 'contact')

    return dispatch => {
        dispatch(paymentRequest());
        let addId = firebase.database().ref('realState/userPayment').push().key;
        let updates = {};
        let addUserComment = {
            time: firebase.database.ServerValue.TIMESTAMP,
            userPaymentData: obj

        }
        updates[
            `realState/userPayment/${addId}`
        ] = addUserComment;
        firebase
            .database()
            .ref()
            .update(updates);
        dispatch(paymentSuccess())
    }
}




function paymentRequest() {
    return {
        type: actionTypes.PAYMENT_PROGRESS
    }
}

function paymentSuccess() {
    return {
        type: actionTypes.PAYMENT_SUCCESS
    }
}

function paymentErro(error) {
    return {
        type: actionTypes.PAYMENT_ERROR,
        error
    }
}

export function paymentErrorAlert() {
    return {
        type: actionTypes.PAYMENT_ERROR_ALERT
    }
}

////////////////////create utility action//////////////////////////

export function utilitytAction(obj) {
    console.log(obj, 'contact')

    return dispatch => {
        dispatch(utilityPaymentRequest());
        let addId = firebase.database().ref('realState/utilityPayment').push().key;
        let updates = {};
        let addUserComment = {
            time: firebase.database.ServerValue.TIMESTAMP,
            userPaymentData: obj

        }
         updates[
            `realState/utilityPayment/${addId}`
        ] = addUserComment;
        firebase
            .database()
            .ref()
            .update(updates);
        dispatch(utilityPaymentSuccess())
    }
}

// export function createBillAction(bill) {
//     return dispatch => {
//         // dispatch(NotificationRequest());
//         let addId = dbConfig.database().ref(`realState/Bill`).push().key;
//         let updates = {};
//         let addUser = { bill }
//         updates[
//             `realState/Bill/${addId}`
//         ] = addUser;
//         dbConfig
//             .database()
//             .ref()
//             .update(updates);
//     }
// }


function utilityPaymentRequest() {
    return {
        type: actionTypes.UTILITY_PAYMENT_PROGRESS
    }
}

function utilityPaymentSuccess() {
    return {
        type: actionTypes.UTILITY_PAYMENT_SUCCESS
    }
}
/////////////////////////////////// Contact ////////////////////////////////////

export function contactAction(obj) {
    console.log(obj, 'contact')

    return dispatch => {
        dispatch(contactRequest());
        let addId = firebase.database().ref('realState/contactMessage').push().key;
        let updates = {};
        let addUserComment = {
            time: firebase.database.ServerValue.TIMESTAMP,
            contactMessageData: obj

        }
        updates[
            `realState/contactMessage/${addId}`
        ] = addUserComment;
        firebase
            .database()
            .ref()
            .update(updates);
    }
}

function contactRequest() {
    return {
        type: actionTypes.CONTACT_PROGRESS
    }
}
function contactSuccess() {
    return {
        type: actionTypes.CONTACT_SUCCESS,
    }
}
function contactError(error) {
    return {
        type: actionTypes.CONTACT_ERROR,
        error
    }
}
export function contactErrorAlert() {
    return {
        type: actionTypes.CONTACT_ERROR_LIST
    }
}



//////////////////////////////////Getting Notification///////////////////////////////

export function NotificationAction() {
    return dispatch => {
        dispatch(getUserProgress())
        firebase.database().ref('realState/Notification').on('value', snapshot => {
            // console.log(snapshot.val())
            let userList = snapshot.val(),
                userListKeys = Object.keys(userList);

            let arrList = [];
            userListKeys.map(i => {
                if (userList[i]) {
                    let obj = {
                        Notification1: userList[i].Notification.Notification1,
                        Notification2: userList[i].Notification.Notification2,
                        Notification3: userList[i].Notification.Notification3,

                        // userServices: Object.values(userList[i].userServices)
                    }
                    arrList.push(obj)
                }
            })
            console.log(arrList, '+*********************************+sNotification1+*****************************')
            dispatch(getUserSuccess(arrList))
        })
    }

}


function getUserProgress() {
    return {
        type: actionTypes.GET_NOTIFICATION_PROGRESS
    }
}
function getUserSuccess(data) {
    return {
        type: actionTypes.GET_NOTIFICATION_SUCCESS,
        data
    }
}




//////////////////////////////////Getting Bill///////////////////////////////

export function BillAction() {
    return dispatch => {
        dispatch(getUserBillProgress())
        firebase.database().ref('realState/Bill').on('value', snapshot => {
            // console.log(snapshot.val())
            let userList = snapshot.val(),
                userListKeys = Object.keys(userList);

            let arrList = [];
            userListKeys.map(i => {
                if (userList[i]) {
                    let obj = {
                        Notification1: userList[i].bill.Notification1,
                        Notification2: userList[i].bill.Notification2,
                        Notification3: userList[i].bill.Notification3,
                        userId: userList[i].bill.userId

                        // userServices: Object.values(userList[i].userServices)
                    }
                    arrList.push(obj)
                }
            })
            console.log(arrList, '+*********************************+Bill+*****************************')
            dispatch(getUserBillSuccess(arrList))
        })
    }

}


function getUserBillProgress() {
    return {
        type: actionTypes.GET_Bill_PROGRESS
    }
}
function getUserBillSuccess(data) {
    return {
        type: actionTypes.GET_Bill_SUCCESS,
        data
    }
}
