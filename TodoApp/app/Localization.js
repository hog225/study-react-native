import React, { Component } from 'react';
import {
    View,
    Text, 
    StyleSheet
} from 'react-native';
import * as RNLocalize from "react-native-localize"


export default class Localization extends Component {
    componentDidMount(){
        console.log(RNLocalize.getLocales()[0].languageTag)
        console.log(RNLocalize.getCountry())
        console.log(RNLocalize.getCurrencies());
        console.log(RNLocalize.getTimeZone());

    }

    render() {
        return (
            <View style = {styles.container}>
                <Text>hello world</Text>
                <Text>{RNLocalize.getLocales().toString}</Text>
                <Text>{RNLocalize.getCurrencies().toString}</Text>
            </View>
        )
        

    }

}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent:'center',
      alignItems: 'center'
    }
})
  