import React, { Component } from "react";
import { Link } from 'react-router';
import CompanyTile from '../components/CompanyTile';

class SearchBar extends Component{
  constructor (props){
    super(props);
    this.state={
      query: '',
      companies: [],
      search: '',
      finalResults: []
    }
    this.handleInputChange = this.handleInputChange.bind(this)
    // this.handleSearch = this.handleSearch.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    // this.handleChange = this.handleChange.bind(this)
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

        let searchableData = []
        let formattedAllData = []
        let companies = this.state.companies.map(company => {
          searchableData.push({name: company.name, description: company.description, category: company.category_comp})
        })
        this.setState({formattedAllData: searchableData})

        let searches = []
        this.state.formattedAllData.forEach(search => {
          searches.push([{name: search.name, description: search.description, category: search.category_comp}])
        });
        console.log(searches);
      })
      .catch(error => console.error(`Error in ${error.message}`));
  console.log("SearchBar componentDidMount works!");

  }

  handleInputChange(){
    this.setState({
      // query: this.searchBar.value
      search: event.target.value
    })
  }

  handleSubmit(event) {
    event.preventDefault()
    let formPayload = {
      search: this.state.search
    }
    this.filteredCompanies(formPayload)
  }

  filteredCompanies(formPayload) {
    let searchResults = []
    let search = formPayload.search.toString().toLowerCase();
    this.state.companies.forEach((company) => {
      if (company["name"].toLowerCase().includes(search)) {
       searchResults.push(company)
     }
      this.setState({ finalResults: searchResults })
    })
  }
  //
  // handleSearch(event){
  //   console.log(event.target.value)
  // {this.props.queriedInfo}
  // }
  render(){
    let finalResults = this.state.finalResults.map(company => {
  return(
    <CompanyList
      key = {company.id}
      id = {company.id}
      name = {company.name}
      description = {company.description}
    />
  )
})
    return(
    <div>
    <form>
      <input
        placeholder = "Search Companies..."
        id="search"
        type = "submit"
        value={this.state.search}
        ref = {input => this.searchBar = input}
        onChange = {this.handleInputChange}
        // onKeyUp = {this.handleSearch}
      />
      <input type = 'submit' value = 'Search' onClick = {this.handleInputChange}/>

    </form>
    <p className="searchTyping">{this.state.query}</p>
    <p>{finalResults}</p>
    </div>
    )
  }


}

export default SearchBar;
