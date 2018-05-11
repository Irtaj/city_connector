import React from 'react';

const CompanyTitleField = (props) => {
  return(
    <div>
      {props.label}
    </div>
    <input
      name ={props.name}
      type ='text'
      value={props.title}
      onCHange={props.handleTitle}
    />
  )
}

export default CompanyTitleField;
