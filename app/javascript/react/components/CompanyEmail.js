import React from 'react';

const CompanyEmail = (props) => {
  return(
    <div>
      <label>
        {props.label}
      </label>
      <textarea
        name={props.mn_email}
        type='text'
        value={props.mn_email}
        onChange={props.handleEmail}
      />
    </div>
  )
}

export default CompanyEmail;
