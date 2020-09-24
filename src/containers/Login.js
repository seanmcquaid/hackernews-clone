import React, { useCallback, useState } from 'react';
import TextInput from '../components/TextInput';
import { AUTH_TOKEN } from '../constants';
import gql from 'graphql-tag';
import { Mutation } from 'react-apollo';
import { useHistory } from 'react-router';

const SIGNUP_MUTATION = gql`
  mutation SignupMutation($email: String!, $password: String!, $name: String!) {
    signup(email: $email, password: $password, name: $name) {
      token
    }
  }
`;

const LOGIN_MUTATION = gql`
  mutation LoginMutation($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
    }
  }
`;

const Login = () => {
  const [login, setLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const history = useHistory();

  const pointerOnClick = useCallback(() => {
    setLogin((state) => !state);
  }, []);

  const emailOnChange = useCallback((event) => {
    setEmail(event.target.value);
  }, []);

  const passwordOnChange = useCallback((event) => {
    setPassword(event.target.value);
  }, []);

  const nameOnChange = useCallback((event) => {
    setName(event.target.value);
  }, []);

  const _confirm = async (data) => {
    const { token } = login ? data.login : data.signup;
    _saveUserData(token);
    history.push('/');
  };

  const _saveUserData = (token) => {
    localStorage.setItem(AUTH_TOKEN, token);
  };

  return (
    <div>
      <h4 className='mv3'>{login ? 'Login' : 'Sign Up'}</h4>
      <div className='flex flex-column'>
        {!login && (
          <TextInput
            value={name}
            onChange={nameOnChange}
            type='text'
            placeholder='Your name'
          />
        )}
        <TextInput
          value={email}
          onChange={emailOnChange}
          type='text'
          placeholder='Your email address'
        />
        <TextInput
          value={password}
          onChange={passwordOnChange}
          type='password'
          placeholder='Choose a safe password'
        />
      </div>
      <div className='flex mt3'>
        <Mutation
          mutation={login ? LOGIN_MUTATION : SIGNUP_MUTATION}
          variables={{ email, password, name }}
          onCompleted={(data) => _confirm(data)}
        >
          {(mutation) => (
            <div className='pointer mr2 button' onClick={mutation}>
              {login ? 'login' : 'create account'}
            </div>
          )}
        </Mutation>
        <div className='pointer button' onClick={pointerOnClick}>
          {login ? 'need to create an account?' : 'already have an account?'}
        </div>
      </div>
    </div>
  );
};

export default Login;
