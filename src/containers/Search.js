import React, { useCallback, useState } from 'react';
import { withApollo } from 'react-apollo';
import gql from 'graphql-tag';
import Link from '../components/Link';
import TextInput from '../components/TextInput';
import Button from '../components/Button';

const Search = () => {
  const [links, setLinks] = useState([]);
  const [filter, setFilter] = useState('');

  const searchOnChange = useCallback((event) => {
    setFilter(event.target.value);
  }, []);

  const _executeSearch = async () => {};

  const buttonOnClick = useCallback(() => {
    _executeSearch();
  }, []);

  return (
    <div>
      <div>
        Search <TextInput value={filter} onChange={searchOnChange} />
        <Button onClick={buttonOnClick}>OK</Button>
      </div>
    </div>
  );
};

export default withApollo(Search);
