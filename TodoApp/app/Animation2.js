import React, { Component } from 'react';
import {
  SafeAreaView,
  SectionList,
  StyleSheet,
  TouchableWithoutFeedback,
  Image,
  View,
  Text
} from 'react-native';
import * as Animatable from 'react-native-animatable';

export default class Animation2 extends Component {


    makeImageList(animationType) {
        let images = []        
        for(let i=0; i< 7; i++){
            images.push(
                <Animatable.Image
                    style={{width: 50, height: 50}}
                    source={require('./poe.png')}
                    animation={animationType}
                    duration={1000}
                    delay={i*50}
                />
            )
        }
        return images
    }

    render() {

        
        return(
            <View>
                <SafeAreaView style={styles.container}>
                    {this.makeImageList("zoomInLeft")}
                </SafeAreaView>
                {/* <SafeAreaView style={styles.container}>
                    {this.makeImageList("fadeInUpBig")}
                </SafeAreaView> */}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection:'row',
        backgroundColor: '#f5f5f5',
        justifyContent: 'center',
        marginTop: 50


    },
    content: {
        flex: 1,
        paddingTop: 20
    }
})
