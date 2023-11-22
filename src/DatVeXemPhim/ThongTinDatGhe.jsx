import React from "react";
import { connect } from "react-redux";
import { huyGhe } from "./redux/types/DatVeXemPhimType";

function ThongTinDatGhe({ danhSachGheDangDat, huyGhe }) {
  const renderThongTinGhe = () => {
    return danhSachGheDangDat.map((item, index) => {
      return (
        <tr key={index}>
          <td>{item.soGhe}</td>
          <td>{item.gia.toLocaleString()}</td>
          <td>
            <button
              onClick={() => huyGhe(item.soGhe)}
              className="btn btn-danger"
            >
              X
            </button>
          </td>
        </tr>
      );
    });
  };
  return (
    <div>
      <div className="mt-3 text-start">
        <button className="gheDuocChon me-3"></button>
        <span style={{ fontSize: "25px" }} className="text-light">
          Ghế đã đặt
        </span>
        <br />
        <button className="gheDangChon me-3"></button>
        <span style={{ fontSize: "25px" }} className="text-light">
          Ghế đang đặt
        </span>
        <br />
        <button className="ghe me-3"></button>
        <span style={{ fontSize: "25px" }} className="text-light">
          Ghế chưa đặt
        </span>
      </div>
      <div className="table__content mt-3" style={{ fontSize: "18px" }}>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Số ghế</th>
              <th>Giá</th>
              <th>Hủy</th>
            </tr>
          </thead>
          <tbody>{renderThongTinGhe()}</tbody>
          <tfoot>
            <tr>
              <td></td>
              <td>Tổng tiền</td>
              <td>
                {danhSachGheDangDat
                  .reduce((tongTien, item) => {
                    return (tongTien += item.gia);
                  }, 0)
                  .toLocaleString()}
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
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
    huyGhe: (soGhe) => {
      const action = {
        type: huyGhe,
        soGhe,
      };
      console.log(action);
      dispatch(action);
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ThongTinDatGhe);
