/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { View, Alert, AsyncStorage } from "react-native";
import { Provider } from "react-redux";
import { store } from "../Store/index";
import { createStackNavigator } from "react-navigation";
import Splash from "./Splash/Splash.js";
import SignIn from "./SignIn/SignIn.js";
import SignUp from "./SignUp/SignUp.js";
import Dashboard from "./Dashboard/Dashboard";
import UserProfile from "./Dashboard/UserProfile";
import Account from "./Dashboard/Account";
import Utilities from "./Dashboard/Utilities";
import UtilityPayment from "./Dashboard/UtilityPayment"
import Properties from "./Dashboard/Properties";
import Contact from "./Dashboard/Contact";
import House from "./Dashboard/Properties/House";
import Office from "./Dashboard/Properties/Office";
import Flat from "./Dashboard/Properties/Flat";
import Shop from "./Dashboard/Properties/Shop";
import Detail from "./Dashboard/Properties/Detail";
import About from "./Dashboard/About";
import firebase from 'react-native-firebase'
import Booking from './Dashboard/Booking';
import Payments from './Dashboard/Payment';
import Services from './Dashboard/Services';
import Notification from './Dashboard/Notification';
import BedOne from './Dashboard/Properties/BedOne';
import OneBedRoom from './Dashboard/Properties/OneBedRoom.js';
import OneBedRoom2 from './Dashboard/Properties/OneBedRoom2.js'

export default class App extends Component<Props> {
  async  componentDidMount() {
    this.checkPermission();
    this.createNotificationListeners();

  }
  componentWillUnmount() {
    this.notificationListener();
    this.notificationOpenedListener();
  }
  async checkPermission() {
    const enabled = await firebase.messaging().hasPermission();
    if (enabled) {
      this.getToken();
    } else {
      this.requestPermission();
    }
  }

  async createNotificationListeners() {
    /*
    * Triggered when a particular notification has been received in foreground
    * */
    this.notificationListener = firebase.notifications().onNotification((notification) => {
      const { title, body } = notification;
      this.showAlert(title, body);
    });
    this.notificationOpenedListener = firebase.notifications().onNotificationOpened((notificationOpen) => {
      const { title, body } = notificationOpen.notification;
      this.showAlert(title, body);
    });
    const notificationOpen = await firebase.notifications().getInitialNotification();
    if (notificationOpen) {
      const { title, body } = notificationOpen.notification;
      this.showAlert(title, body);
    }
    this.messageListener = firebase.messaging().onMessage((message) => {
      //process data message
      console.log(JSON.stringify(message));
    });
  }
  showAlert(title, body) {
    Alert.alert(
      title, body,
      [
        { text: 'OK', onPress: () => console.log('OK Pressed') },
      ],
      { cancelable: false },
    );
  }
  async getToken() {
    let fcmToken = await AsyncStorage.getItem('fcmToken');
    if (!fcmToken) {
      fcmToken = await firebase.messaging().getToken();
      if (fcmToken) {
        // user has a device token
        await AsyncStorage.setItem('fcmToken', fcmToken);
      }
    }
  }
  async requestPermission() {
    try {
      await firebase.messaging().requestPermission();
      // User has authorised
      this.getToken();
    } catch (error) {
      // User has rejected permissions
      console.log('permission rejected');
    }
  }
  render() {
    return (
      <Provider store={store}>
        <View style={{ flex: 1 }}>
          <RootStack />
        </View>
      </Provider>
    );
  }
}

const RootStack = createStackNavigator(
  {
    signUp: SignUp,
    signIn: SignIn,
    splash: Splash,
    dashBoard: Dashboard,
    userProfile: UserProfile,
    contact: Contact,
    utilities: Utilities,
    account: Account,
    properties: Properties,
    house: House,
    shop: Shop,
    office: Office,
    flat: Flat,
    detail: Detail,
    about: About,
    booking: Booking,
    payment:Payments,
    services:Services,
    Notification:Notification,
    BedOne:BedOne,
    OneBedRoom:OneBedRoom,
    OneBedRoom2:OneBedRoom2,
    UtilityPayment:UtilityPayment
  },
  {
    initialRouteName: "splash"
  }
);
const prevGetStateForActionRootStack = RootStack.router.getStateForAction;

RootStack.router.getStateForAction = (action, state) => {
  if (state && action.type === "ReplaceCurrentScreen") {
    console.log("replace screen action");
    const routes = state.routes.slice(0, state.routes.length - 1);
    routes.push(action);
    return {
      ...state,
      routes,
      index: routes.length - 1
    };
  }
  return prevGetStateForActionRootStack(action, state);
};
