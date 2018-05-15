import React from 'react';

const CompanyAddress = (props) => {
  return(
    <div>
      <label>
        {props.label}
      </label>
      <textarea
        name={props.address}
        type='text'
        value={props.address}
        onChange={props.handleAddress}
      />
    </div>
  )
}

export default CompanyAddress;
