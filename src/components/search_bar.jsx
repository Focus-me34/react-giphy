import React, { Component } from "react"

class SearchBar extends Component {

  handleUpdate = (e) => {
    this.props.search(e.target.value)
  };

  render() {
    return (
      <input type="text" className="form-control form-search" placeholder="Search for something" onChange={this.handleUpdate} />
    )
  }
}

export default SearchBar
