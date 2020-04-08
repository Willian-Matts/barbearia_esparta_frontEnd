import React, { Component }  from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: -15.1746014,
      lng: -49.8083994
    },
    zoom: 18
  };

  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyCZQdWZWsNyakL30EbvVherjO4c9HcqFc8" /*  AIzaSyCyNMUjPXsAannalkp24V9fWm6ItMsZGCo -  KEY da API do Google */ }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={-15.1746014}
            lng={-49.8083994}
            text="Barbearia Esparta" 
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default SimpleMap;