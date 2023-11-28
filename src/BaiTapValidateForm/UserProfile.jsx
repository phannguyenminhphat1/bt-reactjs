import React from "react";
import { connect } from "react-redux";
import {
  suaSinhVien,
  timKiemTheoTen,
  xoaSinhVien,
} from "./redux/types/BaiTapValidateFormType";

function UserProfile({
  mangUser,
  xoaSinhVien,
  changeIsEditMode,
  suaSinhVien,
  searchByPhone,
  mangTimKiem,
}) {
  const handleSua = (user) => {
    suaSinhVien(user);
    changeIsEditMode();
  };
  const renderSinhVien = () => {
    const dataToRender = mangTimKiem.length > 0 ? mangTimKiem : mangUser;
    return dataToRender.map((item, index) => {
      return (
        <tr key={index}>
          <td>{item.maSV}</td>
          <td>{item.hoTen}</td>
          <td>{item.soDT}</td>
          <td>{item.email}</td>
          <td>
            <button
              className="btn btn-primary me-3 col-5"
              style={{ fontSize: "18px" }}
              onClick={() => handleSua(item)}
            >
              Sửa
            </button>
            <button
              className="btn btn-danger col-5"
              style={{ fontSize: "18px" }}
              onClick={() => xoaSinhVien(item.maSV)}
            >
              Xóa
            </button>
          </td>
        </tr>
      );
    });
  };

  const search = (e) => {
    const val = e.target.value;
    searchByPhone(val);
  };

  return (
    <>
      <div className="wrap">
        <div className="search">
          <input
            type="text"
            className="searchTerm"
            placeholder="Nhập họ tên"
            onKeyUp={search}
          />
          <button type="submit" className="searchButton">
            <i className="fa fa-search" />
          </button>
        </div>
      </div>

      <div className="userForm__content">
        <div className="text-center">
          <table className="table table-bordered" style={{ fontSize: "18px" }}>
            <thead className="table-dark">
              <tr>
                <th>Mã SV</th>
                <th>Họ tên</th>
                <th>Số điện thoại</th>
                <th>Email</th>
                <th></th>
              </tr>
            </thead>
            <tbody>{renderSinhVien()}</tbody>
          </table>
        </div>
      </div>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    mangUser: state.UserReducer.mangUser,
    mangTimKiem: state.UserReducer.mangTimKiem,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    xoaSinhVien: (maSinhVien) => {
      const action = {
        type: xoaSinhVien,
        maSinhVien,
      };
      dispatch(action);
    },
    suaSinhVien: (sinhVien) => {
      const action = {
        type: suaSinhVien,
        sinhVien,
      };
      dispatch(action);
    },
    searchByPhone: (value) => {
      const action = {
        type: timKiemTheoTen,
        value,
      };
      dispatch(action);
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);
