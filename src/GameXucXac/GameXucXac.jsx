import React, { Component } from "react";
import "./GameXucXac.css";
import XucXac from "./XucXac";
import ThongTinTroChoi from "./ThongTinTroChoi";
import { connect } from "react-redux";

class GameXucXac extends Component {
  render() {
    return (
      <>
        <div className="game">
          <h1 className="title">GAME XÚC XẮC</h1>
          <div className="game__content">
            <div className="row">
              <div className="col-md-5">
                <button
                  className="btnGame"
                  onClick={() => this.props.chonTaiXiu(true)}
                >
                  TÀI
                </button>
              </div>
              <div className="col-md-2">
                <XucXac />
              </div>
              <div className="col-md-5">
                <button
                  className="btnGame"
                  onClick={() => this.props.chonTaiXiu(false)}
                >
                  XỈU
                </button>
              </div>
            </div>
            <div className="thongTinTroChoi">
              <ThongTinTroChoi />
              <button
                onClick={() => this.props.playGame()}
                className="btn btn-warning btnPlayGame"
              >
                PLAY GAME
              </button>
            </div>
          </div>
        </div>
      </>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    chonTaiXiu: (taiXiu) => {
      const action = {
        type: "DAT_CUOC",
        taiXiu,
      };
      dispatch(action);
      console.log(action);
    },
    playGame: () => {
      const action = {
        type: "PLAY_GAME",
      };
      dispatch(action);
    },
  };
};
export default connect(null, mapDispatchToProps)(GameXucXac);
