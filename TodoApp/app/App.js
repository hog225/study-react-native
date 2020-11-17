import React, {Component} from 'react'
import { View, ScrollView, StyleSheet} from 'react-native'
import Heading from './Heading'
import Input from './Input'
import Button from './Button'
import TodoList from './TodoList'
import TabBar from './TabBar'
import BlackWhite from './BlackWhite'
import StyleEX from './StyleExample'
import Profile from './Profile'
import Animation from './Animation'
//import Lottie from './Lottie'
import AnimatableEx from './AnimatableEx'
import Animation2 from './Animation2'
import ToastEx from './ToastEx'
import Localization from './Localization'
import SwipeListViewEx from './SwipeListViewEx'
import CalProcess from './CalProcess'
import NMap from './NMap'
let todoIndex = 0

class App extends Component {
    constructor() {
        super()
        this.state = {
            inputValue: '',
            todos: [],
            // const todo = {
            //     title: this.state.inputValue,
            //     todoIndex,
            //     complete: false 
            // }
            type: 'All',
            darkTheme: false
        }
        this.submitTodo = this.submitTodo.bind(this)
        this.toggleComplete = this.toggleComplete.bind(this)
        this.deleteTodo = this.deleteTodo.bind(this)
        this.setType = this.setType.bind(this)
        this.toggleTheme = this.toggleTheme.bind(this)
    }
    setType (type) {
        this.setState({ type })
    }
    inputChange(inputValue){
        console.log('input value: ', inputValue)
        this.setState({inputValue})
    }

    submitTodo (){
        if (this.state.inputValue.match(/^\s*$/)){
            return
        }
        const todo = {
            title: this.state.inputValue,
            todoIndex,
            complete: false
        }
        todoIndex++
        const todos = [...this.state.todos, todo]
        this.setState({todos, inputValue: ''}, () => {
            console.log('State: ', this.state.todos)
        })
    }
    deleteTodo (todoIndex){
        let { todos } = this.state
        todos = todos.filter((todo) => todo.todoIndex !== todoIndex)
        this.setState({todos})
    }
    toggleComplete (todoIndex){
        let todos = this.state.todos
        
        todos.forEach((todo) => {
            if (todo.todoIndex === todoIndex){
                todo.complete = !todo.complete
                console.log(` change ${todo.complete} todoIndex ${todoIndex}`)
            }
        })
        this.setState({ todos})
    }
    toggleTheme(){
        this.setState({darkTheme: !this.state.darkTheme})
    }
    //-----------------------------------------------------------------------
    //Lottie 
    // render(){
    //     return(
    //         <Lottie></Lottie>
    //     )
    // }
    //-----------------------------------------------------------------------

    // //-----------------------------------------------------------------------
    // //Animation 
    // render(){
    //     return(
    //         // <Animation></Animation>
    //         //<AnimatableEx></AnimatableEx>
    //         //<Animation2></Animation2>
    //         //<ToastEx></ToastEx>
    //         //<Localization></Localization>
    //         <SwipeListViewEx></SwipeListViewEx>
    //     )
    // }
    // //-----------------------------------------------------------------------
    //-----------------------------------------------------------------------
    // //CalProcess 
    // calProcess =[
    //     [" ", "50000", "주택가격", " 만원"],
    //     ["-", "50000", "임차보증금", " 만원"],
    //     ["+", "10", "세금", " 만원"],
    // ]
    // render(){
    //     return(
    //         <CalProcess
    //             processList = {this.calProcess}
    //             width1={10}
    //             width2={90}
    //             width3={80}
    //         ></CalProcess>
    //     )
    // }
    //Naver Map 

    render(){
        return(
            <NMap />
        )
    }
    //-----------------------------------------------------------------------

    //-----------------------------------------------------------------------
    //Profile
    // render(){
    //     return(
    //         <Profile></Profile>
    //     )
    // }
    //-----------------------------------------------------------------------
    //StyleExampl
    // render(){
    //     return(
    //         <StyleEX></StyleEX>

    //     )
    // }
    //-----------------------------------------------------------------------
    // Black And White
    // render(){
    //     const {inputValue, todos, type, darkTheme} = this.state
    //     return (
    //         <BlackWhite 
    //             darkTheme = {darkTheme}
    //             toggleTheme = {this.toggleTheme}>
    //         </BlackWhite>    
    //     )
    // }
    //-----------------------------------------------------------------------
    // Todo app 
    // render() {
    //     const {inputValue, todos, type, darkTheme} = this.state
        
    //     return (
    //         <View style={styles.container}>

    //             <ScrollView keyboardShouldPersistTaps='always'
    //             style={styles.content}>
    //                 {/* Black and white 기능 */}
    //                  <BlackWhite 
    //                     darkTheme = {darkTheme}
    //                     toggleTheme = {this.toggleTheme}>
    //                 </BlackWhite>
    //                 <Heading />
    //                 <Input
    //                     inputValue={inputValue}
    //                     inputChange={(text) => this.inputChange(text)} />
                    
    //                 <TodoList 
    //                     todos = {todos} 
    //                     deleteTodo = {this.deleteTodo}
    //                     toggleComplete = {this.toggleComplete}
    //                     type = {type}/>
    //                 <Button submitTodo={this.submitTodo} />
                    
    //             </ScrollView>
    //             <TabBar type={type} setType={this.setType} />
    //         </View>
    //     )
    // }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5'


    },
    content: {
        flex: 1,
        paddingTop: 20
    }
})
export default App