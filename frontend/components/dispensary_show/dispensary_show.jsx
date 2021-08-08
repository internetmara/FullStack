import React from 'react';
import DispensaryShowItem from './dispensary_show_item';

class DispensaryShow extends React.Component {
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
         <DispensaryShowItem/>
      </div>
    )
  }
}

export default DispensaryShow;
