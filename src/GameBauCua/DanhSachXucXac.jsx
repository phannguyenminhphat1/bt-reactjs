import React from "react";
import XucXac from "./XucXac";
import { connect } from "react-redux";

function DanhSachXucXac({ mangXucXac, xocXucXac }) {
  return (
    <div className="mt-5 ml-5">
      <div
        className="bg-white"
        style={{ width: "350px", height: "350px", borderRadius: "50%" }}
      >
        <div className="row" style={{ marginLeft: "60px" }}>
          <div
            className="col-12 text-center"
            style={{ marginTop: "0", marginLeft: 50 }}
          >
            <XucXac xucXac={mangXucXac[0]} />
          </div>
          <div className="col-6 text-right">
            <XucXac xucXac={mangXucXac[1]} />
          </div>
          <div className="col-6">
            <XucXac xucXac={mangXucXac[2]} />
          </div>
        </div>
      </div>
      <div className="" style={{ marginLeft: "28%" }}>
        <button
          className="btn btn-success p-2 mt-3"
          style={{ fontSize: "25px" }}
          onClick={() => xocXucXac()}
        >
          XỐC
        </button>
      </div>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    mangXucXac: state.GameBauCuaReducer.mangXucXac,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    xocXucXac: () => {
      const action = {
        type: "XOC_XUC_XAC",
      };
      dispatch(action);
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(DanhSachXucXac);
