import React from 'react';


export default ({ dispensary }) => {
  return (
    <div>
      <ul className="dispensary-list">
        {/* <img className="dispensary-img" src={dispensary.url} />
        <li>Name: {dispensary.name}</li> */}
        <p className="theory">In theory this is a dispensary...</p>
        <p className="sub-theory">There should be products here, but there's not. My bad.</p>
      </ul>
    </div>
  );
}
