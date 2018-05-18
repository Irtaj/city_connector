import React, { Component } from "react";
import { Link } from 'react-router';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";

class MapContainer extends Component {
  constructor(props){
    super(props)
    this.state ={
      companies: [],
    }
    this.initMap=this.initMap.bind(this)
    this.callMap=this.callMap.bind(this)
  }

  componentDidMount(){
    this.callMap()
    console.log("MapContainer componentDidMount works!");
  }

  callMap(){
    window.initMap = this.initMap
    loadJS("https://maps.googleapis.com/maps/api/js?key=AIzaSyC668sqglnHBxF-VWPbu3FYTzQfdmXzu2k&callback=initMap")
    console.log("callMap works!");
  }

  initMap(){
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
        });
        let allAddresses = []
        let companyAddresses = []
        let companies = this.state.companies.map(company => {
          allAddresses.push({name: company.name, address: company.address, lat: parseFloat(company.lat), lng: parseFloat(company.lng)})
        })
          this.setState({ companyAddresses: allAddresses })

         // Original Map
        let boston = {lat: 42.36008, lng: -71.05888}
        this.map = new google.maps.Map(document.getElementById('map'), {
          zoom: 14,
          center: boston
        });

        let locations = []
        this.state.companyAddresses.forEach(mapCompany => {
          locations.push([{name: mapCompany.name}, {lat: mapCompany.lat, lng: mapCompany.lng}])
        });

        let markers = []
        locations.forEach(location => {
          let marker = new google.maps.Marker({
            position: location[1],
            // label: location[0].name
          });
          markers.push(marker)
          marker.setMap(this.map)
        })
      })
      .catch(error => console.error(`Error in ${error.message}`));
      console.log("initMap works!")
  }

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
