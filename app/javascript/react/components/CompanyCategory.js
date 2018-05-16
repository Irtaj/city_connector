import React from 'react';

const CompanyCategory = (props) => {
  return (
    <div>
      <label>
        {props.label}
      </label>
      <select onChange={props.handleCategory} value={props.category_comps}>
        <option value={0}> </option>
        <option value={1}>Clothing</option>
        <option value={2}>Food Pantry</option>
        <option value={3}>Legal</option>
        <option value={4}>Shelters</option>
        <option value={5}>Transportation</option>
      </select>
    </div>
  )
}

export default CompanyCategory;
