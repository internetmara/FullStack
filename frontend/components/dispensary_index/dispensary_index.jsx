import React from 'react';
import DispensaryIndexItem from './dispensary_index_item';

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
        <br/>
        <div align="center">Hello I am drug dealer buy my drugs wow 420 lol</div>
        <br />
        <ul>
          <div className="slider">
            <div className="slides">
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
          <div className="dispensaries">
          {
            dispensaries.map(dispensary => (
                <DispensaryIndexItem key={`dispensary${dispensary.id}`} dispensary={dispensary} />
            )
            )
          }
          </div>
        </ul>
      </div>
    )
  }
}

export default DispensaryIndex;
