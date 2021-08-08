import React from 'react';
import { Link } from 'react-router-dom';

import DispensaryShowItem from './dispensary_show_item';
import { ProtectedRoute } from '../../utils/route_util';

const DispensaryShow = ({ dispensary, dispensaryId, fetchdispensary, reviews }) => {
  const dispensaries = {
    [dispensaryId]: dispensary
  };

  return (
    <div className="single-dispensary-show">
      <div className="single-dispensary-map">
        <Link to="/">Back to dispensaries Index</Link>
      </div>
      <div className="right-half dispensary-details">
        <DispensaryShowItem dispensary={dispensary} />
      </div>
    </div>
  );
};

export default DispensaryShow;
