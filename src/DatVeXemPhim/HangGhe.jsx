import React from "react";
import { connect } from "react-redux";
import { chonGheAction } from "./redux/actions/DatVeXemPhimAction";
function HangGhe({ hangGhe, hangGheDau, danhSachGheDangDat, chonGhe }) {
  const renderHangGhe = () => {
    if (hangGheDau === 0) {
      return (
        <>
          <div className="hangGhe__hang">{hangGhe.hang}</div>
          <div>
            {hangGhe.danhSachGhe.map((item, index) => {
              return (
                <button
                  key={index}
                  className="rowNumber"
                  style={{ margin: "0 12px" }}
                >
                  {item.soGhe}
                </button>
              );
            })}
          </div>
        </>
      );
    } else {
      return (
        <>
          <div className="hangGhe__hang">{hangGhe.hang}</div>
          <div>
            {hangGhe.danhSachGhe.map((item, index) => {
              let cssGheDaDat = "";
              let disabled = false;
              let cssGheDangChon = "";
              if (item.daDat) {
                cssGheDaDat = "gheDuocChon";
                disabled = true;
              }
              let findIndexGhe = danhSachGheDangDat.findIndex(
                (ghe) => ghe.soGhe === item.soGhe
              );
              if (findIndexGhe !== -1) {
                cssGheDangChon = "gheDangChon";
              }

              return (
                <button
                  onClick={() => chonGhe(item)}
                  disabled={disabled}
                  key={index}
                  className={`ghe ${cssGheDaDat} ${cssGheDangChon}`}
                  style={{ margin: "0 12px" }}
                >
                  {item.soGhe}
                </button>
              );
            })}
          </div>
        </>
      );
    }
  };
  return hangGhe ? (
    renderHangGhe()
  ) : (
    <div className="text-light" style={{ fontSize: "35px" }}>
      . . . Loading
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    danhSachGheDangDat: state.GheReducer.danhSachGheDangDat,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    // chonGhe: (ghe) => {
    //   const action = {
    //     type: "CHON_GHE",
    //     ghe,
    //   };
    //   dispatch(action);
    //   console.log(action);
    // },
    chonGhe: (ghe) => {
      dispatch(chonGheAction(ghe));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(HangGhe);
