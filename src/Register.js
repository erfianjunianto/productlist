import React, { Component } from "react";
import { Alert } from 'react-native';
import { Box, Button, HStack, Checkbox, NativeBaseProvider, StatusBar, Text, VStack, IconButton, Badge, Spacer, Radio, ScrollView, Center, useToast, FormControl, Stack, Input, WarningOutlineIcon } from "native-base";
import Icon from 'react-native-vector-icons/Ionicons';


function JenisKelamin() {
  const [value, setValue] = React.useState("one");
  return <Radio.Group name="myRadioGroup" accessibilityLabel="favorite number" value={value} onChange={nextValue => {
    setValue(nextValue);
  }}>
    <Radio value="l" my={1}>
      Laki-Laki
    </Radio>
    <Radio value="p" my={1}>
      Perempuan
    </Radio>
  </Radio.Group>;
};

function FormRegister() {
  return <Box alignItems="center">
    <Box w="100%" maxWidth="300px">
      <FormControl isRequired>
        <Stack>
          <FormControl.Label>Nama Lengkap</FormControl.Label>
          <Input type="text" defaultValue="xxx" placeholder="Nama Lengkap" onChangeText={text => this.setState({ nama_lengkap: text })} />
        </Stack>
        <Stack>
          <FormControl.Label>No. Handphone</FormControl.Label>
          <Input type="text" defaultValue="0" placeholder="0812" />
        </Stack>
        <Stack>
          <FormControl.Label>E-Mail</FormControl.Label>
          <Input type="text" defaultValue="" placeholder="test@gmail.com" onChangeText={text => this.setState({ email: text })} />
        </Stack>
        <Stack>
          <FormControl.Label>Jenis Kelamin</FormControl.Label>
          <JenisKelamin />
        </Stack>
        <Stack>
          <FormControl.Label>Username</FormControl.Label>
          <Input type="text" defaultValue="xxx" placeholder="userame" />
          <FormControl.HelperText>
            Must be atleast 6 characters.
          </FormControl.HelperText>
          <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
            Atleast 6 characters are required.
          </FormControl.ErrorMessage>
        </Stack>
        <Stack>
          <FormControl.Label>Password</FormControl.Label>
          <Input type="password" defaultValue="12345" placeholder="password" />
          <FormControl.HelperText>
            Must be atleast 6 characters.
          </FormControl.HelperText>
          <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
            Atleast 6 characters are required.
          </FormControl.ErrorMessage>
        </Stack>
        <Stack pt="5">
          <Checkbox value="test" accessibilityLabel="This is a dummy checkbox">
            Saya setuju dengan syarat dan ketentuan yang berlaku.
          </Checkbox>
        </Stack>
        <Stack>
          <Button size="sm" colorScheme="primary" onPress={() => this.registrasi(this.state.nama_lengkap, this.state.email)}>
            Register
          </Button>
        </Stack>
      </FormControl>
    </Box>
  </Box>;
};

class AppBar extends Component {
    render() {
      return (<>
        <StatusBar bg="#3700B3" barStyle="light-content" />
        <Box safeAreaTop bg="violet.600" />
        <HStack bg="violet.600" px="1" py="3" justifyContent="space-between" alignItems="center" w="100%">
          <HStack alignItems="center">
            <IconButton icon={<Icon name="ios-reorder-three" size={30} color="#FFF" />} />
            <Text color="white" fontSize="20" fontWeight="bold">
              {this.props.judul} {this.props.judul2} 
            </Text>
  
          </HStack>
        </HStack>
      </>
    );
    }
    
  }

export default class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nama_lengkap: '',
      no_handphone: '',
      email: '',
      jenis_kelamin: '',
      username: '',
      password: '',
      isCheck: false,
    }
  }

  registrasi(a, b, c) {
    Alert.alert(
      'Perhatian!',
      'Nama: ' + a + '\n'+ 'E-Mail: ' + b+ '\n'+'No. Handphone: '+ c,
      [
        { text: 'Ok' },
      ]
    );
  }

  render() {
    return (
      <NativeBaseProvider>
        <AppBar judul={this.props.judulnya} judul2={this.props.judullagi}/>
        <ScrollView>
          <Center>
            <Text bold fontSize="4xl">Formulir Pendaftaran</Text>
          </Center>
          {/* <FormRegister /> */}
          <Box alignItems="center">
            <Box w="100%" maxWidth="300px">
              <FormControl isRequired>
                <Stack>
                  <FormControl.Label>Nama Lengkap</FormControl.Label>
                  <Input type="text" defaultValue="xxx" placeholder="Nama Lengkap" onChangeText={namanya => this.setState({ nama_lengkap: namanya })} size="2xl" />
                </Stack>
                <Stack>
                  <FormControl.Label>No. Handphone</FormControl.Label>
                  <Input type="text" defaultValue="0" placeholder="0812" onChangeText={text => this.setState({ no_handphone: text })}/>
                </Stack>
                <Stack>
                  <FormControl.Label>E-Mail</FormControl.Label>
                  <Input type="text" defaultValue="" placeholder="test@gmail.com" onChangeText={text => this.setState({ email: text })} />
                </Stack>
                <Stack>
                  <FormControl.Label>Jenis Kelamin</FormControl.Label>
                  <JenisKelamin />
                </Stack>
                <Stack>
                  <FormControl.Label>Username</FormControl.Label>
                  <Input type="text" defaultValue="xxx" placeholder="userame" />
                  <FormControl.HelperText>
                    Must be atleast 6 characters.
                  </FormControl.HelperText>
                  <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
                    Atleast 6 characters are required.
                  </FormControl.ErrorMessage>
                </Stack>
                <Stack>
                  <FormControl.Label>Password</FormControl.Label>
                  <Input type="password" defaultValue="12345" placeholder="password" />
                  <FormControl.HelperText>
                    Must be atleast 6 characters.
                  </FormControl.HelperText>
                  <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
                    Atleast 6 characters are required.
                  </FormControl.ErrorMessage>
                </Stack>
                <Stack pt="5">
                  <Checkbox value="test" accessibilityLabel="This is a dummy checkbox">
                    Saya setuju dengan syarat dan ketentuan yang berlaku.
                  </Checkbox>
                </Stack>
                <Stack>
                  <Button size="sm" colorScheme="primary" onPress={() => this.registrasi(this.state.nama_lengkap, this.state.email, this.state.no_handphone)}>
                    Register
                  </Button>
                </Stack>
              </FormControl>
            </Box>
          </Box>
        </ScrollView>
      </NativeBaseProvider>
    );
  }
}