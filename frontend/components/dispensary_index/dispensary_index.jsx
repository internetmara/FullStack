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
        <ul>
          <br/>
          <div className="slider">
            <div className="slides">
              <div id="slide-1">
                buy weed!!
              </div>
              <div id="slide-2">
                im high
              </div>
              <div id="slide-3">
                blaze it
              </div>
              <div id="slide-4">
                420 lol
              </div>
              <div id="slide-5">
                break stuff
                <br/>
                steal things!
              </div>
            </div>
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
