import React, { Component } from "react";
import "./App.css";

class App extends Component {
  state = {
    data: [],
  };

  componentDidMount() {
    fetch("http://127.0.0.1:1234/api/courses")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        this.setState({
          data: data,
        });
      });
  }
  render() {
    const users = this.state.data;
    const styles = {
      margin: 10,
      padding: 10,
      color: "white",
      backgroundColor: "orange",
      width: "40%",
      alignItems: "center",
      justifyContent: "center",
    };

    return (
      <div>
        <h1>
          {users.map((course) => (
            <div key={course.id} style={styles}>
              <h3>Course ID: {course.id}</h3>
              <ul>
                <li>Course Name: {course.name}</li>
              </ul>
            </div>
          ))}
        </h1>
      </div>
    );
  }
}

export default App;
