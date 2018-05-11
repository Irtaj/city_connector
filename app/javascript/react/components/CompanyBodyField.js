import React from 'react';

const CompanyBodyField = (props) => {
  return(
    <div>
      <label>
        {props.label}
      </label>
      <textarea
        name={props.name}
        type='text'
        value={props.body}
        onChange={props.handleBody}
      />
    </div>
  )
}

export default CompanyBodyField;
