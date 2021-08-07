import React from 'react';


export default ({ dispensary }) => {
  return (
    <li>
      <br/>
      <img className="dispensary-img" src={dispensary.url}/>
      <h3>{dispensary.name}</h3>
      <br />
    </li>
  );
}
