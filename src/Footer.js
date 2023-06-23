import React, { Component } from "react";
import {
    HStack,
  Text,
  Box,
  Pressable,
  Stack,
  Heading,
  IconButton,
  Center,
  View
} from "native-base";
import Icon from 'react-native-vector-icons/Ionicons';

export default class Footer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selected: 0,
            setSelected: 0
        }
    }
    render() {
      return (
            <Box flex={1} bg="white" safeAreaTop width="100%" maxW="300px" alignSelf="center">

                <HStack bg="indigo.600" alignItems="center" safeAreaBottom shadow={6}>
                    <Pressable cursor="pointer" opacity={this.state.selected === 0 ? 1 : 0.5} py="3" flex={1} onPress={() => this.setState({selected:0})}>
                        <Center>
                            <IconButton mb="1" as={<Icon name="ios-home" size={30} color="#FFF" />} />
                            <Text color="white" fontSize="12">
                                Home
                            </Text>
                        </Center>
                    </Pressable>
                    <Pressable cursor="pointer" opacity={this.state.selected === 1 ? 1 : 0.5} py="2" flex={1} onPress={() => this.setState({selected:1})}>
                        <Center>
                        <IconButton mb="1" as={<Icon name="ios-reorder-three" size={30} color="#FFF" />} />
                            <Text color="white" fontSize="12">
                                Search
                            </Text>
                        </Center>
                    </Pressable>
                    <Pressable cursor="pointer" opacity={this.state.selected === 2 ? 1 : 0.6} py="2" flex={1} onPress={() => this.setState({selected:2})}>
                        <Center>
                        <IconButton mb="1" as={<Icon name="ios-reorder-three" size={30} color="#FFF" />} />
                            <Text color="white" fontSize="12">
                                Cart
                            </Text>
                        </Center>
                    </Pressable>
                    <Pressable cursor="pointer" opacity={this.state.selected === 3 ? 1 : 0.5} py="2" flex={1} onPress={() => this.setState({selected:3})}>
                        <Center>
                        <IconButton mb="1" as={<Icon name="ios-reorder-three" size={30} color="#FFF" />} />
                            <Text color="white" fontSize="12">
                                Account
                            </Text>
                        </Center>
                    </Pressable>
                </HStack>
            </Box>
        );
    }
}