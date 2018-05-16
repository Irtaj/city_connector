import React, { Component } from 'react';
import ResourceName from '../components/ResourceName';
import ResourceCategory from '../components/ResourceCategory';
import ResourceExpire from '../components/ResourceExpire';
import ResourceDescription from '../components/ResourceDescription';

class ResourceFormContainer extends Component {
  constructor(props){
    super(props)
    this.state={
      name: '',
      category_res: '0',
      expire_date: '',
      description: ''
      // needed: false,
      // urgent: false
    }
  this.handleName = this.handleName.bind(this);
  this.handleCategory = this.handleCategory.bind(this);
  this.handleExpire = this.handleExpire.bind(this);
  this.handleDescription = this.handleDescription.bind(this);

  this.addResource = this.addResource.bind(this)
  // this.handleFormSubmit = this.handleFormSubmit.bind(this)
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

  handleExpire(event) {
    let newExpire = event.target.value
      this.setState({ expire_date: newExpire })
      console.log("handleExpire works");
  }

  handleDescription(event) {
    let newDescription = event.target.value
      this.setState({description: newDescription })
      console.log("handleDescription works");
  }

  addResource(event) {
    event.preventDefault();
    // debugger;
    let formPayload = {
      resource: {
        name: this.state.name,
        category_res: this.state.category_res,
        expire_date: this.state.expire_date,
        description: this.state.description
      }
    };
    fetch(`/api/v1/resources.json`, {
      credentials: 'same-origin',
      method: 'POST',
      body: JSON.stringify(formPayload),
      headers: {
        'Content-Type': 'application/json'
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
    console.log("addResource works");
    this.handleClear(event)
  }

  handleClear(event) {
    // event.preventDefault()
    this.setState({
      name: '',
      category_res: '0',
      expire_date: '',
      description: ''
    })
    console.log("handleClear works");
  }

  // handleFormSubmit(event) {
  //   event.preventDefault()
  //   let formPayload = {
  //     resource: {
  //       name: this.state.name,
  //       category_res: this.state.category_res,
  //       expire_date: this.state.expire_date,
  //       description: this.state.description
  //     }
  //   };
  //   this.props.addResource(formPayload)
  //   this.handleClear()
  // }

  render(){
    return(
      <form onSubmit={this.addResource}>
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
          <ResourceExpire
            label="Expiration Date"
            handleExpire={this.handleExpire}
            expire_date={this.state.expire_date}
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
        <button className="button" type="button" onClick={this.handleClear}>Clear</button>
      </form>
    )
  }
}

export default ResourceFormContainer;
