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
        Orders here!
      </Link>
      <br />
    </li>
  );
}
