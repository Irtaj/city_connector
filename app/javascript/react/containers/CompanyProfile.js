import React from 'react';

class CompanyProfile extends React.Component{
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
            <p className="edit-company-info">(Edit Company Info)</p>
            <p>Location:</p>
            <ul>
              <li>{this.state.company.street}, {this.state.company.suite}</li>
              <li>{this.state.company.city}, {this.state.company.state} {this.state.company.zip}</li>
            </ul>
            <p>Phone: {this.state.company.phone}</p>
            <p>Email: {this.state.company.email}</p>
          <h4>Profile</h4>
            <p>{this.state.company.description}</p>
          <h4>Services</h4>
          <h4>Employees</h4>

        </div>
        <div className="small-8 medium-8 large-8 columns">
          <div className="company-alerts">
            Alerts & chat box goes here
          </div>
          <div className="company-edit-form">
            Company editing form goes here
          </div>
        </div>
      </div>
    )
  }
}

export default CompanyProfile;
