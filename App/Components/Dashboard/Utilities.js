import React, { Component } from 'react';
import { View, ScrollView, Dimensions, Text, Image } from 'react-native';
const { width, height } = Dimensions.get("window");
import { Card, CardItem, Body, Icon } from 'native-base';
import { connect } from "react-redux";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { BillAction } from '../../Store/Actions/AppAction';
class Utilities extends Component {
    static navigationOptions = {
        title: 'Utilities',
        headerStyle: {
            backgroundColor: "#8b6e4b",
        },
        headerTintColor: '#fff',
        headerTitleStyle: { alignSelf: 'center', textAlign: "center", flex: 1, marginLeft: -10 },


    }

    componentWillMount() {
        this.props.meraj();
    }
    render() {
        return (
            <ScrollView
                contentContainerStyle={{
                    // height: height,
                    width,
                    backgroundColor: "#eee"
                }}
                keyboardDismissMode="interactive"
                keyboardShouldPersistTaps="handled"
            >
                <View style={{ flex: 1, backgroundColor: "#eee" }}>

                    <Card style={{ flex: 0.3, }}>
                        {
                            this.props.Bill !== null ?
                                this.props.Bill.map((data, index) =>
                                (data.userId=== this.props.currentUser.uid)?
                                
                                    <View>
                                        <CardItem header key={index} bordered style={{ flex: 0.1, backgroundColor: '#282828' }}>
                                            <MaterialCommunityIcons name="flash" size={25} color="#fff" />
                                            <Text style={{ textAlign: 'center', fontSize: width / 20, color: "#fff" }}>
                                                {data.Notification1}

                                            </Text>
                                        </CardItem>
                                        <CardItem bordered style={{ flex: 0.8, padding: width / 36 }}>
                                            <Body>
                                                <Text style={{ fontSize: width / 24 }}>
                                                    {data.Notification2}

                                                </Text>

                                            </Body>
                                        </CardItem>
                                        <CardItem bordered style={{ flex: 0.8, padding: width / 36 }}>
                                            <Body>
                                                <Text style={{ fontSize: width / 24 }}>

                                                    {data.Notification3}

                                                </Text>

                                            </Body>
                                        </CardItem>
                                        <CardItem bordered style={{ flex: 0.8, padding: width / 36 }}>
                                            <Body>
                                                <Text style={{ fontSize: width / 24 }}>
                                                    Customer ID: {data.userId}
                                                </Text>

                                            </Body>
                                        </CardItem>
                                        <CardItem style={{ flex: 0.1, backgroundColor: '#d6d6d6' }} button onPress={() => this.props.navigation.navigate('UtilityPayment')}>
                                            <Image
                                                source={require("../../../assets/riyal.png")}
                                                style={{
                                                    width: width / 8,
                                                    // height,
                                                    height: height / 28,

                                                    // marginTop: 20,
                                                    resizeMode: "contain"
                                                    // color:'rgba(208, 164, 135, 1)'
                                                }}
                                            />
                                            {/* <Icon active name="cash" style={{ color: '#282828' }} /> */}
                                            <Text style={{ color: '#282828', marginLeft: 5 }}>
                                                Pay now
</Text>
                                        </CardItem>
                                    </View>
                                    :null
                                )

                                : null
                        }


                        {/* <View></View> */}

                    </Card>



                </View>
            </ScrollView>
        )
    }
}
function mapStateToProps(state) {
    // console.log(state.authReducer.UserList, "+++++++++++++++USERMERAJ++++++++++++++++")
    // console.log(state.authReducer.Notification, "+++++++++++++++CURRENT USER++++++++++++++++")
    return {
        // UserList: state.authReducer.UserList,
        // currentUser: state.authReducer.currentUser,
        // Notification: state.authReducer.Notification
        Bill: state.authReducer.Bill,
        currentUser: state.authReducer.currentUser
    }
}
function mapDispatchToProps(dispatch) {
    return {

        meraj: () => {
            dispatch(BillAction())

        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Utilities)