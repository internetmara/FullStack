import React from 'react';
import { Link } from 'react-router-dom';

class PopupCheckout extends React.Component {
  render() {
    return (
      <div className='popup'>
        <div className='popup-inner'>
          <button className='popup-close' onClick={() => { this.props.closePopup() }}>x</button>
          <div className="popup-inner2">
            <div className='popup-header-additems'>HashMaps is an app clone that unfortunately does not sell actual weed. Maybe one day... but until then, feel free to add some items so we can pretend!</div>
            <div className='continue-shopping'>
              <div className='popup-gif'><iframe src="https://giphy.com/embed/d3mm7z65NYqd9gwU" width="250" height="250" frameBorder="0" className="giphy-embed" allowFullScreen></iframe></div>
              <br/>
              <button className='popup-button'><Link to='/'>Continue Shopping</Link></button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PopupCheckout;