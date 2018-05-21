import React, { Component } from 'react';
import ResourceName from '../components/ResourceName';
import ResourceCategory from '../components/ResourceCategory';
// import ResourceExpire from '../components/ResourceExpire';
import ResourceDescription from '../components/ResourceDescription';

class ResourceFormContainer extends Component {
  constructor(props){
    super(props)
    this.state={
      name: '',
      category_res: '0',
      description: ''
    }
  this.handleName = this.handleName.bind(this);
  this.handleCategory = this.handleCategory.bind(this);
  this.handleDescription = this.handleDescription.bind(this);

  this.callFetch=this.callFetch.bind(this);
  this.addResource = this.addResource.bind(this);
  this.handleClear = this.handleClear.bind(this);
  }

  handleName(event) {
    let newName = event.target.value
      this.setState({ name: newName })
      console.log("handleName works");
  }

  handleCategory(event) {
    let newCategory = event.target.value
      this.setState({ category_res: newCategory })
      console.log("handleCategory works");
  }

  handleDescription(event) {
    let newDescription = event.target.value
      this.setState({description: newDescription })
      console.log("handleDescription works");
  }
  addResource(event) {
    event.preventDefault();
    let formPayload = {
      resource: {
        name: this.state.name,
        category_res: this.state.category_res,
        description: this.state.description
      }
    };

    this.callFetch(formPayload);
    this.handleClear(event)
    console.log("addResource works");
  }

  callFetch(formPayload){

    fetch(`/api/v1/resources.json`, {
      credentials: 'same-origin',
      method: 'POST',
      body: JSON.stringify(formPayload),
      headers: {
        'Content-Type': 'application/json',
      }
    })
    .then(response => {
        if (response.ok) {
          return response;
        } else {
          let errorMessage = `${response.status} (${response.statusText})`,
              error = new Error(errorMessage);
          throw(error);
        }
      })
      .then(response => response.json())
      .then(body => {
        this.setState({ resource: body.resource.text,
        newResource: '' });
      })
      .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  handleClear(event) {
    this.setState({
      name: '',
      category_res: '0',
      // expire_date: '',
      description: ''
    })
    console.log("handleClear works");
  }

  render(){
    return(
      <form onSubmit={this.addResource} className="forms-imported">
        <div>
          <ResourceName
            label="Name:"
            handleName={this.handleName}
            name={this.state.name}
          />
        </div>
        <div>
          <ResourceCategory
            label="Type:"
            handleCategory={this.handleCategory}
            category_res={this.state.category_res}
          />
        </div>

        <div>
          <ResourceDescription
            label="Description"
            handleDescription={this.handleDescription}
            description={this.state.description}
          />
        </div>

        <input className="button" type="submit" value="Submit" />
        <button className="button btn-clear" type="button" onClick={this.handleClear}>Clear</button>
      </form>
    )
  }
}

export default ResourceFormContainer;
