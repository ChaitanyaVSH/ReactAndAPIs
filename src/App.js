import React, { Component } from "react";
import "./App.css";
import SearchField from "./components/searchField";

class App extends Component {
  state = {
    data: [],
    filter: false,
    filterId: "",
    loading: false,
  };

  componentDidMount() {
    // const PORT = process.env.PORT;
    // console.log(process.env);
    this.setState({
      loading: true,
    });
    fetch("http://127.0.0.1:1234/api/courses")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        this.setState({
          data: data,
          loading: false,
        });
      })
      .catch(() => {
        //https://www.tjvantoll.com/2015/09/13/fetch-and-errors/
        this.setState({
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

    if (this.state.filter && this.state.loading === false) {
      const id = parseInt(this.state.filterId);
      const filteredData = this.state.data.filter((course) => course.id === id);

      return filteredData.length === 0 ? (
        <h3 style={styles}>No results</h3>
      ) : (
        <div>
          {filteredData.map((course) => (
            <div key={course.id} style={{ styles }}>
              <h3>Course ID: {course.id}</h3>
              <ul>
                <li>Course Name: {course.name}</li>
                <li>Taught By: {course.taughtBy}</li>
                <li>Duration: {course.duration}</li>
              </ul>
            </div>
          ))}
        </div>
      );
    }

    if (this.state.data.length > 0 && this.state.loading === false) {
      return (
        <div>
          {this.state.data.map((course) => (
            <div key={course.id} style={styles}>
              <h3>Course ID: {course.id}</h3>
              <ul>
                <li>Course Name: {course.name}</li>
                <li>Taught By: {course.taughtBy}</li>
                <li>Duration: {course.duration}</li>
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
      <h4 style={styles}>
        Issue with BackEnd service. Team is notified and working on it.
      </h4>
    );
  }

  handleSearch = (id) => {
    if (isNaN(id) || id.trim().length === 0) {
      return alert("Please enter a valid number.");
    }
    this.setState({
      filter: true,
      filterId: parseInt(id),
    });
  };
  render() {
    const data = this.getData();
    return (
      <div className="wrapper">
        <SearchField onSearch={this.handleSearch} />
        {data}
      </div>
    );
  }
}

export default App;
