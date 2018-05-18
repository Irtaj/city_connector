import React from 'react';

const ResourceCategory = (props) => {
  return (
    <div>
      <label>
        {props.label}
      </label>
      <select onChange={props.handleCategory} value={props.category_res}>
        <option value={0}> </option>
        <option value={1}>Clothing Supplies</option>
        <option value={2}>Food Supplies</option>
        <option value={3}>Legal Aid</option>
        <option value={4}>Shelter</option>
        <option value={5}>Transportation Services</option>
      </select>
    </div>
  )
}

export default ResourceCategory;
