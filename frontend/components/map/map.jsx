import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import { Link } from 'react-router-dom';

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
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: window.googleAPIKey }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={37.783964}
            lng={-122.2446203}
            text={<Link to="/dispensaries/1"><img alt="Harborside" title="Harborside" className="dispensary-icon" src="images/icons/dispensary.png" /></Link>}
          />
          <AnyReactComponent
            lat={37.8075029}
            lng={-122.2710114}
            text={<Link to="/dispensaries/2"><img alt="Cookies Oakland" title="Cookies Oakland" className="dispensary-icon" src="images/icons/dispensary.png" /></Link>}
          />
          <AnyReactComponent
            lat={37.8305917}
            lng={-122.2817009}
            text={<Link to="/dispensaries/3"><img alt="MedMen - Emeryville" title="MedMen - Emeryville" className="dispensary-icon" src="images/icons/dispensary.png" /></Link>}
          />
          <AnyReactComponent
            lat={37.7505691}
            lng={-122.255776}
            text={<Link to="/dispensaries/4"><img alt="High Times Oakport" title="High Times Oakport" className="dispensary-icon" src="images/icons/dispensary.png" /></Link>}
          />
          <AnyReactComponent
            lat={37.81252}
            lng={-122.2731354}
            text={<Link to="/dispensaries/5"><img alt="Blum - Oakland" title="Blum - Oakland" className="dispensary-icon" src="images/icons/dispensary.png" /></Link>}
          />
          <AnyReactComponent
            lat={37.7756794}
            lng={-122.278593}
            text={<Link to="/dispensaries/6"><img alt="Embarc Alameda" title="Embarc Alameda" className="dispensary-icon" src="images/icons/dispensary.png" /></Link>}
          />
          <AnyReactComponent
            lat={37.7550126}
            lng={-122.2426183}
            text={<Link to="/dispensaries/7"><img alt="STIIIZY UNION SQUARE" title="STIIIZY UNION SQUARE" className="dispensary-icon" src="images/icons/dispensary.png" /></Link>}
          />
          <AnyReactComponent
            lat={37.7772354}
            lng={-122.4255998}
            text={<Link to="/dispensaries/8"><img alt="Fig &amp; Thistle Apothecary" title="Fig &amp; Thistle Apothecary" className="dispensary-icon" src="images/icons/dispensary.png" /></Link>}
          />
          <AnyReactComponent
            lat={37.762401}
            lng={-122.4370063}
            text={<Link to="/dispensaries/9"><img alt="Eureka Sky" title="Eureka Sky" className="dispensary-icon" src="images/icons/dispensary.png" /></Link>}
          />
          <AnyReactComponent
            lat={37.7644136}
            lng={-122.3967761}
            text={<Link to="/dispensaries/10"><img alt="Authentic 415" title="Authentic 415" className="dispensary-icon" src="images/icons/dispensary.png" /></Link>}
          />
          <AnyReactComponent
            lat={37.7994203}
            lng={-122.4435808}
            text={<Link to="/dispensaries/11"><img alt="The Apothecarium - Marina" title="The Apothecarium - Marina" className="dispensary-icon" src="images/icons/dispensary.png" /></Link>}
          />
          <AnyReactComponent
            lat={37.8047045}
            lng={-122.3307551}
            text={<Link to="/dispensaries/12"><img alt="CBCB" title="CBCB" className="dispensary-icon" src="images/icons/dispensary.png" /></Link>}
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default SimpleMap;

