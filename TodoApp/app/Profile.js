import React, {Component} from 'react'
import { Platform, View, Image,Text, StyleSheet} from 'react-native'

export default class Profile extends Component {
    render(){
        return (
            <View style={styles.container}>
                <View style={styles.cardContainer}>
                    <View style={styles.cardImageContainer}>
                        <Image style={styles.cardImage} source={require('./poe.png')}>
                        </Image>
                    </View>
                    <View>
                        <Text style={styles.cardName}>
                            Yeonggi HONG
                        </Text>
                    </View>
                    <View style={styles.cardOccupationContainer}>
                        <Text style={styles.cardOccupation}>
                            System Developer
                        </Text>
                    </View>
                    <View>
                        <Text style={styles.cardDescription}>
                            Yeonggi is a really great javascript developer. He 
                            loves ising JS to vuild react native applications for ios and android
                        </Text>

                    </View>
                    <View style={{alignItems: 'center', position: 'absolute', bottom: 0}}>
                        <BottomText>
                            {Platform.OS}
                        </BottomText>
                    </View>
                </View>
            </View>
        )
    }
}



const profileCardColor = 'dodgerblue'
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    cardContainer:{
        alignItems: 'center',
        borderColor: 'black',
        borderWidth: 3,
        borderStyle: 'solid',
        borderRadius: 20,
        backgroundColor: profileCardColor,
        width: 300,
        height: 400,
        ...Platform.select({
            ios:{
                shadowColor:'black',
                shadowOffset: {
                    height: 10
                },
                shadowOpacity: 1
            },
            android: {
                elevation: 15
            }
        })
    },
    cardImageContainer:{
        alignItems: 'center',
        backgroundColor: 'white',
        borderWidth: 3,
        borderColor: 'black',
        width: 120,
        height: 120,
        borderRadius: 60,
        marginTop: 60,
        paddingTop: 15,
        ...Platform.select({
            ios:{
                shadowColor:'black',
                shadowOffset: {
                    height: 10
                },
                shadowOpacity: 1
            },
            android: {
                elevation: 15
            }
        })

    },
    cardImage: {
        width: 80,
        height: 80
    },
    cardName: {
        color: 'white',
        marginTop: 30,
        fontWeight: 'bold',
        fontSize: 24,
        ...{
            textShadowColor: 'black',
            textShadowOffset: {
                height: 2,
                width:2,
            },
            textShadowRadius: 3

        }
    },
    cardOccupationContainer: {
        borderColor: 'black',
        borderWidth: 3,
        borderTopWidth: 0,
        borderRightWidth: 0,
        borderLeftWidth: 0,
    },
    cardOccupation: {
        fontWeight: 'bold',
        marginTop: 10,
        marginBottom: 10,
    },
    cardDescription: {
        marginTop: 10,
        marginRight: 40,
        marginLeft: 40,
        marginBottom: 10,
        fontStyle: 'italic'

    },
    centeredText: {
        textAlign: 'center',
        margin: 10,
        
        fontSize: 18,
        ...Platform.select({
            ios: {
                fontFamily: 'American Typewriter'
            },
            android: {
                fontFamily: 'monospace'
            }

        })
    }

})

// 중앙 정렬된 텍스트 엘리먼트를 렌더링 하는 재사용 가능한 컴포넌트 
const CenteredText = (props) => (
    <Text style={[styles.centeredText, props.style]}>
        {props.children}
    </Text>
)

const BottomText = (props) => (
    <CenteredText style={[{position: 'absolute', bottom: 0}, props.style]}>
        {props.children}
    </CenteredText>
)