import React from 'react';
import { Link } from 'react-router-dom';

class PopupCheckout extends React.Component {
  render() {
    return (
      <div className='popup'>
        <div className='popup-inner'>
          <div className='popup-inner-2'>
            <button className='popup-close' onClick={() => { this.props.closePopup; this.props.clearOrder() }}>X</button>
            <div className='popup-header-checkout'>HashMaps is an app clone that unfortunately does not sell actual weed. Maybe one day, but until then feel free to keep browsing!</div>
            <div className='popup-gif'><iframe src="https://giphy.com/embed/d3mm7z65NYqd9gwU" width="250" height="250" frameBorder="0" className="giphy-embed" allowFullScreen></iframe></div>
            <div className='continue-shopping'>
              <button className='popup-button'><Link to='/products'>Continue Shopping</Link></button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PopupCheckout;