import React, { Component } from 'react';
import { View, Button, Alert } from 'react-native';

export default class App extends Component { 
  displayAlert = ()=>
  alert('The father of computing.')

  displayAlert2 = ()=>
  alert('The father of nation.')

  displayAlert3 = ()=>
  alert('The first black president of South Africa. ')

  displayAlert4 = ()=>
  alert('Saint Teresa of Calcutta')
  
  render(){
    return(
      <View>
        <View 
          style={{ width:200 , height:100, marginTop:80, marginLeft:80}}>
          <Button 
            title="Charles Babbage"  
            color = "red"
            onPress={this.displayAlert} />
        </View>
        
        <View
          style={{ width:200 , height:100, marginTop:20, marginLeft:80}}>
          <Button 
            title="Mahatma Gandhi"  
            color = "blue"
            onPress={this.displayAlert2} />
        </View>

        <View
          style={{ width:200 , height:100, marginTop:20, marginLeft:80}}>
          <Button 
            title="Nelson Mandela"  
            color = "purple"
            onPress={this.displayAlert3} />
        </View>
        <View 
          style={{ width:200 , height:100, marginTop:20, marginLeft:80}}>
          <Button 
            title="Mother Teresa"  
            color = "green"
            onPress={this.displayAlert4} />
            />
        </View>
      </View>
    )
  }
}