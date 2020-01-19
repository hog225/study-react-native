import React, {Component} from 'react'
import { 
    View, 
    Text, 
    StyleSheet, 
    Animated, 
    Button, 
    ScrollView,
    TextInput, 
    TouchableOpacity,
    TouchableHighlight,
    Easing
} from 'react-native'
import Toast, {DURATION} from 'react-native-easy-toast'


export default class ToastEx extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={{flex:1, justifyContent: 'center'}}>
                <TouchableHighlight
                    style={{padding: 10}}
                    onPress={()=>{
                        this.refs.toast.show('hello world!');
                    }}>
                    <Text>Press me</Text>
                </TouchableHighlight>
                </View>
                
                <Toast ref="toast"/>
            
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
        
    }
})