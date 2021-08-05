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
        <ul>
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
