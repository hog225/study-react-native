// change black and white theme 
import React, {Component} from 'react'
import { Button, View, StyleSheet} from 'react-native'
import getStyleSheet from './styles'

const BlackWhite = ({darkTheme, toggleTheme}) => {
    const styles = getStyleSheet(darkTheme)
    const backgroundColor = StyleSheet.flatten(styles.container).backgroundColor

    return(
        <View style={styles.container}>
            <View style={styles.box}>
                <Button title={backgroundColor} onPress={toggleTheme} />
            </View>
        </View>
    )

}

export default BlackWhite