import React, {Component} from 'react'
import { TouchableHighlight, Platform, View, Image,Text, StyleSheet} from 'react-native'
import PropTypes from 'prop-types'
import update from 'immutability-helper'

const userImage = require('./poe.png');
const data = [{
    image: userImage,
    name: 'lunch box',
    occupation: 'React Native Developer',
    description: 'lunch box is a really great javascript developer. He \
    loves ising JS to vuild react native applications for ios and android',
    showThumbnail: true
}]

const ProfileCard = (props) => {
    const {image, name, occupation, description, onPress, showThumbnail } = props;
    let containerStyles = [styles.cardContainer];

    if (showThumbnail) {
        containerStyles.push(styles.cardThumbnail)
    }

    return (
        <TouchableHighlight onPress={onPress}>
            <View style={[containerStyles]}>
                <View style={styles.cardImageContainer}>
                    <Image style={styles.cardImage} source={image}/>
                </View>
                <View>
                    <Text style={styles.cardName}>
                        {name}
                    </Text>
                </View>
                <View style={styles.cardOccupationContainer}>
                    <Text style={styles.cardOccupation}>
                        {occupation}
                    </Text>
                </View>
                <View>
                    <Text style={styles.cardDescription}>
                        {description}
                    </Text>
                </View>
                <View style={{alignItems: 'center', position: 'absolute', bottom: 0}}>
                    <BottomText>
                        {Platform.OS}
                    </BottomText>
                </View>
            </View>
        </TouchableHighlight>
    )

}

ProfileCard.propTypes = {
    image: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    occupation: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    showThumbnail: PropTypes.bool.isRequired,
    onPress: PropTypes.func.isRequired
}


export default class Profile extends Component {

    constructor(props, context){
        super(props, context);
        this.state = {
            data: data
        }
    }

    handleProfileCardPress = (index) =>{
        const showThumbnail = !this.state.data[index].showThumbnail;
        this.setState({
            data: update(this.state.data, {[index]: {showThumbnail:{$set:showThumbnail}}})
            
        })
    }
    render(){
        const list = this.state.data.map(function(item, index){
            const {image, name, occupation, description, showThumbnail } = item;
            return <ProfileCard key={'card-' + index}
                                image={image}
                                name ={name}
                                occupation = {occupation}
                                description = {description}
                                onPress = {this.handleProfileCardPress.bind(this, index)}
                                showThumbnail={showThumbnail}/>
        }, this)
        return (
            <View style= {styles.container}>
                {list}
            </View>
        )
    }
}



const profileCardColor = 'dodgerblue'
const styles = StyleSheet.create({
    cardThumbnail:{
        transform: [{scale:0.2}]
    },
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