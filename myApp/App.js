import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
class MyComponent extends Component {
  constructor(){
    super()
    this.state = {
      year: 2019,
      name: 'yeonggi hong',
      colors: ['blue'],
      book: 'React Natice in Action',
      phone: '010-7756-8585',
      leapYear:true,
      info:{
        type: 'programing'
      }

    }
  }
  
  updateYear(){
    this.setState({year: 2018})
  }
  updateBook(){
    this.setState({book: 'Express in action'})
  }

  update(){
    this.forceUpdate()
  }


  render() {
    const {book} =this.state
    return (
      <View style={styles.container}>
        <Text
          onPress={()=> this.updateYear()}>this year is {this.state.year}</Text>
        <Text
          onPress={()=> this.forceUpdate()}>my name is {this.state.name}</Text>
        <Text>my colors is {this.state.colors}</Text>
        <BookDisplay 
          leapYear = {this.state.leapYear}
          info={this.state.info}
          topics = {['React', 'ionic', 'Express', 'Django']}
          updateBook={()=> this.updateBook()} 
          book={book} />
        <Blink text={this.state.phone}></Blink>
      </View>
    );      
  }
}

const BookDisplay = (props) =>{
  let leapYear
  let {topics} = props
  const { book, updateBook, info } = props
  topics = topics.map((topic, i) =>{
    return <Text>{topic} -- {i}</Text>
  })
  if (props.leapYear) {
    leapYear = <Text>This is a leapYear!!</Text>
  }
  return(
    <View>
      {leapYear}
      <Text
        onPress={updateBook}>{book}, {info.type}</Text>
      {topics}
    </View>
  )
}

class Blink extends Component{
  constructor(){
    super()
    this.state = {
      isShowingText: true,
    }
  }

  componentDidMount(){
    setInterval(()=>{
      this.setState(previousState => ({
        isShowingText: !previousState.isShowingText
      }))
    }, 1000)
  }

  render(){
    if (!this.state.isShowingText)
      return null;
    
    return (
      <Text>{this.props.text}</Text>
    )
  }
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default MyComponent