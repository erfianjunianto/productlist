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

class AppBar extends Component {
  render() {
    return (<>
      <StatusBar bg="#3700B3" barStyle="light-content" />
      <Box safeAreaTop bg="violet.600" />
      <HStack bg="violet.600" px="1" py="3" justifyContent="space-between" alignItems="center" w="100%">
        <HStack alignItems="center">
          <IconButton icon={<Icon name="ios-reorder-three" size={30} color="#FFF" />} />
          <Text color="white" fontSize="20" fontWeight="bold">
            {this.props.judul}
          </Text>

        </HStack>
      </HStack>
    </>
  );
  }
  
}

export default function App() {
  // 2. Use at the root of your app
  
  return (
    <NativeBaseProvider>
      {/* <AppBar judul="Bebas Te"/> */}
      
      {/* <Box flex={1} bg="#fff" alignItems="center" justifyContent="center">
        <Text>Open up App.js to start working on your app!</Text>
        <Button >Click Me</Button>
        <Checkbox value="test" accessibilityLabel="This is a dummy checkbox" />
      </Box> */}
      {/* <Login /> */}
      <Register judulnya="bebas" judullagi="SI" />
    </NativeBaseProvider>
  );
}