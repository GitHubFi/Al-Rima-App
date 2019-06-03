import React, { Component } from 'react';
import { View, ScrollView, Dimensions,Text } from 'react-native';
const { width, height, scale, fontScale } = Dimensions.get("window");
import { Icon, Picker, Item,Input,Button } from 'native-base';
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Entypo from "react-native-vector-icons/Entypo";
export default class Booking extends Component {
    constructor() {
        super()
        this.state = {
            selectBooking: ''
        }
    }
    static navigationOptions = {
        title: 'Booking',
        headerStyle: {
            backgroundColor: "#8b6e4b",
        },
        headerTintColor: '#fff',
        headerTitleStyle: { alignSelf: 'center', textAlign: "center", flex: 1, marginLeft: -10, color: '#28678d' },


    }

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
                <View style={{ flex: 1 }}>
                    <View style={{ flex: 0.1 }}>
                        <Item picker>
                            <Picker
                                mode="dropdown"
                                iosIcon={<Icon name="arrow-down" />}
                                style={{ width: undefined }}
                                placeholder="Select your SIM"
                                placeholderStyle={{ color: "#bfc6ea" }}
                                placeholderIconColor="#007aff"
                                selectedValue={
                                    this.state.selectBooking
                                }
                                onValueChange={
                                    event => this.setState({ selectBooking: event })
                                }
                            >
                                <Picker.Item label="Flat" value="flat" />
                                <Picker.Item label="House" value="house" />
                                <Picker.Item label="Appartments" value="appartments" />
                                <Picker.Item label="Shop" value="shop" />
                            </Picker>


                        </Item>
                    </View>
                    <View style={{ flex: 0.9, justifyContent: "space-around" }}>
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
                // onPress={this.signIn}
              >
                <Text style={{ color: "#fff" }}>LET'S START</Text>
              </Button>
            </View>
           
            
       


                    </View>
                </View>
            </ScrollView>
        )
    }
}