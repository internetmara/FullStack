import React from 'react';


export default ({ dispensary }) => {
  return (
    <div className="dispenssary-show">
      <div className="dispensary-info">
        <img className="dispensary-show-img" src={dispensary.url} />
        
        <div className="dispensary-show-info">
          <p className="dispensary-name">{dispensary.name}</p>

          <div className="dispensary-sub-heading">
            <div className="stars">
              <img className="stars" src="/images/icons/star.png" />
              <img className="stars" src="/images/icons/star.png" />
              <img className="stars" src="/images/icons/star.png" />
              <img className="stars" src="/images/icons/star.png" />
              <img className="stars" src="/images/icons/star.png" />&nbsp;5.0 (420)
            </div>
          </div>

          <p className="dispensary-address">{dispensary.address}</p>
          <div className="dispensary-details">
            <p className="storefront"><img className="dispensary-icon" src="/images/icons/store.png" />&nbsp;Storefront</p>
            <p className="in-store"><img className="dispensary-icon" src="/images/icons/clock.png" />&nbsp;Open until 8:00pm</p>
            <p className="dispensary-type"><img className="dispensary-icon" src="/images/icons/id-card.png" />&nbsp;{dispensary.dispensary_type}</p>
            <p className="in-store"><img className="dispensary-icon" src="/images/icons/check.png" />&nbsp;License information</p>
            <p className="in-store"><i className="fa fa-shopping-cart" />&nbsp;In-store purchases only</p>
            <p className="in-store"><img className="dispensary-icon" src="/images/icons/car.png" />&nbsp;Curbside pickup</p>
          </div>
        </div>

        <div classname="dispensary-search-bar"></div>

      </div>
    </div>
  );
}


