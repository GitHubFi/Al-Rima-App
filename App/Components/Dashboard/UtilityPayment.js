import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, ScrollView, Dimensions, Image, TouchableOpacity, ToastAndroid, AsyncStorage } from 'react-native';
import { Input, Button, Spinner, Thumbnail, Picker, Item } from "native-base";
const { height, width } = Dimensions.get('window');

import Entypo from "react-native-vector-icons/Entypo";
import { connect } from 'react-redux';
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { utilitytAction } from '../../Store/Actions/AppAction'




class UtilityPayment extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selected2: undefined,
            cardNumber:'',
            date:'',
            cvc:'',
            RentforoneBed:15000,
            name:'',
            payment:'paid',
            paid:'true'
            

        };
    }
    static navigationOptions = {
        title: 'Rima Residency Payment Gateway',
        headerStyle: {
            backgroundColor: "#8b6e4b",

        },
        headerTintColor: '#fff',
        headerTitleStyle: { alignSelf: 'center', textAlign: "center", flex: 1, marginLeft: -10, color: '#fff', fontSize: 18 },


    }

    replaceScreen = route => {
        this.props.navigation.dispatch({
            type: "ReplaceCurrentScreen",
            key: `${route}`,
            routeName: `${route}`
        });
    };
    submit = async () => {
        const { cardNumber, date, cvc, RentforoneBed ,payment,paid, name} = this.state
      
     
        if (cardNumber === '') {
            ToastAndroid.show('Please Enter Your Card Number', ToastAndroid.SHORT);
            return
        } else if (date === '') {
            ToastAndroid.show('Please Enter Date', ToastAndroid.SHORT);
            return

        }else if (name === '') {
            ToastAndroid.show('Please Enter name', ToastAndroid.SHORT);
            return

        }
        else if (cvc === '') {

            ToastAndroid.show('Please Enter Your CVC', ToastAndroid.SHORT);
            return

        }
        let user = await AsyncStorage.getItem('User');
        let serviceDetail ={ cardNumber, date, cvc,user ,RentforoneBed,paid, name, payment }
        this.props.paymentComponent(serviceDetail);
        ToastAndroid.show('Thank You, your payment has been processed.', ToastAndroid.SHORT);
        this.props.navigation.navigate('dashBoard');

       
       
       
        
    }

    onValueChange2(value) {
        this.setState({
            selected2: value
        });
    }
    render() {
        return (
            <ScrollView contentContainerStyle={{ height: height - 80, width, backgroundColor: "#eeeeee" }} keyboardDismissMode="interactive" keyboardShouldPersistTaps="handled" >
                <View style={{ flex: 1, padding: width / 20, justifyContent: "space-around" }}>
                    <View style={{ flex: 0.3, justifyContent: "center", alignItems: "center", backfaceVisibility: '#e9ebee' }}>
                        <Image
                            source={require("../../../assets/logoB.png")}
                            resizeMode="contain"
                            style={{ width: width / 2, marginLeft: 8, marginRight: -6, height: height / 10 }}
                        />
                        <View style={{ flex: 0.2, justifyContent: "center",margin:10, alignItems: "center" }} >
                            <Text style={{ fontSize: width / 20, fontWeight: 'bold' }} >
                                Customer Account No:
                   </Text>
                   <Text style={{ fontSize: width / 20, fontWeight: 'bold' }} >
                                 {this.props.currentUser.uid}
                   </Text>
                   
                        </View>
                        <View style={{ flex: 0.2, justifyContent: "center", alignItems: "center" }}>
                            <Text style={{ fontSize: width / 24, fontWeight: 'bold' }}>
                                Payment Against:
                         </Text>
                        </View>
                        <View style={{ flex: 0.4, justifyContent: "center", alignItems: "center" }}>

                            <Text style={{ fontSize: width / 20, fontWeight: 'bold' }}>
                                Amount: 150000 rs
</Text>

                        </View>
                    </View>
                    <View style={{ flex: 0.6, backgroundColor: '#f5f6f7', justifyContent: 'space-between', alignItems: 'center' }}>
                    <View
                            style={{
                                flex: 0.2,
                                flexDirection: "row",
                                alignItems: "center",
                                borderColor: "#fff",
                                borderWidth: 1,
                                backgroundColor: "#fff",
                                height: width / 18,
                                margin: width / 36
                            }}
                        >
                            <MaterialCommunityIcons name="account-box" size={28} color="#24516e" />
                            <Input
                                placeholderTextColor={"#24516e"}
                                placeholder={" Enter Name"}
                                placeholder=" Enter Name"
                                keyboardType={"default"}
                                style={{ color: "#24516e" }}
                                onChangeText={name => this.setState({ name:name })}
                            />
                        </View>
                        <View
                            style={{
                                flex: 0.2,
                                flexDirection: "row",
                                alignItems: "center",
                                borderColor: "#fff",
                                borderWidth: 1,
                                backgroundColor: "#fff",
                                height: width / 18,
                                margin: width / 36
                            }}
                        >
                            {/* <MaterialCommunityIcons name="credit-card" size={25} color="#24516e" /> */}
                            {
                              (this.state.selected2 == 'visa')? 
                              <Image
                              source={require("../../../assets/visa.png")}
                              resizeMode="contain"
                              style={{ width: 45, marginLeft: 5, marginRight: -6,marginTop:5, height: height / 9 }}
                              />

                              :
                              
                              <Image
                              source={require("../../../assets/mastercard.png")}
                              resizeMode="contain"
                              style={{ width: 45, marginLeft: 5, marginRight: -6, height: height / 9 }}
                              />
                            }
                            <Picker
                                mode="dropdown"
                                // style={{ width: width/10 }}
                                placeholder="Select your SIM"
                                placeholderStyle={{ color: "#bfc6ea" }}
                                selectedValue={this.state.selected2}
                                onValueChange={this.onValueChange2.bind(this)}
                                style={{ width: 0,height: height / 9 }}
                            >

                                <Picker.Item label="Visa" value="visa" />
                                 <Picker.Item label="Master" value="master" />

                            </Picker>
                            <Input
                                placeholderTextColor={"#24516e"}
                                placeholder={"Card Number"}
                                placeholder=" Card Number"
                                style={{ color: "#24516e" }}
                                keyboardType={"numeric"}
                                onChangeText={name => this.setState({ cardNumber:name })}
                            />
                        </View>
                        <View
                            style={{
                                flex: 0.2,
                                flexDirection: "row",
                                alignItems: "center",
                                borderColor: "#fff",
                                borderWidth: 1,
                                backgroundColor: "#fff",
                                height: width / 18,
                                margin: width / 36
                            }}
                        >
                            <MaterialCommunityIcons name="calendar" size={25} color="#24516e" />
                            <Input
                                placeholderTextColor={"#24516e"}
                                placeholder={"  MM / YY"}
                                placeholder="  MM / YY"
                                style={{ color: "#24516e" }}
                                keyboardType={"default"}
                                onChangeText={date => this.setState({ date:date })}
                            />
                        </View>
                        <View
                            style={{
                                flex: 0.2,
                                flexDirection: "row",
                                alignItems: "center",
                                borderColor: "#fff",
                                borderWidth: 1,
                                backgroundColor: "#fff",
                                height: width / 18,
                                margin: width / 36
                            }}
                        >
                            <MaterialCommunityIcons name="lock" size={25} color="#24516e" />
                            <Input
                                placeholderTextColor={"#24516e"}
                                placeholder={"CVC"}
                                placeholder="CVC"
                                keyboardType={"numeric"}
                                style={{ color: "#24516e" }}
                                onChangeText={cvc => this.setState({ cvc:cvc })}
                            />
                        </View>

                        <View
                            style={{
                                flex: 0.2,
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
                                    backgroundColor: "#24516e",
                                    alignSelf: "center",
                                    // borderRadius: width / 12
                                }}
                                onPress={this.submit}
                            >
                                <Text style={{ color: "#fff" }}>PAY </Text>
                            </Button>
                        </View>
                    </View>


                </View>
            </ScrollView>
        )
    }
}

function mapStateToProps(state) {
    return {
        currentUser: state.authReducer.currentUser
    }
}
function mapDispatchToProps(dispatch) {
    return {
        paymentComponent: data => {
            dispatch(utilitytAction(data))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(UtilityPayment)