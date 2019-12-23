import React, {Component} from 'react'
import { 
    View, 
    Text, 
    StyleSheet, 
    Animated, 
    Button, 
    TextInput, 
    TouchableOpacity,
    Easing
} from 'react-native'

const initMarginTop = 20

export default class Animation extends Component {
    marginTop = new Animated.Value(initMarginTop);
    animatedWidth = new Animated.Value(200)
    animatedRotation = new Animated.Value(0)

    state = {
        toVal: initMarginTop,
        loading: true
    }

    componentDidMount(){
        this.loadingAnimate();
        setTimeout(()=>this.setState({ loading: false}), 2000)
    }

    loadingAnimate = () => {
        Animated.loop(
            Animated.timing(
                this.animatedRotation,
                {
                    toValue: 1,
                    duration: 1800,
                    easing: Easing.linear
                }
            )
        ).start()
    }

    marginTopAnimate = () => {
        let {toVal} = this.state
        this.setState({toVal: toVal + 10})
        console.log(this.state.toVal)
        Animated.timing(
            this.marginTop,
            {
                toValue: this.state.toVal,
                duration: 500,
            }
        ).start();
    }
    inputBoxAnimate = (value) => {
        Animated.timing(
            this.animatedWidth,
            {
                toValue: value,
                duration: 750
            }
        ).start()
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.topView}>
                    <Button
                        title='Animate Box'
                        onPress = {this.marginTopAnimate}
                    />
                    <Button
                        title='Submit'
                        onPress={() => this.input.blur()}
                    />
                </View>
                <View style = {styles.bottomView}>
                    <View style = {styles.bottomLeftView}>
                        <Animated.View
                            style={[styles.box, {marginTop: this.marginTop}]} />
                    </View>
                    <View style = {styles.bottomRightView}>
                        <Animated.View style={{width: this.animatedWidth}}>
                            <TextInput
                                style={[styles.input]}
                                onBlur={() => this.inputBoxAnimate(200)}
                                onFocus={() => this.inputBoxAnimate(325)}
                                ref={input => this.input = input}
                            />
                        </Animated.View>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
    },
    topView: {
        marginBottom: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        //backgroundColor: 'yellow'
    },
    bottomView: {
        
        flexDirection: 'row'
    },
    bottomLeftView: {
        marginRight: 10,
        //backgroundColor: 'blue',
    },
    bottomRightView:{
        //backgroundColor: 'green'
    },
    under1View:{

    },
    box: {
        width: 100,
        height: 150,
        backgroundColor: 'red'
    },
    input: {
        height: 50,
        marginHorizontal: 15,
        backgroundColor: '#ededed',
        marginTop: 20
    }

});