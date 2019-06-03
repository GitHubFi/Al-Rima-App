import React, {Component} from 'react'
import {
    StyleSheet,
    View,
    FlatList,
    Image,
    Dimensions,
    TouchableOpacity
} from 'react-native'
import {
    Text,
    Item,
    Input, ListItem,
    Card,
    CardItem,
    Button, Icon, Left,
    Body,
    Right

} from 'native-base'

const {width, height} = Dimensions.get("window");

class Office extends Component {
    constructor(props) {
        super(props)
        this.state = {
            selectValue: [
                {
                    url: 'https://media.zameen.com/thumbnails/46459116-800x600.webp', price: ' 2 lacs',
                    location: 'DHA Defence, Karachi, Sindh', purpose: 'For Rent', area: '8.9 Marla',
                    bath: '-', bedroom: '-', added: '18 hours ago'
                },
                {
                    url: 'https://media.zameen.com/thumbnails/46459116-800x600.webp', price: ' 2 lacs',
                    location: 'DHA Defence, Karachi, Sindh', purpose: 'For Rent', area: '8.9 Marla',
                    bath: '-', bedroom: '-', added: '18 hours ago'
                },
                {
                    url: 'https://media.zameen.com/thumbnails/46459116-800x600.webp', price: ' 2 lacs',
                    location: 'DHA Defence, Karachi, Sindh', purpose: 'For Rent', area: '8.9 Marla',
                    bath: '-', bedroom: '-', added: '18 hours ago'
                },
                {
                    url: 'https://media.zameen.com/thumbnails/46459116-800x600.webp', price: ' 2 lacs',
                    location: 'DHA Defence, Karachi, Sindh', purpose: 'For Rent', area: '8.9 Marla',
                    bath: '-', bedroom: '-', added: '18 hours ago'
                },
                {
                    url: 'https://media.zameen.com/thumbnails/46459116-800x600.webp', price: ' 2 lacs',
                    location: 'DHA Defence, Karachi, Sindh', purpose: 'For Rent', area: '8.9 Marla',
                    bath: '-', bedroom: '-', added: '18 hours ago'
                },
                {
                    url: 'https://media.zameen.com/thumbnails/46459116-800x600.webp', price: ' 2 lacs',
                    location: 'DHA Defence, Karachi, Sindh', purpose: 'For Rent', area: '8.9 Marla',
                    bath: '-', bedroom: '-', added: '18 hours ago'
                },
                {
                    url: 'https://media.zameen.com/thumbnails/46459116-800x600.webp', price: ' 2 lacs',
                    location: 'DHA Defence, Karachi, Sindh', purpose: 'For Rent', area: '8.9 Marla',
                    bath: '-', bedroom: '-', added: '18 hours ago'
                },
                {
                    url: 'https://media.zameen.com/thumbnails/46459116-800x600.webp', price: ' 2 lacs',
                    location: 'DHA Defence, Karachi, Sindh', purpose: 'For Rent', area: '8.9 Marla',
                    bath: '-', bedroom: '-', added: '18 hours ago',
                    description: 'Defence Phase VI 920 Square Feet office For Rent very prime location fully tiled flooring one hall one bathrooms for more details contact us. . . . . . . . . . . . . . . .'
                },

            ]
        }
        this.changeState = this.changeState.bind(this)
    }

    static navigationOptions = {
        title: 'OFFICE',
        headerStyle: {
            backgroundColor: "#fff",
        },
        headerTintColor: '#05527c',
        headerTitleStyle: {alignSelf: 'center', textAlign: "center", flex: 1, marginLeft: -10},


    }

    changeState = event => {
        console.log(event)
        this.setState({
            selectValue: this.state.selectValue.filter(
                item => item.cityName.toLowerCase().indexOf(event.toLowerCase()) > -1
            )
        })

    }

    render() {
        return (
            <View style={{flex: 1, backgroundColor: '#eeeeee'}}>
                <Item style={{marginLeft: 10, marginRight: 10}}>
                    <Icon active name='search' style={{color: '#05527c'}}/>
                    <Input
                        placeholder='Search'
                        onChangeText={event => this.changeState(event)}
                    />
                </Item>
                <FlatList
                    data={this.state.selectValue}

                    renderItem={({item}) => (
                        <TouchableOpacity style={{
                            flex: 1,
                            flexDirection: 'row',
                            marginTop: width / 26,
                            marginBottom: width / 26,
                        }}
                                          onPress={() => this.props.navigation.navigate('detail')}>
                            <View style={{flex: 0.4}}>
                                <Image source={{uri: item.url}} style={{width: width, height: height / 4}}
                                />

                            </View>
                            <View style={{
                                flex: 0.6,
                                backgroundColor: '#fff',
                                paddingLeft: width / 28,
                                paddingTop: width / 28
                            }}>

                                <Text style={{fontWeight: 'bold', fontSize: width / 20}}> PKR {item.price}</Text>
                                <Text style={{fontSize: width / 24}}>{item.location}</Text>
                                <Text style={{fontSize: width / 24}}>{item.area}</Text>

                                <Text style={{color: 'gray', fontSize: width / 26}}> Added {item.added}</Text>
                                <Button primary style={{marginBottom: width / 28}}><Text>Call</Text>
                                </Button>
                            </View>
                        </TouchableOpacity>

                    )}
                    keyExtractor={(item, index) => index.toString()}
                />
            </View>
        )
    }
}


export default Office;