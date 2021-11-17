// import {GoogleMap, withScriptjs, withGoogleMap} from 'react-google-maps';



// const Maps = (props) => {

// return (
// <GoogleMap defaultZoom={15}
// defaultCenter={{ lat: -29.407891, lng: -66.855719}}


// />


// );



// };
// export default withScriptjs(
//     withGoogleMap(
//         Maps
//     )
// )
import React, { Component } from "react";

import GoogleMaps from "simple-react-google-maps";
import credentials from "../credentials";
export default class Maps extends Component {
  render() {
    return (
    //   <div className="container">
        <GoogleMaps
          apiKey={"AIzaSyBqg6oKJkoBioCFWVYfed7EtabiNW26Rjo"}
          style={{ height: "400px" }}
          zoom={15}
          center={{
            lat:  -29.407891,
            lng: -66.855719
          }}
          markers={[
            { lat: -29.407891, lng: -66.855719 },
          ]}
        />
    //   </div>
    );
  }
}


