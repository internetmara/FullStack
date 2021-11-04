import React from "react";

class OrderIndexItem extends React.Component {
  render() {
    const { id, prod_name, dispo_pic, dispo_name, quantity, prod_pic, dispo_id, prod_id, userOrders } = this.props
    return(
      <div className="order-left">
        <h1 className="delivery-header">Your delivery order:</h1>
        <div className="dispensary-order-box">
          <img className="dispo_pic" src={dispo_pic}/>
          <div className="dispensary-order-info">
            <h1 className="dispo_name">{dispo_name}</h1>
            <div className="dispensary-sub-heading">
              <div className="stars">
                <img className="stars" src="/images/icons/star.png" />
                <img className="stars" src="/images/icons/star.png" />
                <img className="stars" src="/images/icons/star.png" />
                <img className="stars" src="/images/icons/star.png" />
                <img className="stars" src="/images/icons/star.png" />&nbsp;5.0 (420)
              </div>
            </div>
          </div>
        </div>
        <h1 className="order-header">Your items:</h1>
        <div className="order-products">
          <h1 className="prod_name">{prod_name}</h1>
          {/* <h1 className="id">{id}</h1> */}
          <h1 className="quantity">Quantity: {quantity}</h1>
          <img className="prod_pic" src={prod_pic}/>
          {/* <h1 className="dispo_id">{dispo_id}</h1> */}
          {/* <h1 className="prod_id">{prod_id}</h1> */}
        </div>
      </div>
    )
  }
}

export default OrderIndexItem;