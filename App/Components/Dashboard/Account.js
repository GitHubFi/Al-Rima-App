import React, { Component } from 'react';
import { View, ScrollView, Dimensions, Text ,Image} from 'react-native';
const { width, height } = Dimensions.get("window");
import { Card, CardItem, Body, Icon } from 'native-base';
import EStyleSheet from 'react-native-extended-stylesheet';

// const styles = EStyleSheet.create({
//     column: {
//         width: '80%'
//     },
//     text: {
//         color: '$textColor',
//         fontSize: '1.5rem'
//     },
//     '@media (min-width : 250) and (max-width:400)': {
//         text: {
//             fontSize: '2rem',
//             // backgroundColor:'#000'
//         }
//     }
// })
export default class Account extends Component {
    static navigationOptions = {
        title: 'Account Details',
        headerStyle: {
            backgroundColor: "#8b6e4b",
        },
        headerTintColor: '#fff',
        headerTitleStyle: { alignSelf: 'center', textAlign: "center", flex: 1, marginLeft: -10 },


    }
    render() {
        console.log(width)
        return (

            <ScrollView
                contentContainerStyle={{
                    height: height,
                    width,
                    backgroundColor: "#eee"
                }}
                keyboardDismissMode="interactive"
                keyboardShouldPersistTaps="handled"
            >
                <View style={{ flex: 1, backgroundColor: "#eee" }}>

                    <Card style={{ flex: 0.4, }}>

                        <CardItem header bordered style={{ flex: 0.1, backgroundColor: '#282828' }}>
                            <Icon active name="paper" style={{ color: '#fff' }} />
                            <Text style={{ textAlign: 'center', fontSize: width / 20, color: '#fff' }}>
                                My Installment Plan
            </Text>
                        </CardItem>
                        <CardItem bordered style={{ flex: 0.7, padding: width / 36 }}>
                            <Body>
                                <Text style={{ fontSize: width / 24 }}>
                                    Customer ID: xxxxxxxx
            </Text>
                                <Text style={{ fontSize: width / 24 }}>
                                    Installment No: xxxxxxxxxxx
            </Text>
                                <Text style={{ fontSize: width / 24 }}>
                                    Installment Paid: 50000rs
            </Text>
                                <Text style={{ fontSize: width / 24 }}>
                                    Installment Due: 1000000 rs
            </Text>
                                <Text style={{ fontSize: width / 24 }}>
                                    Installemnt Due Date: 12/3/2019
            </Text>
                                <Text style={{ fontSize: width / 24 }}>
                                    Intallment Amount: 10000 rs
            </Text>
                            </Body>
                        </CardItem>
                        <CardItem style={{ flex: 0.2, backgroundColor: '#d6d6d6' }} button onPress={() => this.props.navigation.navigate('payment')}>
                            <Image
                                source={require("../../../assets/riyal.png")}
                                style={{
                                    width: width / 12,
                                    height,
                                    // marginTop: 20,
                                    resizeMode: "contain"
                                    // color:'rgba(208, 164, 135, 1)'
                                }}
                            />
                            {/* <Icon active name="cash" style={{ color: '#282828' }} /> */}
                            <Text style={{ color: '#282828',marginLeft:5 }}>
                                Pay now
</Text>
                        </CardItem>

                    </Card>
                    <Card style={{ flex: 0.6, }}>

                        <CardItem header bordered style={{ flex: 0.1, backgroundColor: '#282828' }}>
                            <Icon active name="cash" style={{ color: '#fff' }} />
                            <Text style={{ textAlign: 'center', fontSize: width / 20, color: '#fff' }}>
                                Previous ledger
            </Text>
                        </CardItem>
                        <CardItem bordered style={{ flex: 0.9, padding: width / 36 }}>
                            <Body>
                                <View style={{ flexDirection: 'row' }}>
                                    <View style={{ flex: 0.3, borderWidth: 1 }}>
                                        <Text>Customer ID</Text>
                                    </View>
                                    <View style={{ flex: 0.3, borderWidth: 1 }}>
                                        <Text>Amount Paid</Text>
                                    </View>
                                    <View style={{ flex: 0.3, borderWidth: 1 }}>
                                        <Text>Date</Text>
                                    </View>

                                </View>
                                <View style={{ flexDirection: 'row' }}>
                                    <View style={{ flex: 0.3 }}>
                                        <Text>200X</Text>
                                    </View>
                                    <View style={{ flex: 0.3, }}>
                                        <Text>50000</Text>
                                    </View>
                                    <View style={{ flex: 0.3 }}>
                                        <Text>12/2/2019</Text>
                                    </View>

                                </View>
                                <View style={{ flexDirection: 'row' }}>
                                    <View style={{ flex: 0.3 }}>
                                        <Text>200X</Text>
                                    </View>
                                    <View style={{ flex: 0.3, }}>
                                        <Text>50000</Text>
                                    </View>
                                    <View style={{ flex: 0.3 }}>
                                        <Text>12/2/2019</Text>
                                    </View>

                                </View>
                                <View style={{ flexDirection: 'row' }}>
                                    <View style={{ flex: 0.3 }}>
                                        <Text>200X</Text>
                                    </View>
                                    <View style={{ flex: 0.3, }}>
                                        <Text>50000</Text>
                                    </View>
                                    <View style={{ flex: 0.3 }}>
                                        <Text>12/2/2019</Text>
                                    </View>

                                </View>
                                <View style={{ flexDirection: 'row' }}>
                                    <View style={{ flex: 0.3 }}>
                                        <Text>200X</Text>
                                    </View>
                                    <View style={{ flex: 0.3, }}>
                                        <Text>50000</Text>
                                    </View>
                                    <View style={{ flex: 0.3 }}>
                                        <Text>12/2/2019</Text>
                                    </View>

                                </View>

                                <View style={{ flexDirection: 'row' }}>
                                    <View style={{ flex: 0.3 }}>
                                        <Text>200X</Text>
                                    </View>
                                    <View style={{ flex: 0.3, }}>
                                        <Text>50000</Text>
                                    </View>
                                    <View style={{ flex: 0.3 }}>
                                        <Text>12/2/2019</Text>
                                    </View>

                                </View>
                                <View style={{ flexDirection: 'row' }}>
                                    <View style={{ flex: 0.3 }}>
                                        <Text>200X</Text>
                                    </View>
                                    <View style={{ flex: 0.3, }}>
                                        <Text>50000</Text>
                                    </View>
                                    <View style={{ flex: 0.3 }}>
                                        <Text>12/2/2019</Text>
                                    </View>

                                </View>
                            </Body>
                        </CardItem>

                    </Card>


                </View>
            </ScrollView>

        )
    }
}