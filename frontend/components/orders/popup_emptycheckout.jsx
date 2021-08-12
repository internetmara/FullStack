import React from 'react';
import { Link } from 'react-router-dom';

class PopupCheckout extends React.Component {
  render() {
    return (
      <div className='popup'>
        <div className='popup_inner'>
          <div>
            <div className='popup-header'>Add Items to Order!</div>
            <div className='popup-close'><button className='popup-button' onClick={this.props.closePopup}><Link to='/dispensaries' className='continue-shopping'>Continue Shopping</Link></button></div>
          </div>
        </div>
      </div>
    );
  }
}

export default PopupCheckout;