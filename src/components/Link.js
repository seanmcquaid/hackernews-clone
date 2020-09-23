import React from 'react';

const Link = ({ link: { description, url } }) => (
  <div>
    <iv>
      {description} ({url})
    </iv>
  </div>
);

export default Link;
