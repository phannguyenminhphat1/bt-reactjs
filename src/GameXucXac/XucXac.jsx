import React, { Component } from "react";
import { connect } from "react-redux";

class XucXac extends Component {
  renderXucXac = () => {
    return this.props.mangXucXac.map((item, index) => {
      return <img src={item.hinhAnh} key={index} alt="none" />;
    });
  };
  render() {
    return <div className="XucXacImage">{this.renderXucXac()}</div>;
  }
}

const mapStateToProps = (state) => {
  return {
    mangXucXac: state.GameXucXacReducer.mangXucXac,
  };
};
export default connect(mapStateToProps, null)(XucXac);
