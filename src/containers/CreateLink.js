import React, { useCallback, useState } from 'react';
import Button from '../components/Button';
import TextInput from '../components/TextInput';

const CreateLink = () => {
  const [description, setDescription] = useState('');
  const [url, setUrl] = useState('');

  const descriptionOnChange = useCallback((event) => {
    setDescription(event.target.value);
  }, []);

  const urlOnChange = useCallback((event) => {
    setUrl(event.target.value);
  }, []);

  return (
    <div>
      <div className='flex flex-column mt3'>
        <TextInput
          value={description}
          onChange={descriptionOnChange}
          placeholder='A description for the link'
        />
        <TextInput
          value={url}
          onChange={urlOnChange}
          placeholder='The URL for the link'
        />
      </div>
      <Button onClick={() => console.log('clicked')}>Submit</Button>
    </div>
  );
};

export default CreateLink;
