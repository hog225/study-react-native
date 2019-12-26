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

const initMarginTop = 20

export default class Animation extends Component {
    marginTop = new Animated.Value(initMarginTop);
    animatedWidth = new Animated.Value(200)
    animatedRotation = new Animated.Value(0)

    animatedTitle = new Animated.Value(-200)
    animatedSubTitle = new Animated.Value(600)
    animatedButton = new Animated.Value(800)

    state = {
        toVal: initMarginTop,
        loading: true
    }

    componentDidMount(){
        this.parallelAnaimate()
        this.loadingAnimate();
        setTimeout(()=>this.setState({ loading: false}), 2000)
    }

    parallelAnaimate = () => {
        Animated.parallel([
            Animated.timing(
                this.animatedTitle,
                {
                    toValue: 200,
                    duration: 800
                }
            ),
            Animated.timing(
                this.animatedSubTitle,
                {
                    toValue: 0,
                    duration: 1400,
                    delay: 800
                }
            ),
            Animated.timing(
                this.animatedButton,
                {
                    toValue: 0,
                    duration: 1000,
                    delay: 2200,
                }
            ),
        ]).start()
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
        const rotation = this.animatedRotation.interpolate({
            inputRange: [0, 1],
            outputRange: ['0deg', '360deg'],
        });
        const { loading } = this.state;
        return (
            <ScrollView style={styles.container}>
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
                <View style={styles.under1View}>
                    {
                        loading ? (
                            <Animated.Image
                                source={require('./poe.png')}
                                style={{width: 60, height: 60, transform: [{rotate: rotation}]}}
                            />
                        ) : (
                            <Text>Welcome...</Text>
                        )
                    }

                </View>
                <View style={styles.under2View}>
                    <Animated.Text style={[styles.title, {marginTop: this.animatedTitle}]}>Welcome</Animated.Text>
                    <Animated.Text style={[styles.subTitle, {marginTop: this.animatedSubTitle}]}>Thanks for visit</Animated.Text>
                    <Animated.View style={{marginTop: this.animatedButton}}>
                        <TouchableHighlight style={styles.button}>
                            <Text>Get Started !</Text>
                        </TouchableHighlight>
                    </Animated.View>

                </View>
            </ScrollView>
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
        borderWidth: 1,
        borderColor: '#bee6fd'
        //backgroundColor: 'yellow'
    },
    bottomView: {
        flex: 1,
        flexDirection: 'row'
    },
    bottomLeftView: {
        flex: 2,
        marginRight: 10,
        borderWidth: 1,
        borderColor: 'gray'
        //backgroundColor: 'blue',
    },
    bottomRightView:{
        flex: 3,
        borderWidth: 1,
        borderColor: 'pink'
        //backgroundColor: 'green'
    },
    under1View:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        marginTop: 10,
        borderWidth: 1,
        borderColor: 'black'
    },
    under2View:{
        flex: 1,
        marginTop: 10,
        borderWidth: 1,
        borderColor: '#cbb4c4'
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
    },
    title: {
        textAlign: 'center',
        fontSize: 20,
        marginBottom: 12,
    },
    subTitle: {
        width: '100%',
        textAlign: 'center',
        fontSize: 18,
        opacity: .8,
        
    },
    button: {
        marginTop: 5,
        backgroundColor: '#255a4a',
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 10,
        marginBottom: 10,
    }

});
