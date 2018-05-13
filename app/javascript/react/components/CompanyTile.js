import React from 'react';
import { Link } from 'react-router';

const CompanyTile = props => {
  return (
    <div>
      <h3>{props.name}</h3>
      <div className="row" id={props.category}>
        <p className="small-2 medium-2 large-2 columns" onClick={props.onClick}>Alerts</p>
        <p className="small-2 medium-2 large-2 columns"><Link to={`/companies/${props.id}`}>Profile</Link></p>
        <p className="small-2 medium-2 large-2 columns" id="btn-distance" onClick={props.onClick}>Distance</p>
      </div>
    </div>
  )
}

export default CompanyTile;
