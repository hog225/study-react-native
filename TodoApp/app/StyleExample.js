import React, {Component} from 'react'
import { View, Text, StyleSheet} from 'react-native'

export default class StyleExample extends Component {
    render(){
        return (
            // <View style={styles.container}>
            //     <View style={styles.cardContainer}> 
            //         <Example style={
            //             {
            //                 borderWidth:1, 
            //                 paddingTop:50
                            
            //             }}>
            //             <CenteredText>border width: 1 border style </CenteredText>
            //         </Example>

            //         <Example style={{borderRadius: 20, paddingTop:50, paddingLeft:40}}>
            //             <CenteredText>
            //                 Example 1:{"\n"} Rounded Corners
            //             </CenteredText>
            //         </Example>

            //         <Example style={{borderTopLeftRadius: 20, position: 'absolute', right: 0, bottom: 0}}>
            //             <CenteredText>
            //                 Example 2:{"\n"} Rounded Corners
            //             </CenteredText>
            //         </Example>
            //     </View>


            // </View>
            <View style={styles.container}>
                
                    <Example style={{backgroundColor: 'red'}}>center</Example>
                    <Example style={{}}>center2</Example>
                
            </View>
            
        )
    }
}

//재사용 할 수 있는 컴포넌트 기본 스타일 속성을 전달된 스타일 속성으로 
//쉽게 오버라이드 
const Example = (props) => (
    <View style={[styles.example, props.style]}>
        <Text>
            {props.children}
        </Text>
    </View>
)

const FlexContainer = (props) => (
    <View style={[styles.example, props.style]}>
            {props.children}
    </View>
)

// 중앙 정렬된 텍스트 엘리먼트를 렌더링 하는 재사용 가능한 컴포넌트 
const CenteredText = (props) => (
    <Text style={[styles.centeredText, props.style]}>
        {props.children}
    </Text>
)

const profileCardColor = 'dodgerblue'
const styles = StyleSheet.create({
    container: {
        marginTop: 50,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        
    },
    container1: {
        flex: 2,
        backgroundColor: 'red'
    },
    container2:{
        flex:3,
        backgroundColor:'green'
    },
    cardContainer:{
        backgroundColor: profileCardColor,
        
        width: 300,
        height: 400
    },
    example:{
        borderWidth: 5,
        padding: 5,
        width: 100,
        height: 100,
        backgroundColor: 'grey'
    },
    centeredText: {
        textAlign: 'left',
        textDecorationLine: 'underline',
        margin: 10,
        ...{
            textShadowColor:'red',
            textShadowOffset: {width: 2, height: 2},
            textShadowRadius: 4
        }
        //backgroundColor: 'blue'

    },
    flexContainer: {
        width: 150,
        height: 150,
        borderWidth: 1,
        margin: 10,
        // flexDirection: 'row'
    }

})