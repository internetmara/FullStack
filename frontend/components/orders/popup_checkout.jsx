import React from 'react';
import { Link } from 'react-router-dom';

class PopupCheckout extends React.Component {
  render() {
    return (
      <div className='popup'>
        <div className='popup_inner'>
          <div>
            <div className='popup-header'>Get some Weed!</div>
            <div className='popup-gif'><iframe src="https://giphy.com/embed/d3mm7z65NYqd9gwU" frameBorder="0" className="giphy-embed" allowFullScreen></iframe></div>
            <div className='popup-close'><button className='popup-button' onClick={() => { this.props.closePopup; this.props.clearOrder() }}><Link to='/products' className='continue-shopping'>Continue Shopping</Link> </button></div>
          </div>
        </div>
      </div>
    );
  }
}

export default PopupCheckout;