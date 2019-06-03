import React, { Component } from 'react'
import {
    View,
    FlatList,
    Image,
    Dimensions,
    TouchableOpacity
} from 'react-native'
import {
    Text,
    Button,
    DeckSwiper,
    Card, CardItem

} from 'native-base'
const result = [
    {
        url: 'http://www.in-prague.org/images/otavlesicku/apartments-vlesicku-prague-561138_w815h470a1c1bgcfff.jpg', price: ' 2 lacs',
        location: 'Condo Hotel  City Suites', purpose: 'For Rent', area: '8.9 Marla',
        bath: '-', bedroom: '-', added: '18 hours ago', filterValue: 'newest',name:'Le Meridien Al Khobar'
    },
    {
        url: 'https://s-ec.bstatic.com/images/hotel/max1024x768/745/74519478.jpg', price: ' 2 lacs',
        location: 'Kempinski Al Othman Hotel Al Khobar', purpose: 'For Rent', area: '8.9 Marla',
        bath: '-', bedroom: '-', added: '18 hours ago', filterValue: 'newest',name:'Le Meridien Al Khobar'
    },
    {
        url: 'https://t-ec.bstatic.com/images/hotel/max1024x768/178/178821314.jpg', price: ' 2 lacs',
        location: 'Aloft Dhahran Hotel', purpose: 'For Rent', area: '8.9 Marla',
        bath: '-', bedroom: '-', added: '18 hours ago', filterValue: 'newest',name:'Le Meridien Al Khobar'
    },
    {
        url: 'https://s-ec.bstatic.com/images/hotel/max1024x768/111/111434530.jpg', price: ' 2 lacs',
        location: 'Ramada Encore Al Khobar Olaya', purpose: 'For Rent', area: '8.9 Marla',
        bath: '-', bedroom: '-', added: '18 hours ago', filterValue: 'topRated',name:'Le Meridien Al Khobar'
    },
    {
        url: 'https://s-ec.bstatic.com/images/hotel/max1024x768/178/178775197.jpg', price: ' 2 lacs',
        location: ' P.O. Box 1266, Corniche Boulevard, 31952 Al Khobar, Saudi Arabia ', purpose: 'For Rent', area: '8.9 Marla',
        bath: '-', bedroom: '-', added: '18 hours ago', filterValue: 'premium',name:'Le Meridien Al Khobar'
    },
    {
        url: 'https://t-ec.bstatic.com/images/hotel/max1024x768/181/181982271.jpg', price: ' 2 lacs',
        location: ' Prince Musaed Bin Abdulaziz St. Cornich Al Khobar , 31952 Al Khobar, Saudi Arabia ', purpose: 'For Rent', area: '8.9 Marla',
        bath: '-', bedroom: '-', added: '18 hours ago', filterValue: 'topRated',name:'Warwick Al Khobar'
    },
    {
        url: 'https://t-ec.bstatic.com/images/hotel/max1024x768/102/102478997.jpg', price: ' 2 lacs',
        location: 'Al Olayya District , Al Olayya, 31952 Al Khobar, Saudi Arabia', purpose: 'For Rent', area: '8.9 Marla',
        bath: '-', bedroom: '-', added: '18 hours ago', filterValue: 'newest',name:'Blue Sands Palace'
    },
    {
        url: 'https://t-ec.bstatic.com/images/hotel/max1024x768/194/194614635.jpg', price: ' 2 lacs',
        location: 'Ruqaa Street, Al Hamra District, 34628 Al Khobar, Saudi Arabia', purpose: 'For Rent', area: '8.9 Marla',
        bath: '-', bedroom: '-', added: '18 hours ago',
        filterValue: 'topRated',
        name:'Lake Inn',
        description: 'Defence Phase VI 920 Square Feet office For Rent very prime location fully tiled flooring one hall one bathrooms for more details contact us. . . . . . . . . . . . . . . .'
    },
]
const { width, height } = Dimensions.get("window");

class Flat extends Component {
    constructor(props) {
        super(props)
        this.state = {
            valueSelect: 'newest',
            selectValue: result
        }
        this.changeState = this.changeState.bind(this)
    }

    static navigationOptions = {
        title: 'PROPERTY LIST',
        headerStyle: {
            backgroundColor: "#8b6e4b",
        },
        headerTintColor: '#fff',
        headerTitleStyle: { alignSelf: 'center', textAlign: "center", flex: 1, marginLeft: -10 },


    }

    changeState = event => {
        console.log(event)
        this.setState({
            selectValue: this.state.selectValue.filter(
                item => item.cityName.toLowerCase().indexOf(event.toLowerCase()) > -1
            )
        })

    }
    filterList = (filter) => {
        // console.log(filter)
        let filterList = result.filter((item) => item.filterValue === filter)
        this.setState({
            selectValue: filterList,
            valueSelect: filter
        })
    }
    render() {
        console.log(this.state.valueSelect, 'stattat')
        return (
            <View style={{ flex: 1, backgroundColor: '#eee' }}>
                <View style={{ flex: 0.1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                    <TouchableOpacity style={{ flex: 0.3, }} onPress={() => this.filterList('newest')}>
                        <Text style={{ textAlign: 'center', borderBottomWidth: 2, color: this.state.valueSelect === 'newest' ? '#05527c' : '#000', borderBottomColor: this.state.valueSelect === 'newest' ? '#05527c' : '#000' }}>Newest</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ flex: 0.3, margin: width / 46 }} onPress={() => this.filterList('topRated')}>
                        <Text style={{ textAlign: 'center', borderBottomWidth: 2, color: this.state.valueSelect === 'topRated' ? '#05527c' : '#000', borderBottomColor: this.state.valueSelect === 'topRated' ? '#05527c' : '#000' }}>Top Rated</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ flex: 0.3 }} onPress={() => this.filterList('premium')}>
                        <Text style={{ textAlign: 'center', borderBottomWidth: 2, color: this.state.valueSelect === 'premium' ? '#05527c' : '#000', borderBottomColor: this.state.valueSelect === 'premium' ? '#05527c' : '#000' }}>Premium</Text>
                    </TouchableOpacity>

                </View>
                <View style={{ flex: 0.9 }}>
                    <FlatList
                        data={this.state.selectValue}

                        renderItem={({ item }) => (
                            <View>

                                <TouchableOpacity style={{
                                    flex: 1,
                                    marginTop: width / 26,
                                    marginBottom: width / 26,
                                }}
                                    onPress={() => this.props.navigation.navigate('detail')}>
                                    <View style={{ flex: 0.4 }}>
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
                                                    {item.location}
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
                                                    Added {item.added}
                                                </Text>
                                            </View>
                                        </View>
                                        <Image source={{ uri: item.url }} style={{ width: width, height: height / 4 }}
                                        />

                                    </View>
                                    <View
                                        style={{
                                            // flex: 0.1,
                                            flexDirection: "row",
                                            justifyContent: "center",
                                            // marginTop: width / 16,
                                            backgroundColor: "#05527c",
                                            paddingTop: width / 36,
                                            paddingBottom: width / 40
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
                                              {/* RIMA RESIDENCE */}{item.name}
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
                                                    fontSize: width / 20,
                                                    height: height / 20
                                                }}
                                            >
                                                SAR {item.price}
                                            </Text>

                                        </View>
                                    </View>
                                </TouchableOpacity>
                            </View>

                        )}
                        keyExtractor={(item, index) => index.toString()}
                    />
                </View>
            </View>
        )
    }
}


export default Flat;