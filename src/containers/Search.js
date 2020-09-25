import React, { useCallback, useState } from 'react';
import { withApollo } from 'react-apollo';
import gql from 'graphql-tag';
import Link from '../components/Link';
import TextInput from '../components/TextInput';
import Button from '../components/Button';

const FEED_SEARCH_QUERY = gql`
  query FeedSearchQuery($filter: String!) {
    feed(filter: $filter) {
      links {
        id
        url
        description
        createdAt
        postedBy {
          id
          name
        }
        votes {
          id
          user {
            id
          }
        }
      }
    }
  }
`;

const Search = ({ client }) => {
  const [links, setLinks] = useState([]);
  const [filter, setFilter] = useState('');

  const searchOnChange = useCallback((event) => {
    setFilter(event.target.value);
  }, []);

  const _executeSearch = useCallback(async () => {
    const result = await client.query({
      query: FEED_SEARCH_QUERY,
      variables: { filter },
    });
    const links = result.data.feed.links;
    setLinks(links);
  }, [client, filter]);

  const buttonOnClick = useCallback(() => {
    _executeSearch();
  }, [_executeSearch]);

  return (
    <div>
      <div>
        Search <TextInput value={filter} onChange={searchOnChange} />
        <Button onClick={buttonOnClick}>OK</Button>
      </div>
      {links.map((link, index) => (
        <Link key={link.id} link={link} index={index} />
      ))}
    </div>
  );
};

export default withApollo(Search);
