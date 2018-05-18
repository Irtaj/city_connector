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
    let emailField;
    if (this.state.company.mn_email != null){
      emailField= this.state.company.mn_email
    }else{
      emailField= "No company email on file."
    }
    return (
      <div className="row">
        <div className="small-10 medium-10 large-10 columns company-profile-info">
            <h3 className="company-name-profile">{this.state.company.name}</h3>
              <p id="address"><b>Location:</b> {this.state.company.address}</p>
              <p><b>Phone:</b> {this.state.company.mn_phone}</p>
              <p><b>Email:</b> {emailField}</p>
            <h4>Profile</h4>
              <p>{this.state.company.description}</p>
        </div>
      </div>
    )
  }
}

export default CompanyProfile;
