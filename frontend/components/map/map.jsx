import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 37.783964,
      lng: -122.2446203
    },
    zoom: 11
  };

  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '80vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyAHzF2U7v1T-jLd_A1PflTqQEILdCgy3Nk" }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={37.783964}
            lng={-122.2446203}
            text="🌿"
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default SimpleMap;

