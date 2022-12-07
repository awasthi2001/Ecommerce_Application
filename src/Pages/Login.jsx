import React from "react";
import { Box, Input, Stack } from '@chakra-ui/react'
// 1. this page should contain two input boxes which takes email and password from the user and a login button.

// 2. in this page you should get the auth state from auth context and based on auth state;if user is already logged in then user should be redirected to home page

// 3. network request (POST) should be made to api endpoint `https://reqres.in/api/login` with email and password details;

// 4. button should not allow additional click till API call is complete; user should see loading indicator on login button till API call is complete;

// 5. upon successful login, login success action is dispatched with token we get back as response and the authentication status and token is updated in the context API. user then gets redirected to home page;

// 6. Proper Alert should be displayed to user upon unsuccessful API call. the message can be `Something went wrong. please refresh.`

const Login = () => {
  return <Box>
  <Stack spacing={3}>
  <Input placeholder='extra small size' size='xs' />
  <Input placeholder='small size' size='sm' />
  <Input placeholder='medium size' size='md' />
  <Input placeholder='large size' size='lg' />
</Stack>
  </Box>;
};

export default Login;
