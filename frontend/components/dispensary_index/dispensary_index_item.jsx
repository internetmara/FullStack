import React from 'react';
import {
  Link,
  Route,
} from 'react-router-dom';

export default ({ dispensary }) => {
  return (
    <li>
      <br/>
      <Link to={`/dispensaries/${dispensary.id}`}>
      <img className="dispensary-img" src={dispensary.url}/>
      <h3>{dispensary.name}</h3>
      </Link>
      <br />
    </li>
  );
}
