import React from 'react';
import { Link } from 'react-router';

const ResourceTile = (props) => {
  let resourcesNeeded;
    if (props.needed && props.expire <= time.current){
        resourcesNeeded = `Name: ${props.name} <br>Type: ${props.name} <br>Needed By: ${props.expire}`
    }

  let urgentNotice;
    if (props.urgent === true){
      urgentNotice = 'This request is urgent!'
    }

    let category;
    if (props.category===1){
      category = "Clothing Supplies"
    }else if (props.category==2) {
      category = "Food Supplies"
    }else if (props.category==3) {
      category = "Legal Aid"
    }else if (props.category==4) {
      category = "Shelter"
    }else if (props.category==5) {
      category = "Transportation Services"
    }

  return (
      <ul className="alerts">
        <li className= "alert-category">{category}:</li>
        <li>{props.name} - {props.description}</li>
      </ul>
  )
}

export default ResourceTile;
