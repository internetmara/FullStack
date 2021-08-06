import React from 'react';


export default ({ dispensary }) => {
  return (
    <li>
      <h3><b>Name: </b> {dispensary.name}</h3>
      <h3><b>Address: </b> {dispensary.address}</h3>
      <h3><b>Type: </b>{dispensary.dispensary_type}</h3>
    </li>
  );
}
