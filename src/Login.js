import React from "react";
import { Alert, Box, Button, Divider, HStack, IconButton, NativeBaseProvider, StatusBar, Text, VStack, Pressable, Badge, Spacer, Flex, TextArea, ScrollView, Center, useToast, FormControl, Stack, Input, WarningOutlineIcon } from "native-base";
import Icon from 'react-native-vector-icons/Ionicons';

function FormLogin() {
  return <Box alignItems="center">
      <Box w="100%" maxWidth="300px">
        <FormControl isRequired>
          <Stack>
            <FormControl.Label>Username</FormControl.Label>
            <Input type="text" defaultValue="xxx" placeholder="userame" size="2xl" />
            <FormControl.HelperText>
              Must be atleast 6 characters.
            </FormControl.HelperText>
            <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
              Atleast 6 characters are required.
            </FormControl.ErrorMessage>
          </Stack>
          <Stack>
            <FormControl.Label>Password</FormControl.Label>
            <Input type="password" defaultValue="12345" size="2xl"   placeholder="password" />
            <FormControl.HelperText>
              Must be atleast 6 characters.
            </FormControl.HelperText>
            <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
              Atleast 6 characters are required.
            </FormControl.ErrorMessage>
          </Stack>
          <Stack>
            <Button size="sm" colorScheme="secondary">
              Login
            </Button>
          </Stack>
        </FormControl>
      </Box>
    </Box>;
};

export default function Login() {
  return (
    <NativeBaseProvider>
      <ScrollView>
        <FormLogin />
      </ScrollView>
    </NativeBaseProvider>
  );
}