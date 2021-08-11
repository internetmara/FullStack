import React from 'react';
class QuantitySelector extends React.Component {
  constructor(props) {
    super(props);

    this.state = { value: 1 }
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }

  increment() {
    this.setState({value: this.state.value+1});
  }

  decrement() {
    this.setState({ value: this.state.value > 0 ? this.state.value-1 : 0 });
  }

  render() {

    return (
        <div className="quantity-selector-wrapper">
          <button disabled="" data-test-id="segment-minus-button" data-testid="minus-button" aria-label="Reduce Quanity by 1" className="quantity-selector-button" onClick={this.decrement}>
           <div className="sc-bdnxRM jvCTkj" style={{width:20, height:20}}>
             <svg width="100%" height="100%" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
               <polygon fill="#666666" points="448,224 64,224 64,288 448,288"/>
             </svg>
           </div>
         </button>

          <div className="current-quantity">{this.state.value}</div>

          <button data-test-id="segment-plus-button" data-testid="plus-button" aria-label="Increase Quanity by 1" className="quantity-selector-button" onClick={this.increment}>
            <div className="sc-bdnxRM jvCTkj" style={{ width: 20, height: 20 }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 512 512">
                <polygon fill="#666666" points="448,224 288,224 288,64 224,64 224,224 64,224 64,288 224,288 224,448 288,448 288,288 448,288 " />
              </svg>
            </div>
          </button>
        </div>
    );
  }
}

export default QuantitySelector;
