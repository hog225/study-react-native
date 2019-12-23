import Cities from './Cities/Cities'
import City from './Cities/City'
import AddCity from './AddCity/AddCity'

import {colors} from './theme'

import {createAppContainer} from 'react-navigation'
import {createStackNavigator, createDrawerNavigator} from 'react-navigation-stack'
import {createBottomTabNavigator} from 'react-navigation-tabs'



const CitiesNav = createStackNavigator({
        Cities: {screen: Cities},
        City: {screen: City}
    },
    {
        defaultNavigationOptions:{
            headerStyle: {
                backgroundColor: colors.primary
            },
            headerTintColor: '#fff'
        }
})

const AppTabs = createBottomTabNavigator(
    {
        Cities: {screen: CitiesNav},
        AddCity: {screen: AddCity}
    },
    {
        tabBarOptions: {
            activeTintColor: 'red',
            activeBackgroundColor:'blue',
            labelStyle: {
                fontSize: 18,
            },
            tabStyle: {                
                alignItems: 'center'//안먹힘 

            }
        },

    }
)

const Tabs = createAppContainer(AppTabs)
export default Tabs