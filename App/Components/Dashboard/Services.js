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
import { Input, Button, Spinner, Textarea, DatePicker, Picker, Item, Icon } from "native-base";
const { width, height, scale, fontScale } = Dimensions.get("window");
import Entypo from "react-native-vector-icons/Entypo";
import { connect } from 'react-redux';
import { serviceAction } from '../../Store/Actions/AppAction'
import validator from "validator";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
class Services extends Component {
    constructor(props) {
        super(props);
        this.state = {

            loading: false,
            chosenDate: new Date(),
            serviceRequired: '',
            houseNo: '',
            address: '',
            pNumber: '',
            description: '',
            timeSlot: ''
        };
    }
    static navigationOptions = {
        title: 'Service',
        headerStyle: {
            backgroundColor: "#8b6e4b",
        },
        headerTintColor: '#fff',
        headerTitleStyle: { alignSelf: 'center', textAlign: "center", flex: 1, marginLeft: -10, color: '#fff' },


    }
    replaceScreen = route => {
        this.props.navigation.dispatch({
            type: "ReplaceCurrentScreen",
            key: `${route}`,
            routeName: `${route}`
        });
    };
    submit = async () => {
        const { chosenDate, serviceRequired, houseNo, address, pNumber, description, timeSlot } = this.state;

        console.log(this.state)
        if (serviceRequired === '') {
            ToastAndroid.show('Please Select Your Service', ToastAndroid.SHORT);
            return
        } else if (houseNo === '') {
            ToastAndroid.show('Please Enter Your House No', ToastAndroid.SHORT);
            return

        }
        else if (address === '') {

            ToastAndroid.show('Please Enter Your Address', ToastAndroid.SHORT);
            return

        }
        else if (pNumber === '') {
            ToastAndroid.show('Please Enter Your PhoneNumber', ToastAndroid.SHORT);
            return

        }
        else if (description === '') {
            ToastAndroid.show('Please Enter Your Description', ToastAndroid.SHORT);
            return

        }
        let user = await AsyncStorage.getItem('User');
        console.log(user, 'xxx')
        let serviceDetail = { chosenDate, serviceRequired, houseNo, address, pNumber, description, timeSlot, user }
        // console.log(serviceDetail)
        this.props.serviceComponent(serviceDetail);
        ToastAndroid.show('Thank You', ToastAndroid.SHORT);
        this.props.navigation.navigate('dashBoard')
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
                            flex: 0.2,
                            justifyContent: "center",
                            alignItems: "center"
                        }}
                    >
                        <Image
                            source={require("../../../assets/logoB.png")}
                            style={{
                                width: width / 2,
                                height,
                                marginTop: 20,
                                resizeMode: "contain"
                                // color:'rgba(208, 164, 135, 1)'
                            }}
                        />
                    </View>
                    <View style={{ flex: 0.8, justifyContent: "space-around" }}>
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
                            <MaterialCommunityIcons name="home" size={25} color="#24516e" />
                            <Input
                                placeholderTextColor={"#24516e"}
                                placeholder={"House No"}
                                placeholder="House No"
                                style={{ color: "#24516e" }}
                                onChangeText={houseNo => this.setState({ houseNo })}
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
                                height: width / 18
                            }}
                        >
                            <MaterialCommunityIcons name="map-marker" size={25} color="#24516e" />
                            <Input
                                placeholderTextColor={"#24516e"}
                                placeholder={"Address"}
                                placeholder="Address"
                                style={{ color: "#24516e" }}
                                onChangeText={address => this.setState({ address })}
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
                                height: width / 18
                            }}
                        >
                            <MaterialCommunityIcons name="face-agent" size={25} color="#24516e" />

                            <Item picker style={{ borderColor: "transparent" }}>
                                <Picker
                                    mode="dropdown"
                                    iosIcon={<Icon name="md-arrow-down" />}
                                    style={{ width: width / 2 }}
                                    selectedValue={
                                        this.state.serviceRequired}
                                    onValueChange={
                                        event => this.setState({ serviceRequired: event })
                                    }
                                >
                                    <Picker.Item label="Please Select" value="" />
                                    <Picker.Item label="Plumber" value="Plumber" />
                                    <Picker.Item label="Electrician" value="Electrician" />
                                    <Picker.Item label="House Cleaner" value="House Cleaner" />
                                    <Picker.Item label="Carpenter" value="Carpenter" />
                                </Picker>
                            </Item>
                        </View>
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
                            <MaterialCommunityIcons name="clock-outline" size={25} color="#24516e" />

                            <Item picker style={{ borderColor: "transparent" }}>
                                <Picker
                                    mode="dropdown"
                                    iosIcon={<Icon name="md-arrow-down" />}
                                    style={{ width: width / 2 }}
                                    selectedValue={
                                        this.state.timeSlot}
                                    onValueChange={
                                        event => this.setState({ timeSlot: event })
                                        // this.onInputChange(event, "country")
                                    }
                                >
                                    <Picker.Item label="Please Select Time" value="" />
                                    <Picker.Item label="10:00 am to 12:00 pm" value="10:00 am to 12:00 pm" />
                                    <Picker.Item label="12:30 pm to 2:30 pm" value="12:30 pm to 2:30 pm" />
                                    <Picker.Item label="3:00 pm to 5:00 pm" value="3:00 pm to 5:00 pm" />
                                    <Picker.Item label="5:30 pm to 7:30 pm" value="5:30 pm to 7:30 pm" />
                                    <Picker.Item label="8:00 pm to 10:00 pm" value="8:00 pm to 10:00 pm" />

                                </Picker>
                            </Item>
                        </View>
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
                            <MaterialCommunityIcons name="calendar-range" size={25} color="#24516e" />
                            <DatePicker

                                locale={"en"}
                                timeZoneOffsetInMinutes={undefined}
                                modalTransparent={false}
                                animationType={"fade"}
                                androidMode={"default"}
                                placeHolderText="Select date"
                                textStyle={{ color: "#24516e" }}
                                placeHolderTextStyle={{ color: "#24516e" }}
                                onDateChange={(newDate) => this.setState({ chosenDate: newDate })}
                                disabled={false}
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
                            <Entypo name={"phone"} size={25} color="#24516e" />
                            <Input
                                placeholderTextColor={"#24516e"}
                                placeholder={"Phone Number"}
                                placeholder="Phone Number"
                                style={{ color: "#24516e" }}
                                onChangeText={pNumber => this.setState({ pNumber })}
                            />
                        </View>

                        <Textarea rowSpan={5} value={this.state.description} onChangeText={description => this.setState({ description })} bordered placeholder="Your Message" style={{ margin: width / 36, color: "#24516e", width: '95%', backgroundColor: "#fff" }} />
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
                                onPress={this.submit}
                            >
                                <Text style={{ color: "#fff" }}>Submit</Text>
                            </Button>
                        </View>



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
        serviceComponent: data => {
            dispatch(serviceAction(data))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Services)