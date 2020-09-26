import gql from 'graphql-tag';
import React, { useCallback, useState } from 'react';
import { Mutation } from 'react-apollo';
import { useHistory } from 'react-router';
import Button from '../components/Button';
import TextInput from '../components/TextInput';
import { LINKS_PER_PAGE } from '../constants';
import { FEED_QUERY } from './LinkList';

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
    history.push('/new/1');
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
        update={(store, { data: { post } }) => {
          const first = LINKS_PER_PAGE;
          const skip = 0;
          const orderBy = 'createdAt_DESC';
          const data = store.readQuery({
            query: FEED_QUERY,
            variables: { first, skip, orderBy },
          });
          data.feed.links.unshift(post);
          store.writeQuery({
            query: FEED_QUERY,
            data,
            variables: { first, skip, orderBy },
          });
        }}
      >
        {(postMutation) => <Button onClick={postMutation}>Submit</Button>}
      </Mutation>
    </div>
  );
};

export default CreateLink;
