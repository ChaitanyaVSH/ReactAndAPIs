import React, { Component } from "react";
import "./SearchField.css";

class SearchField extends Component {
  state = {
    id: "",
  };

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  onSearch = () => {
    this.props.onSearch(this.state.id);
    this.setState({
      id: "",
    });
  };

  render() {
    const styles = {
      textAlign: "center",
      alignItems: "center",
      margin: 20,
      padding: 20,
      backgroundColor: "#ccc",
    };
    return (
      <div style={styles}>
        <input
          type="text"
          name="id"
          placeholder="Enter the ID of the course."
          onChange={this.onChange}
          value={this.state.id}
        />
        <button id="submit-id" onClick={this.onSearch}>
          Submit
        </button>
      </div>
    );
  }
}

export default SearchField;
