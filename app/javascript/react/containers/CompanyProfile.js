import React, { Component } from "react";
import CompanyFormContainer from './CompanyFormContainer';

class CompanyProfile extends Component{
  constructor(props){
    super(props);
    this.state={
      company: {},
      userId:'',
      companyId: this.props.params.id
    }
  }

  componentDidMount(){
    let companyId = this.state.companyId
    fetch(`/api/v1/companies/${companyId}`)
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
        this.setState({
          company: body.company,
          userId: body.user_id
        });
      })
    .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  render(){

    return (
      <div className="row">
        <div className="small-4 medium-4 large-4 columns company-profile-info">
          <h3>{this.state.company.name}</h3>
            <p className="edit-info">(Edit Company Info)</p>
            <p id="address"><b>Location:</b> {this.state.company.address}</p>
            <p><b>Phone:</b> {this.state.company.mn_phone}</p>
            <p><b>Email:</b> {this.state.company.mn_email}</p>
          <h4>Profile</h4>
            <p>{this.state.company.description}</p>
          <h4>Employees</h4>
        </div>
        <div className="small-7 medium-7 large-7 columns">
          <div className="company-alerts">
            Alerts & chat box goes here
          </div>
          <div className="company-edit-form">
            Company editing form goes here
            <CompanyFormContainer/>
          </div>
        </div>
      </div>
    )
  }
}

export default CompanyProfile;
