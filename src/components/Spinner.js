import React, { Component } from "react";
import Loader from "react-loader-spinner";

export default class App extends Component {
  //other logic
  render() {
    return <Loader type="ThreeDots" color="#0f8bff" height={80} width={80} />;
  }
}
