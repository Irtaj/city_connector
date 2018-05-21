import React, { Component } from "react";
import { Link } from 'react-router';
import CompanyTile from '../components/CompanyTile';

class SearchBar extends Component{
  constructor (props){
    super(props);
    this.state={
      companies: [],
      value: '',
      finalQueries: []
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }
  componentDidMount(){
    fetch('/api/v1/companies')
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
          companies: body,
        });

      })
      .catch(error => console.error(`Error in ${error.message}`));
  console.log("SearchBar componentDidMount works!");
  }

  handleChange(event){
    this.setState({
      value: event.target.value
    })
  }

  handleSubmit(event) {
    // alert('A search was submitted: ' + this.state.value);
    event.preventDefault();
    let companyResult = {
      value: this.state.value
    }
    this.filteredCompanies(companyResult)
  }

  filteredCompanies(companyResult) {
    let queryResults = []
    let value = companyResult.value.toString().toLowerCase();
    this.state.companies.forEach((company) => {
      if (company["name"].toLowerCase().includes(value)) {
       queryResults.push(company)
     }
      this.setState({ finalQueries: queryResults })
    })
  }

  render(){
    let finalQueries = this.state.finalQueries.map(company => {
  return(
    <CompanyTile
      key = {company.id}
      id = {company.id}
      name = {company.name}
      description = {company.description}
    />
  )
})
    return(
    <div>
    <form onSubmit={this.handleSubmit}>
      <label className = "search-field">
        <input
          placeholder = "Search Companies..."
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
        />
      </label>
        <input
          type = 'submit'
          value = 'Submit'
        />
    </form>
    <div className="search-results">
      {finalQueries}
    </div>
    </div>
    )
  }
}

export default SearchBar;
