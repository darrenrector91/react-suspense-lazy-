import React from "react";
import axios from "axios";
import { Container, Table } from "reactstrap";

export default class App extends React.Component {
  state = {
    users: []
  };
  componentDidMount() {
    this.getUsers();
  }
  getUsers = () => {
    axios
      .get("https://reqres.in/api/users?page=1")
      .then(data => this.setState({ users: data.data.data }))
      .catch(err => {
        console.log(err);
        return null;
      });
  };
  render() {
    return (
      <div>
        <Container>
          <Table>
            <thead>
              <tr>
                <th>Id</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody>
              {this.state.users.map((users, i) => {
                const { id, first_name, last_name, email } = users;
                return (
                  <tr key={id}>
                    <td>{id}</td>
                    <td>{first_name}</td>
                    <td>{last_name}</td>
                    <td>{email}</td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </Container>
      </div>
    );
  }
}
