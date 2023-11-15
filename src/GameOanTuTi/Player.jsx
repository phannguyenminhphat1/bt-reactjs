import React, { Component } from "react";
import { connect } from "react-redux";

class Player extends Component {
  renderMangDatCuoc = () => {
    return this.props.mangDatCuoc.map((item, index) => {
      let borderStyle = {};
      if (item.datCuoc) {
        borderStyle = { border: "5px solid green" };
      }
      return (
        <div className="col-md-4" key={index}>
          <button
            style={borderStyle}
            onClick={() => this.props.chonKeoBuaBao(item.maCuoc)}
            className="btn-item"
          >
            <img src={item.hinhAnh} alt="imga" />
          </button>
        </div>
      );
    });
  };
  render() {
    return (
      <div className="player">
        <div className="theThink text-center">
          <img
            src={
              this.props.mangDatCuoc.find((item) => {
                return item.datCuoc === true;
              }).hinhAnh
            }
            alt="asd"
            style={{ width: 70, height: 100 }}
          />
        </div>
        <div className="speech-bubble"></div>
        <img
          src="./OanTuTi-Image/player.png"
          alt="Player"
          style={{ width: 150, height: 150 }}
        />
        <div className="row">{this.renderMangDatCuoc()}</div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    mangDatCuoc: state.GameOanTuTiReducer.mangDatCuoc,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    chonKeoBuaBao: (maCuoc) => {
      const action = {
        type: "CHON_KEO_BUA_BAO",
        maCuoc,
      };
      dispatch(action);
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Player);
