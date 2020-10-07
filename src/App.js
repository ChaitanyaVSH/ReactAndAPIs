import React, { Component } from "react";
import "./App.css";

class App extends Component {
  state = {
    data: [],
  };

  componentDidMount() {
    fetch("https://api.github.com/users")
      .then((response) => response.json())
      .then((data) => {
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
      backgroundColor: "lightblue",
      width: "40%",
      alignItems: "center",
      justifyContent: "center",
    };

    return (
      <div>
        <h1>
          {users.map((user) => (
            <div key={user.id} style={styles}>
              <h3>Username: {user.login}</h3>
              <ul>
                <li>Followers: {user.followers_url.length}</li>
              </ul>
            </div>
          ))}
        </h1>
      </div>
    );
  }
}

export default App;
