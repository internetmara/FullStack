import React from 'react';

class PopupVenmo extends React.Component {
  render() {
    return (
      <div className='popup'>
        <div className='popup_inner'>
          <div>
            <div className='popup-header'>Venmo: @jellymara</div>
            <div className='popup-gif'><iframe src="https://giphy.com/embed/pVM1TXCV1Jny1aSlcH" width="250" height="250" frameBorder="0" className="giphy-embed" allowFullScreen></iframe></div>
            <div className='popup-close'><button className='popup-button' onClick={this.props.closePopup}>Continue Shopping</button></div>
          </div>
        </div>
      </div>
    );
  }
}

export default PopupVenmo;