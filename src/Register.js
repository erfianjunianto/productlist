import React, { Component } from "react";
import { Alert } from 'react-native';
import { Box, Button, HStack, Checkbox, NativeBaseProvider, StatusBar, Text, VStack, Pressable, Badge, Spacer, Radio, ScrollView, Center, useToast, FormControl, Stack, Input, WarningOutlineIcon } from "native-base";
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

  registrasi(nama_lengkap, email,no_handphone) {
    Alert.alert(
      'Perhatian!',
      'Nama: ' + nama_lengkap + '\n'+ 'E-Mail: ' + email+ '\n'+'No. Handphone: '+ no_handphone,
      [
        { text: 'Ok' },
      ]
    );
  }

  render() {
    return (
      <NativeBaseProvider>
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
                  <Input type="text" defaultValue="xxx" placeholder="Nama Lengkap" onChangeText={namanya => this.setState({ nama_lengkap: namanya })} />
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