import React, { Component } from "react";
import {
  AspectRatio,
  Text,
  Box,
  Image,
  Stack,
  Heading,
  ScrollView,
  IconButton,
  Center,
  View
} from "native-base";
import Footer from "./Footer.js";

const URL = "https://api.publicapis.org/entries";
const URL2 = "https://jsonplaceholder.typicode.com/photos";


export default class News extends Component {
  // 2. Use at the root of your app
  constructor(props) {
    super(props);
    this.state = {
      dataApi: [],
    }
    this.getData();
  }

  getData = () => {
    fetch("https://jsonplaceholder.typicode.com/photos", {
      method: 'GET',
      headers: {}
    }).then((response) => response.json()).then((responseData) => {
      // console.log(responseData);
      // this.setState({ dataApi: responseData['entries'] });
      this.setState({ dataApi: responseData });

    });
  }

  render() {

    return (
      <ScrollView style={{backgroundColor:"#666"}}>
        {
          this.state.dataApi.slice(0, 10).map((item, index) => (
            <Box alignItems="center" py="2">
              <Box maxW="5/6" rounded="lg" overflow="hidden" borderColor="coolGray.200" borderWidth="1" _dark={{
                borderColor: "coolGray.600",
                backgroundColor: "gray.700"
              }} _web={{
                shadow: 2,
                borderWidth: 0
              }} _light={{
                backgroundColor: "gray.50"
              }}>
                <Box>
                  <AspectRatio w="100%" ratio={16 / 9}>
                    <Image source={{
                      uri: item.url
                    }} alt="image" />
                  </AspectRatio>
                  <Center bg="violet.500" _dark={{
                    bg: "violet.400"
                  }} _text={{
                    color: "warmGray.50",
                    fontWeight: "700",
                    fontSize: "xs"
                  }} position="absolute" bottom="0" px="3" py="1.5">
                    PHOTOS
                  </Center>
                </Box>
                <Stack p="4" space={3}>
                  <Stack space={2}>
                    <Heading size="md" ml="-1" style={{textTransform:"uppercase"}}>
                      {item.title}
                    </Heading>
                    <Text fontSize="xs" _light={{
                      color: "violet.500"
                    }} _dark={{
                      color: "violet.400"
                    }} fontWeight="500" ml="-0.5" mt="-1">
                       6 mins ago
                    </Text>
                  </Stack>
                  
                  
                </Stack>
              </Box>
            </Box>

          ))
        }
      
      </ScrollView>
    );
  }
}