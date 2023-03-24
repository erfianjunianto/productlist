import React from "react";
// 1. import `NativeBaseProvider` component
import { NativeBaseProvider, Text, Box, Button, Checkbox, StatusBar,
  HStack,
  IconButton, Icon,
  Center } from "native-base";

export default function App() {
  // 2. Use at the root of your app
  function AppBar() {
    return <>
        <StatusBar bg="#3700B3" barStyle="light-content" />
        <Box safeAreaTop bg="violet.600" />
        <HStack bg="violet.800" px="1" py="3" justifyContent="space-between" alignItems="center" w="100%" maxW="350">
          <HStack alignItems="center">
            <IconButton icon={<Icon size="sm" as={MaterialIcons} name="menu" color="white" />} />
            <Text color="white" fontSize="20" fontWeight="bold">
              Home
            </Text>
          </HStack>
          <HStack>
            <IconButton icon={<Icon as={MaterialIcons} name="favorite" size="sm" color="white" />} />
            <IconButton icon={<Icon as={MaterialIcons} name="search" size="sm" color="white" />} />
            <IconButton icon={<Icon as={MaterialIcons} name="more-vert" size="sm" color="white" />} />
          </HStack>
        </HStack>
      </>;
  }
  
  function Example() {
    return <Center>
        <AppBar />
      </Center>;
  }
  return (
    <NativeBaseProvider>
      <AppBar />
      <Box flex={1} bg="#fff" alignItems="center" justifyContent="center">
        <Text>Open up App.js to start working on your app!</Text>
        <Button >Click Me</Button>
        <Checkbox value="test" accessibilityLabel="This is a dummy checkbox" />
      </Box>
    </NativeBaseProvider>
  );
}