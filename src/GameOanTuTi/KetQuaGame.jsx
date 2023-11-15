import React, { Component } from "react";
import { connect } from "react-redux";

class KetQuaGame extends Component {
  render() {
    return (
      <div>
        <div className="display-4 text-warning">
          Kết quả: {this.props.ketQua}
        </div>
        <div className="display-4 text-warning">
          Số bàn thắng:
          <span className="text-white">{this.props.soBanThang}</span>
        </div>
        <div className="display-4 text-warning">
          Số bàn đã chơi:{" "}
          <span className="text-white">{this.props.soBanChoi}</span>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    ketQua: state.GameOanTuTiReducer.ketQua,
    soBanThang: state.GameOanTuTiReducer.soBanThang,
    soBanChoi: state.GameOanTuTiReducer.soBanChoi,
  };
};
export default connect(mapStateToProps, null)(KetQuaGame);
