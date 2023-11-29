import React from "react";
import { connect } from "react-redux";

function DiemCuoc({ tongDiem, choiLai }) {
  return (
    <div>
      <h3 className="text-center display-4" style={{ color: "red" }}>
        GAME BẦU CUA
      </h3>
      <div className="text-center mt-5">
        <span
          className="p-3 text-white bg-dark"
          style={{ fontSize: "20px", borderRadius: "5%" }}
        >
          Tiền thưởng:
          <span className="text-warning"> ${tongDiem}</span>
        </span>
      </div>
      <div className="text-center mt-5">
        <button
          className="p-3 text-white btn btn-danger"
          style={{ fontSize: "20px", borderRadius: "5%" }}
          onClick={() => choiLai()}
        >
          Chơi lại
        </button>
      </div>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    tongDiem: state.GameBauCuaReducer.tongDiem,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    choiLai: () => {
      const action = {
        type: "CHOI_LAI",
      };
      dispatch(action);
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DiemCuoc);
