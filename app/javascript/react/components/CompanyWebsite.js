import React from 'react';

const CompanyWebsite = (props) => {
  return(
    <div>
      <label>
        {props.label}
      </label>
      <textarea
        name={props.website}
        type='text'
        value={props.website}
        onChange={props.handleWebsite}
      />
    </div>
  )
}

export default CompanyWebsite;
