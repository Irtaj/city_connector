import React, { Component } from "react";
import { Link } from 'react-router';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";

class MapContainer extends Component {
  constructor(props){
    super(props)
    this.state ={
      location: '',
    }
    this.initMap=this.initMap.bind(this)
    this.callMap=this.callMap.bind(this)
  }

  componentDidMount(){
    this.callMap()
    console.log("componentDidMount works!");
  }

  initMap(){
    let launch = "https://maps.googleapis.com/maps/api/geocode/json?address=77+Summer+Street,+Boston,+MA&key=AIzaSyBVOiucn_VXeA0JPdH_sRXmJYVLarZ0Fik"
    let boston = {lat: 42.36008, lng: -71.05888}
    let map = new google.maps.Map(document.getElementById('map'), {
      zoom: 14,
      center: boston
    });
    let marker = new google.maps.Marker({
      position: boston,
      map: map
    });
    fetch('/api/v1/companies')
      .then(response => {
        if (response.ok){
          return response;
        } else {
          let errorMessage = `${response.status} (${response.statusText})`,
            error = new Error(errorMessage);
          throw(error);
        }
      })
      .then(response => response.json())
      .then(body => {
        this.setState({
          companies: body,
          // companiesAddress: body
        });
      })
      .catch(error => console.error(`Error in ${error.message}`));

    console.log("initMap works!")
  }

  callMap(){
    window.initMap = this.initMap
    loadJS("https://maps.googleapis.com/maps/api/js?key=AIzaSyBVOiucn_VXeA0JPdH_sRXmJYVLarZ0Fik&callback=initMap")
    console.log("callMap works!");
  }

  // initialize() {
  //   let geocoder;
  //   let map;
  //   let formattedAddress = GeocoderRequest({address: props.address})
  //   geocoder = new google.maps.Geocoder({address: props.address});
  //
  //   map = new google.maps.Map(document.getElementById('map'), mapOptions);
  // }

  // codeAddress() {
  //   var address = document.getElementById('address').value;
  //   geocoder.geocode( { 'address': address}, function(results, status) {
  //     if (status == 'OK') {
  //       map.setCenter(results[0].geometry.location);
  //       var marker = new google.maps.Marker({
  //           map: map,
  //           position: results[0].geometry.location
  //       });
  //     } else {
  //       alert('Geocode was not successful for the following reason: ' + status);
  //     }
  //   });
  // }

  render(){

    return(
      <div className="map" id="map"> </div>

    )
  }

}

export default MapContainer;

function loadJS(src) {
  let ref = window.document.getElementsByTagName("script")[0];
  let script = window.document.createElement("script");
  script.src = src;
  script.async = true;
  ref.parentNode.insertBefore(script, ref);
}

// https://maps.googleapis.com/maps/api/geocode/json?address=77+Summer+Street,+Boston,+MA&key=AIzaSyBVOiucn_VXeA0JPdH_sRXmJYVLarZ0Fik
