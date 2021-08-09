import React from 'react';
import {
  Link,
  Route,
} from 'react-router-dom';

export default ({ order }) => {
  return (
    <li>
      <br />
      <Link to={`/orders/${order.id}`}>
        <img className="dispensary-img" src={dispensary.url} />
        <h3>{dispensary.name}</h3>
      </Link>
      <br />
    </li>
  );
}
