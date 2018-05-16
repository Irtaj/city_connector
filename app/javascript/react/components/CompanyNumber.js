import React from 'react';

const CompanyNumber = (props) => {
  return(
    <div>
      <label>
        {props.label}
      </label>
      <textarea
        name={props.mn_phone}
        type='text'
        value={props.mn_phone}
        onChange={props.handlePhone}
      />
    </div>
  )
}

export default CompanyNumber;
