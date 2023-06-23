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


export default class NewsDetail extends Component {
    // 2. Use at the root of your app
    constructor(props) {
        super(props);
        this.state = {
            title:'',
            url: '',
        }
        this.getData();
    }

    getData = () => {
        fetch("https://jsonplaceholder.typicode.com/photos/" + this.props.newsID, {
            method: 'GET',
            headers: {}
        }).then((response) => response.json()).then((responseData) => {
            // console.log(responseData);
            // this.setState({ dataApi: responseData['entries'] });
            this.setState({ 
                title: responseData['title'], 
                url: responseData['url'], 
            });

        });
    }

    render() {

        return (
            <ScrollView>
                <Box>
                    <AspectRatio w="100%" ratio={16 / 9}>
                        <Image source={{
                            uri: this.state.url
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
                        <Heading size="md" ml="-1" style={{ textTransform: "uppercase"}}>
                            {this.state.title}
                        </Heading>
                        <Text fontSize="xs" _light={{
                            color: "violet.500"
                        }} _dark={{
                            color: "violet.400"
                        }} fontWeight="500" ml="-0.5" mt="-1">
                            6 mins ago
                        </Text>
                        <Text fontSize="lg" style={{textAlign:"justify"}}>
                            Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.

                            The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
                        </Text>
                    </Stack>


                </Stack>

            </ScrollView>
       
    );
  }
}