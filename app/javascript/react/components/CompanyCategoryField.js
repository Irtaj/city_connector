import React from 'react';

const CompanyCategoryField = (props) =>{
  return(
    <div>
      <label>
        {props.label}
      </label>
      <select onChange={props.handleCategory} value={props.rating}>
        <option value={1}>Shelter</option>
        <option value={2}>Food Pantry</option>
        <option value={3}>Transportation</option>
        <option value={4}>Legal Counseling</option>
        <option value={5}>Clothing Pickups</option>
      </select>
    </div>
  )
}

export default CompanyCategoryField;
