import React, { Component } from "react";
import ResourceTile from '../components/ResourceTile';

class ResourceList extends Component{
  constructor(props){
    super(props);
    this.state = {
      resources:[],
    }
  }

  componentDidMount(){
    fetch('/api/v1/resources')
      .then(response => {
        if (response.ok){
          return response;
        } else {
          let errorMessage = `${response.status} (${response.statusText})`,
            error = new Error(errorMessage);
          throw(error);
        }
      })
      .then(response => response.json())
      .then(body => {
        this.setState({
          resources: body,
        });
      })
      .catch(error => console.error(`Error in ${error.message}`));
  }

  render(){
    let resources = this.state.resources.map(resource => {

      return(
        <ResourceTile
          key={resource.id}
          id={resource.id}
          name={resource.name}
          category={resource.category_res}
          needed={resource.needed}
          expire={resource.expire_date}
        />
      )
    })

    return(
      <div>
        <ul>
          {resources}
        </ul>
      </div>
    )
  }
}


export default ResourceList;
