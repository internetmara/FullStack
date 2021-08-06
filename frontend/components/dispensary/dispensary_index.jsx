import React from 'react';
import DispensaryItem from './dispensary_item';

class DispensaryIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchDispensaries();
  }

  render() {
    const { dispensaries } = this.props;
    return (
      
      <div>
        <div align="center">Hello I am drug dealer buy my drugs wow 420 lol</div>
        <br />
        <ul>
          <div class="slider">
            <div class="slides">
              <div id="slide-1">
                Buy weed
              </div>
              <div id="slide-2">
                Terpenes are cool
              </div>
              <div id="slide-3">
                Fuck the Man
              </div>
              <div id="slide-4">
                I'm really high
              </div>
              <div id="slide-5">
                Break Stuff, Steal Things!
              </div>
            </div>
            <a href="#slide-1">.</a>
            <a href="#slide-2">.</a>
            <a href="#slide-3">.</a>
            <a href="#slide-4">.</a>
            <a href="#slide-5">.</a>
          </div>
          {
            dispensaries.map(dispensary => (
              <DispensaryItem
                key={`dispensary${dispensary.id}`}
                dispensary={dispensary} />
            )
            )
          }
        </ul>
      </div>
    )
  }
}

export default DispensaryIndex;
