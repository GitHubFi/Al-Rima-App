import React, { Component } from "react";
import { View, Image, Text, Dimensions,ScrollView } from "react-native";
const { width, height } = Dimensions.get("window");
import { DeckSwiper, Card, CardItem, Button } from "native-base";
import List from '../../Components/listOfImage'
const selectValue = {
  url: [
    {
      image:
        "https://tfc-sharetribe-files-prod.s3.amazonaws.com/images/listing_images/images/3019/original/dsc_0402.jpg"
    },
    {
      image:
        "http://www.maxviewrealty.com/img/2017-02-28/times-square-shanghai-apartment-rental-707*471-12403.jpg"
    },
    {
      image:
        "http://www.besteventrentals.net/images/stories/virtuemart/product/5-square-table-rental.jpg"
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJrKcAFxo2PAsnrxE_nt9Bc-47andj6pbxociiId5lQIoVt5TD"
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFHfk67op0P-ACeScc4j1UsiEBOzSJca1ACGPb67BoSqz7zDH4"
    },
    { image: "http://midtwn.com/wp-content/uploads/2014/05/photo-1.jpg" }
  ]
};
export default class About extends Component {
  static navigationOptions = {
    title: "ABOUT US",
    headerStyle: {
      backgroundColor: "#8b6e4b"
    },
    headerTintColor: "#fff",
    headerTitleStyle: {
      alignSelf: "center",
      textAlign: "center",
      flex: 1,
      marginLeft: -20
    }
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
      <View style={{ flex: 1, backgroundColor: "#eeeeee" }}>
        <View
          style={{
            flex: 0.2,
            justifyContent: "center",
            alignItems: "center",
            // width:width/2
          }}
        >
          <Image
            source={require("../../../assets/logoB.png")}
            style={{
              width: width / 2,
              height: width / 2,
              // marginTop: 20,
              // marginBottom: 20,
              resizeMode: "contain"
            }}
          />

          {/* <Thumbnail large source={{ uri: this.props.user.image_url }} /> */}
        </View>
        <View style={{ flex: 0.3 }}>
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
                    source={ item.image }
                    style={{ width: width, height: height / 4 }}
                  />
                </CardItem>
              </Card>
            )}
          />
        </View>
        <View style={{ flex: 0.2, justifyContent: 'center', alignItems: 'center' }}>
          <Text style={{ color: '#f09291', textAlign: 'center' }}>
            "ALWAYS DELIVER {"\n"}
            MORE THAN EXPECTED"
</Text>
          <Text style={{ color: "#28678d" }}>
            --------------------------
          </Text>
        </View>
        <View
          style={{
            flex: 0.2,
            // padding: width / 20
          }}
        >
          <Text style={{ textAlign: "center", color: "#000", paddingLeft: width / 36, paddingRight: width / 36 }}>
            International business and pleasure, or your own personal staycation, Rima Residence has everything residents could ever need.
  An ideal place for families, the development available within the community offer comfy facilities.
  In addition to being within easy reach of Al Khobar city centre and the main roadway to Dammam Airport.
  With recreational facilities, a health club and a Daycare centre, enjoy comfort any day of the week.
          </Text>
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
              marginTop: width / 36
            }}
            onPress={this.signUp}
          >
            <Text style={{ color: "#fff", }}>DOWNLOAD OUR PROFILE</Text>
          </Button>
        </View>

      </View>
      </ScrollView>
    );
  }
}
