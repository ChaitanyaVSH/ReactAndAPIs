import React, { Component } from "react";
import "./App.css";
import SearchField from "./components/searchField";

class App extends Component {
  state = {
    data: [],
    filteredData: [],
    loading: false,
  };

  componentDidMount() {
    // const PORT = process.env.PORT;
    // console.log(process.env);
    this.setState({
      loading: true,
    });
    fetch("http://127.0.0.1:5689/api/courses")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        this.setState({
          data: data,
          loading: false,
        });
      });
  }

  getData() {
    const styles = {
      margin: "auto",
      marginBottom: 10,
      padding: 10,
      color: "white",
      backgroundColor: "orange",
      width: "50%",
      alignItems: "center",
      boxShadow: "0px 1px 6px orange",
      border: "1px solid orange",
    };

    if (this.state.data.length > 0 && this.state.loading === false) {
      return (
        <div>
          {this.state.data.map((course) => (
            <div key={course.id} style={styles}>
              <h3>Course ID: {course.id}</h3>
              <ul>
                <li>Course Name: {course.name}</li>
              </ul>
            </div>
          ))}
        </div>
      );
    }

    if (this.state.loading === true) {
      return (
        <div>
          <h3>Loading</h3>
        </div>
      );
    }

    return (
      <h4 style={{ textAlign: "center", margin: "auto" }}>
        Issue with BackEnd service. Team is notified and working on it.
      </h4>
    );
  }

  handleSearch = (id) => {
    if (id.trim().length === 0)
      return alert(
        "Please enter an id in format of number with no extra spaces"
      );

    //const data = this.state.data;
  };
  render() {
    return (
      <div className="wrapper">
        <SearchField onSearch={this.handleSearch} />
        {this.getData()}
      </div>
    );
  }
}

export default App;
