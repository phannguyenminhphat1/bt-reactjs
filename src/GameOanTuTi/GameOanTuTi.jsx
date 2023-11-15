import React, { Component } from "react";
import "./GameOanTuTi.css";
import Player from "./Player";
import KetQuaGame from "./KetQuaGame";
import Computer from "./Computer";
import { connect } from "react-redux";

class GameOanTuTi extends Component {
  render() {
    return (
      <div className="game">
        <div className="row">
          <div className="col-md-4">
            <Player />
          </div>
          <div className="col-md-4 text-center">
            <KetQuaGame />
            <button
              onClick={() => this.props.handleBtnPlay()}
              className="btn btn-success mt-3 btnPlay"
            >
              PLAY GAME
            </button>
          </div>
          <div className="col-md-4">
            <Computer />
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleBtnPlay: () => {
      let count = 20;
      let randomComputerItem = setInterval(() => {
        const action = {
          type: "CLICK_PLAY",
        };
        dispatch(action);
        count++;
        if (count > 50) {
          clearInterval(randomComputerItem);
          const action = {
            type: "END GAME",
          };
          dispatch(action);
        }
      }, 50);
    },
  };
};

export default connect(null, mapDispatchToProps)(GameOanTuTi);
