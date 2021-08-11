import React from 'react';
import { connect } from 'react-redux';
import { dispatch } from './../../store/store'

import { LoginAction } from '../../store/userStore/user.actions.async';
import RootState from '../../store/types';
import { Box, Button, Flex, FormControl, FormLabel, Heading, Input } from "@chakra-ui/react"

import './styles.css';

type ILoginStateProps = {
  isLogged: boolean;
  loading: boolean;
  errorMessage: string;
};

type ILoginDispatchProps = {
  dispatchLoginAction: (username: string, password: string) => void;
};

type ILoginProps = ILoginDispatchProps & ILoginStateProps;

const Login = ({isLogged, errorMessage, loading, dispatchLoginAction}: ILoginProps) => {

  const [username, setUsername] = React.useState<string>('');
  const [password, setPassword] = React.useState<string>('');

  const handleOnClick = (): void => {
    dispatchLoginAction(username, password);
  };

  return (
    <Flex width="full" align="center" justifyContent="center">
      <Box p={8} maxWidth="500px" borderWidth={1} borderRadius={8} boxShadow="lg">  
        <Box textAlign="center">
          <Heading>Login</Heading>
        </Box>
        <Box my={4} textAlign="left">
          <FormControl>
            <FormLabel>Username</FormLabel>
            <Input type="text" placeholder="John Doe" onChange={(e) => setUsername(e.target.value)} />
          </FormControl>
          <FormControl mt={6}>
            <FormLabel>Password</FormLabel>
            <Input type="password" placeholder="*******" onChange={(e) => setPassword(e.target.value)} />
          </FormControl>
          <Button 
            isLoading={ loading } 
            loadingText="Signing in..." 
            width="full" 
            mt={4} 
            colorScheme="messenger" 
            type="submit"
            onClick={handleOnClick}>
            Sign In
          </Button>
        </Box>
      </Box>
    </Flex>
  );

};

const mapStateToProps = (state: RootState): ILoginStateProps => {
  return {
    isLogged: state.user.isLoggedIn,
    errorMessage: state.user.errorMessage,
    loading: state.user.loading,
  };
};

const mapDispatchToProps = (): ILoginDispatchProps => {
  return {
    dispatchLoginAction: (username: string, password: string) => {
      return dispatch(LoginAction({username, password}));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
