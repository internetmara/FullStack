import React from 'react';
import {
  Link,
} from 'react-router-dom';

export default ({ dispensary }) => {
  return (
    <li>
      <br/>
      <Link to={`/dispensaries/${dispensary.id}`}>
      <img className="dispensary-img" src={dispensary.photoUrl}/>
      <h3 className="dispensary-index-name">{dispensary.name}</h3>
      </Link>
    </li>
  );
}
