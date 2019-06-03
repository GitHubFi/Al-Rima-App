// import React, { Component } from 'react';
// import { Text, StyleSheet, View } from 'react-native';

// export default class OneBedRoom extends Component {
//     render() {
//         return (
//             <View>
//                 <Text>OneBedRoom</Text>
//             </View>
//         );
//     }
// }

// const styles = StyleSheet.flatten({});

import React, { Component } from "react";
import { Dimensions, ScrollView, Image, Text, View, Modal, TouchableOpacity } from "react-native";
import { Card, CardItem, DeckSwiper, Left, Right, Button } from "native-base";

import List from '../../listOfImage'

// all one bed images and data
const result = [
  {
    url: 'http://www.in-prague.org/images/otavlesicku/apartments-vlesicku-prague-561138_w815h470a1c1bgcfff.jpg', price: ' 2 lacs',
    location: 'Condo Hotel  City Suites', purpose: 'For Rent', area: '8.9 Marla',
    bath: '-', bedroom: '-', added: '18 hours ago', filterValue: 'newest', name: 'Le Meridien Al Khobar',


  },
  {
    url: 'https://www.youstylish.com/wp-content/uploads/2014/03/Luxury-1-bedroom-Barcelona-933x700.jpg', price: ' 2 lacs',
    location: 'Kempinski Al Othman Hotel Al Khobar', purpose: 'For Rent', area: '8.9 Marla',
    bath: '-', bedroom: '-', added: '18 hours ago', filterValue: 'newest', name: 'Le Meridien Al Khobar1'

  },
  {
    url: 'https://www.youstylish.com/wp-content/uploads/2014/03/Luxury-1-bedroom-Barcelona-933x700.jpg', price: ' 2 lacs',
    location: 'Kempinski Al Othman Hotel Al Khobar', purpose: 'For Rent', area: '8.9 Marla',
    bath: '-', bedroom: '-', added: '18 hours ago', filterValue: 'topRated', name: 'Le Meridien Al Khobar'
  },
  {
    url: 'https://media-cdn.tripadvisor.com/media/photo-s/0b/b4/ac/06/1-bedroom-apartment-clean.jpg', price: ' 2 lacs',
    location: 'Aloft Dhahran Hotel', purpose: 'For Rent', area: '8.9 Marla',
    bath: '-', bedroom: '-', added: '18 hours ago', filterValue: 'topRated', name: 'Le Meridien Al Khobar'
  },
  {
    url: "https://media-cdn.tripadvisor.com/media/photo-s/0b/a9/f5/d1/photo2jpg.jpg",
    location: 'Ramada Encore Al Khobar Olaya', purpose: 'For Rent', area: '8.9 Marla',
    bath: '-', bedroom: '-', added: '18 hours ago', filterValue: 'premium', name: 'Le Meridien Al Khobar'
  },
]
const { height, width } = Dimensions.get("window");
export default class OneBedRoom extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisble: false,
      selectValue: {
        url: [
          // {
          //   image: "http://cdn.home-designing.com/wp-content/uploads/2014/06/2-bedroom-house-plan.jpg"
          // },
          // {
          //   image: "http://www.maxviewrealty.com/img/2017-02-28/times-square-shanghai-apartment-rental-707*471-12403.jpg"
          // },
          // {
          //   image: "http://www.besteventrentals.net/images/stories/virtuemart/product/5-square-table-rental.jpg"
          // },
          // {
          //   image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJrKcAFxo2PAsnrxE_nt9Bc-47andj6pbxociiId5lQIoVt5TD"
          // },
          // {
          //   image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFHfk67op0P-ACeScc4j1UsiEBOzSJca1ACGPb67BoSqz7zDH4"
          // },
          // { image: "http://midtwn.com/wp-content/uploads/2014/05/photo-1.jpg" }
        ],
        price: " 2 lACS",
        location: "P.O. Box 1266, Corniche Boule vard, 31952 Al Khobar, Saudi Arabia",
        purpose: "For Rent",
        area: "8.9 Marla",
        bath: "-",
        bedroom: "-",
        added: "18 hours ago",
        description:
          " International business and pleasure, or your own personal staycation, Rima Residence has everything residents could ever need.An ideal place for families, the development available within the community offer comfy facilities.In addition to being within easy reach of Al Khobar city centre and the main roadway to Dammam Airport With recreational facilities, a health club and a Daycare centre, enjoy comfort any day of the week."
      }
    };
  }

  static navigationOptions = {
    headerTitle: (

      <Image
        source={require("../../../../assets/logoB.png")}
        resizeMode="contain"
        style={{ width: width / 2, marginLeft: 8, marginRight: -6, height: height / 16 }}
      />
    ),
    headerStyle: {
      backgroundColor: "#8b6e4bc2"
    },
    headerTintColor: "#fff",
    headerTitleStyle: {
      alignSelf: "center",
      textAlign: "center",
      flex: 1,
      marginLeft: -10
    }
  };

  render() {
    console.log(this.state.modalVisble)
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

        <View style={{ flex: 1 }}>
          <View style={{ flex: 0.3 }}>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
                padding: 5
              }}
            >

              <View
                style={{
                  width: width / 2,
                  alignItems: "flex-start",
                  paddingLeft: width / 36
                }}
              >
                <Text style={{ color: "#000", fontSize: width / 32 }}>
                  {this.state.selectValue.location}
                </Text>
              </View>
              <View
                style={{
                  width: width / 2,
                  alignItems: "flex-end",
                  paddingRight: width / 36
                }}
              >
                <Text style={{ color: "#000", fontSize: width / 32 }}>
                  Added {this.state.selectValue.added}
                </Text>
              </View>
            </View>
            <DeckSwiper
              dataSource={List}
              // style={{}}
              renderItem={item => (
                <Card
                  style={{
                    elevation: 3,
                    height: height / 4,
                    backgroundColor: "orange"
                  }}
                >
                  <CardItem cardBody>
                    <Image
                      source={item.image}
                      style={{ width: width, height: height / 4 }}
                    />
                  </CardItem>
                </Card>
              )}
            />
          </View>
          <View style={{ flex: 0.6 }}>
            <View
              style={{
                flex: 0.1,
                flexDirection: "row",
                justifyContent: "center",
                // marginTop: width / 16,
                backgroundColor: "#05527c",
                paddingTop: width / 36,
                paddingBottom: width / 26
              }}
            >
              <View
                style={{
                  width: width / 2,
                  alignItems: "flex-start",
                  paddingLeft: width / 36
                }}
              >
                <Text
                  style={{
                    color: "#fff",
                    fontSize: width / 22,
                    fontWeight: "bold"
                  }}
                >
                  RIMA RESIDENCE
                </Text>
              </View>
              <View
                style={{
                  width: width / 2,
                  flexDirection: "row",
                  justifyContent: "flex-end",
                  paddingRight: width / 36
                }}
              >
                <Text
                  style={{
                    color: "#fff",
                    fontSize: width / 26,
                    height: height / 20
                  }}
                >
                  SAR
                </Text>
                <Text
                  style={{
                    color: "#fff",
                    fontSize: width / 22,
                    height: height / 20
                  }}
                >
                  {this.state.selectValue.price}
                </Text>
              </View>
            </View>
            
            <View
              style={{
                flexDirection: "row",
                flex: 0.3,
                marginBottom: width / 36
              }}
            >
              <View style={{ flex: 0.5, justifyContent: "space-between" }}>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                    marginTop: width / 20,
                    borderColor: "#fff",
                    borderBottomWidth: 0.3,
                    borderRightWidth: 0.3,
                    borderTopWidth: 0.3,
                    paddingTop: width / 20,
                    paddingBottom: width / 20
                  }}
                >
                  <Image
                    source={require("../../../../assets/bed.png")}
                    resizeMode="contain"
                    style={{ width: width / 8, height: height / 16 }}
                  />
                  <View
                    style={{ marginLeft: width / 36, alignItems: "flex-end" }}
                  >
                    <Text style={{ color: "#000" }}>Bed</Text>
                    <Text style={{ color: "#eaa8a9" }}>01</Text>
                  </View>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                    borderColor: "#fff",
                    borderBottomWidth: 0.3,
                    paddingTop: width / 20,
                    borderRightWidth: 0.3,
                    paddingBottom: width / 20
                  }}
                >
                  <Image
                    source={require("../../../../assets/parking.png")}
                    resizeMode="contain"
                    style={{ width: width / 8, height: height / 16 }}
                  />
                  <View
                    style={{ marginLeft: width / 36, alignItems: "flex-end" }}
                  >
                    <Text style={{ color: "#000" }}>Parking</Text>
                    <Text style={{ color: "#eaa8a9" }}>01</Text>
                  </View>
                </View>
              </View>
              <View style={{ flex: 0.5, justifyContent: "space-between" }}>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                    marginTop: width / 20,
                    borderColor: "#fff",
                    borderBottomWidth: 0.3,
                    borderTopWidth: 0.3,
                    paddingTop: width / 20,
                    paddingBottom: width / 20
                  }}
                >
                  <Image
                    source={require("../../../../assets/bathtub.png")}
                    resizeMode="contain"
                    style={{ width: width / 8, height: height / 16 }}
                  />
                  <View
                    style={{ marginLeft: width / 36, alignItems: "flex-end" }}
                  >
                    <Text style={{ color: "#000" }}>Bath</Text>
                    <Text style={{ color: "#eaa8a9" }}>01</Text>
                  </View>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                    borderColor: "#fff",
                    borderBottomWidth: 0.3,
                    paddingTop: width / 20,
                    paddingBottom: width / 20
                  }}
                >
                  <Image
                    source={require("../../../../assets/dimensions.png")}
                    resizeMode="contain"
                    style={{ width: width / 10, height: height / 16 }}
                  />
                  <View
                    style={{ marginLeft: width / 36, alignItems: "flex-end" }}
                  >
                    <Text style={{ color: "#000" }}>Sqft</Text>
                    <Text style={{ color: "#eaa8a9" }}>2,890</Text>
                  </View>
                </View>
              </View>
            </View>
            <View style={{ flex: 0.2, marginTop: width / 8, padding: 20 }}>
              <Text
                style={{
                  fontSize: width / 20,
                  fontWeight: "bold",
                  color: "#d1a588",
                  padding: 5,
                  marginTop: width / 10
                }}
              >
                About Project
              </Text>
              <Text style={{ color: "#000", fontSize: width / 36 }}>
                International business and pleasure, or your own personal staycation, Rima Residence has everything residents could ever need.An ideal place for families, the development available within the community offer comfy facilities.In addition to being within easy reach of Al Khobar city centre and the main roadway to Dammam Airport With recreational facilities, a health club and a Daycare centre, enjoy comfort any day of the week.
              </Text>
              <Text
                style={{
                  fontSize: width / 32,
                  fontWeight: "bold",
                  color: "#000",
                  padding: 5
                }}
              >
                King Faisal Road King Faisal Road, Al Bandariyah, Al Khobar 34422 3380, Saudi Arabia
              </Text>
            </View>
            <View
              style={{
                flex: 0.3,
                marginTop: width / 4,
                paddingTop: width / 10
              }}
            >

              <View
                style={{
                  flexDirection: "row",
                  alignSelf: "center",
                  paddingTop: width / 20,
                }}
              >

                <Button
                  rounded
                  style={{
                    backgroundColor: "#05527c",
                    width: width / 4,
                    height: height / 20,
                    marginRight: width / 36,
                    // alignSelf:'center'
                    justifyContent: 'center',
                  }}
                  onPress={() => this.props.navigation.navigate('payment')}
                >
                  <Text style={{ color: '#fff', fontWeight: 'bold' }}>
                    Book now
                  </Text>
                </Button>

                {

                  result.map((item, id) => {
                    <Text key={id}>
                      {item.name}
                    </Text>
                  })
                }
                
              </View>
            </View>
          </View>
        </View>
        {/* <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
          }}
        >
          <View style={{ flex: 1 }}>
            <TouchableOpacity
              onPress={() => {
                this.setState({ modalVisble: !this.state.modalVisble})
              }}
              style={{ marginTop: width / 6 }}
            >
              <Text>Close</Text>
            </TouchableOpacity>
          </View>
        </Modal> */}
      </ScrollView>
    );
  }
}
