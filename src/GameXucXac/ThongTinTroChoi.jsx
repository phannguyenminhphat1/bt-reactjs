import React, { Component } from "react";
import { connect } from "react-redux";

class ThongTinTroChoi extends Component {
  render() {
    return (
      <>
        <div className="display-4">
          BẠN CHỌN:
          <span className="text-danger">
            {this.props.taiXiu ? "TÀI" : "XỈU"}
          </span>
        </div>
        <div className="display-4">
          BÀN THẮNG:
          <span className="text-danger">{this.props.soBanThang}</span>
        </div>
        <div className="display-4">
          TỔNG SỐ BÀN CHƠI:
          <span className="text-danger">{this.props.tongSoBanChoi}</span>
        </div>
      </>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    taiXiu: state.GameXucXacReducer.taiXiu,
    soBanThang: state.GameXucXacReducer.soBanThang,
    tongSoBanChoi: state.GameXucXacReducer.tongSoBanChoi,
  };
};
export default connect(mapStateToProps, null)(ThongTinTroChoi);
