import React from "react";
import { connect } from "react-redux";

function QuanCuoc({ quanCuoc, datCuoc, diemCuoc }) {
  return (
    <div className="mt-3">
      <img src={quanCuoc.hinhAnh} alt="acaca" style={{ width: "100%" }} />
      <div
        className="bg-success mt-2 pb-2 text-center"
        style={{ borderRadius: "10px" }}
      >
        <button
          onClick={() => datCuoc(quanCuoc, true)}
          className="btn btn-danger mr-3"
        >
          <i className="fa fa-plus"></i>
        </button>
        <span className="m-3" style={{ color: "yellow", fontSize: "25px" }}>
          {diemCuoc}
        </span>
        <button
          onClick={() => datCuoc(quanCuoc, false)}
          className="btn btn-danger mr-3"
        >
          <i className="fa fa-minus"></i>
        </button>
      </div>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    datCuoc: (quan, tangGiam) => {
      const action = {
        type: "DAT_CUOC_BAU_CUA",
        quan,
        tangGiam,
      };
      dispatch(action);
    },
  };
};
export default connect(null, mapDispatchToProps)(QuanCuoc);
