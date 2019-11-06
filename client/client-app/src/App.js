import React, { Component } from "react";
import axios from "axios";
import LoadingComponent from "./LoadingComponent";
import { toast } from "react-toastify";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      error: false,
      loading: false
    };
  }

  componentDidMount() {
    this.useData();
  }

  delay(milliseconds) {
    return new Promise(resolve => setTimeout(resolve, milliseconds));
  }

  errorMsg() {
    toast.error("some error occurred, while fetching api!", {
      position: toast.POSITION.TOP_LEFT
    });
  }

  async useData() {
    try {
      const res = await axios.get("/api/user");
      const { data } = await res;

      this.setState({ users: data, error: false, loading: true });
      await this.delay(10000);
    } catch (err) {
      this.setState({ error: true, loading: true });
      console.log(err);
    }
    this.setState({ loading: false });
  }

  render() {
    const { users, error } = this.state;
    if (this.state.loading) return <LoadingComponent />;

    return (
      <React.Fragment>
        {users.map((user, i) => (
          <ul key={i}>
            <li key={i}>{user.email}</li>
          </ul>
        ))}
        <p>
          {error && (
            <div style={{ color: `red` }}>
              some error occurred, while fetching api
            </div>
          )}
        </p>
      </React.Fragment>
    );
  }
}

export default App;

// componentDidMount() {
//   axios
//     .get("/api/user" )
//     .then((res, err) => this.setState({ users: res.data, error: err }));
// }
