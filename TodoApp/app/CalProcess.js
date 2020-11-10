import React, {Component} from 'react'
import { View, ScrollView, Text, StyleSheet} from 'react-native'


export default class CalProcess extends Component {
    // [ 계산부호, 숫자, 항목]
    makeCalProcess(){
        let returnView = []
        const {processList, width1, width2, width3} = this.props

        for (let LineData of processList){
            returnView.push(
                <View style={styles.lineStyle}>
                    <Text style={[styles.textStyle, {width: width1}]}>{LineData[0] }</Text>
                    <Text style={[styles.textStyle, {width: width2}]}>{LineData[1] + (LineData[3] || '')}</Text>
                    <Text style={[styles.textStyle, {width: width3}]}>{LineData[2]}</Text>
                </View>
            )
        }
        return returnView === [] ? undefined:returnView
    }

    calculate(){
        const {processList} = this.props
        let resultCal = 0;
 
        for (let i = 0; i<processList.length-1; i++){
            let lineData = processList[i]
            let nextOperator = processList[i+1][0]
            let nextNumber = processList[i+1][1]
            
            if (i === 0){
                resultCal = lineData[1]
            }
            resultCal = eval(resultCal + nextOperator + nextNumber)
            console.log('result cal : ',resultCal)
            
        }
        return resultCal

    }

    render(){
        console.log('result',this.calculate())
        return (
        <View style ={styles.container}>
            <Text>hello</Text>
            {
                this.makeCalProcess()
            }
            <Text>----------------------------------</Text>
        </View>)
    }

}

const styles = StyleSheet.create({
    lineStyle: {
        //flex:1,
        justifyContent:"space-between",
        alignItems:"flex-start",
        flexDirection: 'row',

    },
    textStyle: {
        //width: 50, 
        textAlign: 'left', 
        //textDecorationLine:'underline'
    },
    container: {
        marginLeft: 50,
        marginRight: 50,
        marginTop: 50,
        backgroundColor: 'white',
        flex: 1,
    },

});


