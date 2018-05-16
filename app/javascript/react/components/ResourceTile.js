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

  return (
    <div>
     TEST RESOURCETILE
      {resourcesNeeded}
      {urgentNotice}
    </div>
  )
}

export default ResourceTile;