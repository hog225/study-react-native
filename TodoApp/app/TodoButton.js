import React from 'react'
import { Text, TouchableHighlight, StyleSheet} from 'react-native'
const TodoButton = ({ onPress, complete, name}) => (
    <TouchableHighlight
        onPress={onPress}
        underlayColor='#efefef'
        style={complete ? styles.buttonComplete : styles.button}>
        <Text style={[
            styles.text,
            complete ? styles.complete : null,
            // complete ? styles.complete : null,
            name === 'Delete' ? styles.deleteButton : null ]}>
            {name}{complete}
        </Text>
    </TouchableHighlight>

)

const styles = StyleSheet.create({
    button: {
        alignSelf: 'flex-end',
        padding: 7,
        borderColor: '#ededed',
        borderWidth: 1,
        borderRadius: 4,
        marginRight: 5
    },
    buttonComplete: {
        alignSelf: 'flex-end',
        padding: 7,
        borderColor: '#ededed',
        backgroundColor: '#00dd00',
        borderWidth: 1,
        borderRadius: 4,
        marginRight: 5
    },
    text: {
        color: '#666666'
    },
    complete: {
        color: 'green',
        fontWeight: 'bold',
    },
    deleteButton: {
        color: 'red'
    }
})
export default TodoButton