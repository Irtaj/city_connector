import React, { Component } from 'react';
import CompanyCategory from '../components/CompanyCategory';
import CompanyName from '../components/CompanyName';
import CompanyDescription from '../components/CompanyDescription';
import CompanyWebsite from '../components/CompanyWebsite';
import CompanyAddress from '../components/CompanyAddress';
import CompanyEmail from '../components/CompanyEmail';
import CompanyNumber from '../components/CompanyNumber';

class CompanyFormContainer extends Component {
  constructor(props){
    super(props)
    this.state={
      category_comp: '0',
      name: '',
      description: '',
      website: '',
      address: '',
      mn_phone: '',
      mn_email: ''
    }
  this.handleCategory = this.handleCategory.bind(this);
  this.handleName = this.handleName.bind(this);
  this.handleDescription = this.handleDescription.bind(this);
  this.handleWebsite = this.handleWebsite.bind(this);
  this.handleAddress = this.handleAddress.bind(this);
  this.handlePhone = this.handlePhone.bind(this);
  this.handleEmail = this.handleEmail.bind(this);

  this.addCompany = this.addCompany.bind(this)
  // this.successAlert = this.successAlert.bind(this)
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
      this.setState({ category_comp: newCategory })
      console.log("handleCategory works");
  }

  handleDescription(event) {
    let newDescription = event.target.value
      this.setState({ description: newDescription })
      console.log("handleDescrition works");
  }

  handleWebsite(event) {
    let newWebsite = event.target.value
      this.setState({ website: newWebsite })
      console.log("handleWebsite works");
  }

  handleAddress(event) {
    let newAddress = event.target.value
      this.setState({ address: newAddress })
      console.log("handleAddress works");
  }

  handlePhone(event) {
    let newPhone = event.target.value
      this.setState({ mn_phone: newPhone })
      console.log("handlePhone works");
  }

  handleEmail(event) {
    let newEmail = event.target.value
      this.setState({ mn_email: newEmail })
      console.log("handleEmail works");
  }

  addCompany(event) {
    event.preventDefault();

    let formPayload = {
      company: {
        name: this.state.name,
        category_comp: this.state.category_comp,
        description: this.state.description,
        website: this.state.website,
        address: this.state.address,
        mn_phone: this.state.mn_phone,
        mn_email: this.state.mn_email
      }
    };
    fetch(`/api/v1/companies.json`, {
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
        this.setState({ company: body.company.text,
        newCompany: '' });
      })
      .catch(error => console.error(`Error in fetch: ${error.message}`));
    this.handleClear(event)
    console.log("addCompany works");
    // alert('Company submission was successful!');

  }

  handleClear(event) {
    this.setState({
      category_comp: '0',
      name: '',
      description: '',
      website: '',
      address: '',
      mn_phone: '',
      mn_email: '',
    })
    console.log("handleClear works");
  }

  render(){
    return(
      <form onSubmit={this.addCompany} className="forms-imported">
        <div>
          <CompanyName
            label="Name:"
            handleName={this.handleName}
            name={this.state.name}
          />
        </div>
        <div>
          <CompanyCategory
            label="Type:"
            handleCategory={this.handleCategory}
            category={this.state.category_comp}
          />
        </div>
        <div>
          <CompanyDescription
            label="Description"
            handleDescription={this.handleDescription}
            description={this.state.description}
          />
        </div>
        <div>
          <CompanyWebsite
            label="Website"
            handleWebsite={this.handleWebsite}
            website={this.state.website}
          />
        </div>
        <div>
          <CompanyAddress
            label="Address"
            handleAddress={this.handleAddress}
            address={this.state.address}
          />
        </div>
        <div>
          <CompanyNumber
            label="Phone"
            handlePhone={this.handlePhone}
            mn_phone={this.state.mn_phone}
          />
        </div>
        <div>
          <CompanyEmail
            label="Email"
            handleEmail={this.handleEmail}
            mn_email={this.state.mn_email}
          />
        </div>
        <input className="button" type="submit" value="Submit" />
        <button className="button btn-clear" onClick={this.handleClear}>Clear</button>
      </form>
    )
  }
}

export default CompanyFormContainer;
