import React from 'react';
import { Link } from 'react-router';

const CompanyTile = props => {
  return (
    <div className="comp-tile">
      <h3 className="company-list-h3"><Link to={`/companies/${props.id}`}>{props.name}</Link></h3>
    </div>
  )
}

export default CompanyTile;
