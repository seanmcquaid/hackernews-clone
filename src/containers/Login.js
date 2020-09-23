import React, { useCallback, useState } from 'react';
import TextInput from '../components/TextInput';
import { AUTH_TOKEN } from '../constants';

const Login = () => {
  const [login, setLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

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

  const _confirm = async () => {};

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
        <div className='pointer mr2 button' onClick={() => this._confirm()}>
          {login ? 'login' : 'create account'}
        </div>
        <div className='pointer button' onClick={pointerOnClick}>
          {login ? 'need to create an account?' : 'already have an account?'}
        </div>
      </div>
    </div>
  );
};

export default Login;
