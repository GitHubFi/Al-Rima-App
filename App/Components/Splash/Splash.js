import React, { Component } from 'react'
import {
    Platform,
    StyleSheet,
    View,
    TextInput,
    Button,
    Dimensions,
    StatusBar,
    Image,
    PixelRatio,
    YellowBox,
    AsyncStorage,
    Alert
} from 'react-native'
import firebase from 'react-native-firebase'
import { NavigationActions, StackActions } from 'react-navigation'
const { width, height, scale, fontScale } = Dimensions.get("window");

export default class SplashScreen extends Component {
    constructor(props) {
        super(props)

    }

    static navigationOptions = {
        header: null
    }

  componentDidMount(){
    setTimeout(() => {
        this.switchUser();
    }, 2000)

  }
    switchUser = async () => {
        let user = await AsyncStorage.getItem('User');
        console.log(user)
        console.log(user)
        if (user !== null) {
            this.reset('dashBoard')
        } else {
            this.reset('signIn')
        }

    }


    reset = route => {
        return this.props.navigation.dispatch(
            StackActions.reset({
                index: 0,
                actions: [NavigationActions.navigate({ routeName: `${route}` })]
            })
        )
    }

    render() {
        return (
            <View style={[styles.container]}>
                <StatusBar hidden />

                <Image
                    style={{ width: "60%", height: "100%", resizeMode: "contain" }}
                    source={require('../../../assets/logoB.png')} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems:'center',
        justifyContent:'center'
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5
    },
    img: {
        width: '100%',
        height: '100%'
    }
})
