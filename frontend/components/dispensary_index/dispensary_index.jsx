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
          <br/>
          <h2 className="featured-dispensaries">Featured dispensaries</h2>
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
