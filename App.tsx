import React, { Component } from "react";
// 1. import `NativeBaseProvider` component
import { 
  NativeBaseProvider, 
  Text, 
  Box, 
  Button, 
  Checkbox, 
  StatusBar,
  HStack,
  IconButton,
  Center } from "native-base";

import Icon from 'react-native-vector-icons/Ionicons';
import Login from './src/Login.js';
import Register from './src/Register.js';
import News from "./src/News.js";
import NewsDetail from "./src/NewsDetail.js";



export default class App extends Component {
  // 2. Use at the root of your app
  constructor(props){
   super(props);
   this.state = {
    dataApi:'',
   }
    this.getData();
  }

  getData = () => {
    fetch('https://api.publicapis.org/entries', {
        method: 'GET',
        headers: {}
    }).then((response) => response.json()).then((responseData) => {
        // console.log(responseData['count']);
        this.setState({ dataApi: responseData['entries'][1]['API']});
        
    });
}

render() {
  return(
    <NativeBaseProvider>
      {/* <AppBar judul="Bebas Te"/> */}
      
      {/* <Box flex={1} bg="#fff" alignItems="center" justifyContent="center">
        <Text>Open up App.js to start working on your app!</Text>
        <Button >Click Me</Button>
        <Checkbox value="test" accessibilityLabel="This is a dummy checkbox" />
      </Box> */}
      {/* <Login /> */}
      {/* <Register paramX={this.state.dataApi} paramY="Application" paramZ="ARS U"/> */}
      <News />
      {/* <NewsDetail newsID="13" /> */}
    </NativeBaseProvider>
  );
}
}