import React from "react";

class OrderIndexItem extends React.Component {
  render() {
    const { id, prod_name, prod_price, prod_size, dispo_pic, dispo_name, quantity, prod_pic, dispo_id, prod_id, userOrders } = this.props
    return(
      <div className="order-product-container">
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
  
        <div className="products-order-box">
          <img className="prod_pic" src={prod_pic}/>
          
          <div className="product-order-info">
          <h1 className="prod_name">{prod_name}</h1>
          <h1 className="prod_price">${prod_price}.00</h1>
          <h1 className="prod_size">{prod_size}</h1>
          <h1 className="id">{id}</h1>
          <h1 className="quantity">Quantity: {quantity}</h1>
          {/* <h1 className="dispo_id">{dispo_id}</h1> */}
          {/* <h1 className="prod_id">{prod_id}</h1> */}
          </div>

        </div>

      </div>
    )
  }
}

export default OrderIndexItem;