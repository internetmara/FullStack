# HashMaps

HashmMaps, a Weedmaps clone, is a online directory that allows users to browse, purchase and locate cannabis dispensaries and products.

[Live Demo](https://hash-maps.herokuapp.com/#/)

## `Framework:`
* Ruby
* Rails
* React.js
* Redux.js
* PostgresSQL
* Webpack
* Amazon AWS S3

## `Setup:`
*To run locally on computer:*

In terminal:

1. `bundle install`
2. `npm install`

In computer:

3. Start PostgreSQL to start database

In terminal: 

4. `rails db:setup` to setup database 
5. `rails s` to start Rails Server 
6. `npm start` to start Webpack module bundler

In browser: 

7. `http://localhost:3000`

## `Features:`
* Demo User Sign In
  * Features a demo user log in for access to other functionality of the site without having to create a new user
demo

<p align="center">
  <img width="700" src="https://user-images.githubusercontent.com/76984497/129398668-f497ab92-70fd-48cf-bbed-4fb782101c4e.gif">
</p>

* HashMaps Home Page
  * Shows all dispensaries
  
<p align="center">
  <img width="700" src="https://user-images.githubusercontent.com/76984497/129398659-a0a84a3f-1a3c-4dd7-a37b-aae58e3b1e3b.gif">
</p>

* Dispensary Show Page
  * Shows a dispensary's inventory of products
  * Links to product show page

<p align="center">
  <img width="700" src="https://user-images.githubusercontent.com/76984497/129398670-c0e98ddf-643a-4bda-b0a1-03396c4def47.gif">
</p>

* Map
  * Shows the location of dispensaries
  * Clicking on a dispensary location links to the dispensary show page

<p align="center">
  <img width="700" src="https://user-images.githubusercontent.com/76984497/129398484-c89b0bc1-b6c9-4536-a424-5f786e67a71c.gif">
</p>

* Code to select product quantity 

```
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
```
