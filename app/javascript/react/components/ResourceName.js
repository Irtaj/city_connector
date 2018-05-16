import React from 'react';

const ResourceName = (props) => {
  return(
    <div>
      <label>
        {props.label}
      </label>
      <textarea
        name={props.name}
        type='text'
        value={props.name}
        onChange={props.handleName}
      />
    </div>
  )
}

export default ResourceName;
