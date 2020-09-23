import React from 'react';

const TextInput = ({ value, onChange, placeholder, type }) => (
  <input
    className='mb2'
    value={value}
    onChange={onChange}
    type={type}
    placeholder={placeholder}
  />
);

export default TextInput;
