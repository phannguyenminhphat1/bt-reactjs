import React, { Component } from "react";
import { connect } from "react-redux";

class Computer extends Component {
  render() {
    return (
      <div className="player">
        <div className="theThink text-center">
          <img
            src={this.props.computer.hinhAnh}
            alt="asd"
            style={{ width: 70, height: 100 }}
          />
        </div>
        <div className="speech-bubble"></div>
        <img
          src="./OanTuTi-Image/playerComputer.png"
          alt="Computer"
          style={{ width: 150, height: 150 }}
        />
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    computer: state.GameOanTuTiReducer.computer,
  };
};
export default connect(mapStateToProps, null)(Computer);
