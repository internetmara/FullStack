import React from 'react';

export default ({ dispensary }) => {
  return (
    <li>
      <h3>{dispensary.name}</h3>
      <h3>{dispensary.address}</h3>
      <h3>{dispensary.type}</h3>
    </li>
  );
}
