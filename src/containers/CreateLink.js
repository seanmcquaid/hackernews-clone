import gql from 'graphql-tag';
import React, { useCallback, useState } from 'react';
import { Mutation } from 'react-apollo';
import { useHistory } from 'react-router';
import Button from '../components/Button';
import TextInput from '../components/TextInput';

const POST_MUTATION = gql`
  mutation PostMutation($description: String!, $url: String!) {
    post(description: $description, url: $url) {
      id
      createdAt
      url
      description
    }
  }
`;

const CreateLink = () => {
  const [description, setDescription] = useState('');
  const [url, setUrl] = useState('');
  const history = useHistory();

  const descriptionOnChange = useCallback((event) => {
    setDescription(event.target.value);
  }, []);

  const urlOnChange = useCallback((event) => {
    setUrl(event.target.value);
  }, []);

  const onComplete = useCallback(() => {
    history.push('/');
  }, [history]);

  return (
    <div>
      <div className='flex flex-column mt3'>
        <TextInput
          value={description}
          onChange={descriptionOnChange}
          placeholder='A description for the link'
          type='text'
        />
        <TextInput
          value={url}
          onChange={urlOnChange}
          placeholder='The URL for the link'
          type='text'
        />
      </div>
      <Mutation
        mutation={POST_MUTATION}
        variables={{ description, url }}
        onCompleted={onComplete}
      >
        {(postMutation) => <Button onClick={postMutation}>Submit</Button>}
      </Mutation>
    </div>
  );
};

export default CreateLink;
