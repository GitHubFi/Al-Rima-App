import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Dimensions,
  Image,
  TouchableOpacity,
  ToastAndroid,
  AsyncStorage
} from "react-native";
import { Input, Button, Spinner } from "native-base";
const { width, height, scale, fontScale } = Dimensions.get("window");
import Entypo from "react-native-vector-icons/Entypo";
import { connect } from 'react-redux';
import { signinFunc } from '../../Store/Actions/AuthAction'
import validator from "validator";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      loading: false
    };
  }
  static navigationOptions = {
    header: null
  };
  replaceScreen = route => {
    this.props.navigation.dispatch({
      type: "ReplaceCurrentScreen",
      key: `${route}`,
      routeName: `${route}`
    });
  };
  signIn = () => {
    const { email, password, confirmPassword, name } = this.state;
    console.log(this.state)
    if (!validator.isEmail(email)) {
      ToastAndroid.show("Please fill the email correctly", ToastAndroid.SHORT);
      return;
    } else if (password.toString().length < 8) {
      ToastAndroid.show("Password must be of 8 characters", ToastAndroid.SHORT);
      return;
    }

    console.log(this.state)
    this.props.signinAction(this.state, this.props.navigation);
  };
  render() {
    return (
      <ScrollView
        contentContainerStyle={{
          height: height,
          width,
          backgroundColor: "#eeeeee"
        }}
        keyboardDismissMode="interactive"
        keyboardShouldPersistTaps="handled"
      >
        <View
          style={{
            flex: 1,
            padding: width / 20,
            justifyContent: "space-around"
          }}
        >
          <View
            style={{
              flex: 0.4,
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <Image
              source={require("../../../assets/logoB.png")}
              style={{
                width: width/2,
                height,
                marginTop: 20,
                resizeMode: "contain"
                // color:'rgba(208, 164, 135, 1)'
              }}
            />
          </View>
          <View style={{ flex: 0.5, justifyContent: "space-around" }}>
            <View
              style={{
                flex: 0.1,
                flexDirection: "row",
                alignItems: "center",
                borderColor: "#fff",
                borderWidth: 1,
                backgroundColor: "#fff",
                height: width / 18
              }}
            >
              <MaterialCommunityIcons name="email" size={25} color="#24516e" />
              <Input
                placeholderTextColor={"#24516e"}
                placeholder={"Email"}
                placeholder="Email"
                style={{ color: "#24516e" }}
                keyboardType={"email-address"}
                onChangeText={email => this.setState({ email })}
              />
            </View>
            <View
              style={{
                flex: 0.1,
                flexDirection: "row",
                alignItems: "center",
                borderColor: "#fff",
                borderWidth: 1,
                backgroundColor: "#fff",
                height: width / 18,

              }}
            >
              <Entypo name={"lock"} size={25} color="#24516e" />
              <Input
                placeholderTextColor={"#24516e"}
                placeholder={"Password"}
                placeholder="Password"
                style={{ color: "#24516e" }}
                secureTextEntry
                onChangeText={password => this.setState({ password })}
              />
            </View>
            <View
              style={{
                flex: 0.1,
                justifyContent: "center",
                alignItems: "center",

              }}
            >
              <Button
                style={{
                  // marginTop: height / 10,
                  height: width / 14,
                  width: width * 0.9,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: "#05527c",
                  alignSelf: "center",
                  // borderRadius: width / 12
                }}
                onPress={this.signIn}
              >
                <Text style={{ color: "#fff" }}>LET'S START</Text>
              </Button>
            </View>
            <View
              style={{
                flex: 0.1,
                justifyContent: "center",
                alignItems: "center",
                height: width / 26
              }}
            >

              <Text style={{ color: "#05527c" }}>or you can</Text>
            </View>
            <View
              style={{
                flex: 0.1,
                justifyContent: "center",
                alignItems: "center",

              }}
            >
              <Button
                style={{
                  // marginTop: height / 10,
                  height: width / 14,
                  width: width * 0.9,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: "rgba(60, 90, 154, 1)",
                  alignSelf: "center",
                  // borderRadius: width / 12
                }}
                onPress={() => this.replaceScreen("dashBoard")}
              ><MaterialCommunityIcons name="facebook" size={25} color="#fff" />
                <Text style={{ color: "#fff" }}>SIGN IN WITH FACEBOOK</Text>
              </Button>
            </View>
            <View
              style={{
                flex: 0.2,
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              <View style={{ flex: 0.5 }}>
                <Text style={{ color: "#05527c" }}>
                  Don't have an account ?
                <Text
                    style={{
                      color: "#05527c",
                      textDecorationLine: "underline",
                      textDecorationColor: "#05527c"
                    }}
                    onPress={() => {
                      this.replaceScreen("signUp");
                    }}
                  >
                    Register Now
                </Text>
                </Text>
              </View>
            </View>
          </View>
          <View style={{ flex: 0.1 }}>
          </View>
        </View>
      </ScrollView>
    );
  }
}

function mapStateToProps(state) {
  return {

  }
}
function mapDispatchToProps(dispatch) {
  return {
    signinAction: (data, path) => {
      dispatch(signinFunc(data, path))
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(SignIn)