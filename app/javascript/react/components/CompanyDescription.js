import React from 'react';

const CompanyDescription = (props) => {
  return(
    <div>
      <label>
        {props.label}
      </label>
      <textarea
        name={props.description}
        type='text'
        value={props.description}
        onChange={props.handleDescription}
      />
    </div>
  )
}

export default CompanyDescription;
