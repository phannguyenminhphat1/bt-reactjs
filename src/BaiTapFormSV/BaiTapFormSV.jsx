import React, { Component } from "react";
import FormSV from "./FormSV";
import TableSV from "./TableSV";

export default class BaiTapFormSV extends Component {
  render() {
    return (
      <div>
        <h1 className="title">FORM SV</h1>
        <div className="container">
          <FormSV />
          <TableSV />
        </div>
      </div>
    );
  }
}
