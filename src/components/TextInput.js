import React from 'react';

const TextInput = ({ value, onChange, placeholder }) => (
  <input
    className='mb2'
    value={value}
    onChange={onChange}
    type='text'
    placeholder={placeholder}
  />
);

export default TextInput;
