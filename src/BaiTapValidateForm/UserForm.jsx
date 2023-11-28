import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import {
  themSinhVien,
  capNhatSinhVien,
} from "./redux/types/BaiTapValidateFormType";

function UserForm({
  themSinhVien,
  isEditMode,
  sinhVienCapNhat,
  capNhatSinhVien,
  changeFalseEditMode,
}) {
  const [values, setValues] = useState({
    maSV: "",
    hoTen: "",
    soDT: "",
    email: "",
  });
  const [errValues, setErrValues] = useState({
    maSV: "",
    hoTen: "",
    soDT: "",
    email: "",
  });
  useEffect(() => {
    setValues({
      maSV: sinhVienCapNhat.maSV || "",
      hoTen: sinhVienCapNhat.hoTen || "",
      soDT: sinhVienCapNhat.soDT || "",
      email: sinhVienCapNhat.email || "",
    });
  }, [sinhVienCapNhat]);

  const handleChangeCapNhatInput = (e) => {
    const { name, value } = e.target;
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const updateSinhVien = (e) => {
    e.preventDefault();
    let isValid = true;
    for (let key in values) {
      let bool = validateInput(key, values[key]);
      isValid = isValid && bool;
    }
    if (!isValid) {
      return null;
    } else {
    }
    capNhatSinhVien(values);
    setValues({
      maSV: "",
      hoTen: "",
      soDT: "",
      email: "",
    });
    changeFalseEditMode();
  };
  const handleOnChangeValues = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };
  const handleBlur = (e) => {
    const { name, value } = e.target;
    validateInput(name, value);
  };
  const validateInput = (inputName, inputValue) => {
    const err = {};
    let isValid = true;
    switch (inputName) {
      case "maSV": {
        if (inputValue.trim() === "") {
          err.maSV = "Mã sinh viên không được rỗng !";
          isValid = false;
        } else {
          err.maSV = "";
        }
        break;
      }
      case "hoTen": {
        if (inputValue.trim() === "") {
          err.hoTen = "Họ tên sinh viên không được rỗng !";
          isValid = false;
        } else if (/^[a-zA-Z]+$/.test(inputValue)) {
          err.hoTen = "Họ tên không hợp lệ !";
          isValid = false;
          return;
        } else {
          err.hoTen = "";
        }
        break;
      }
      case "soDT": {
        if (inputValue.trim() === "") {
          err.soDT = "Số điện thoại không được rỗng !";
          isValid = false;
        } else if (inputValue.length < 10 && inputValue > 12) {
          err.soDT = "Số điện thoại không đúng !";
          isValid = false;
        } else {
          err.soDT = "";
        }
        break;
      }
      case "email": {
        if (inputValue.trim() === "") {
          err.email = "Email không được rỗng !";
          isValid = false;
        } else if (inputValue.match(/^([A-Za-z]|[0-9])+$/)) {
          err.email = "Email không đúng định dạng !";
          isValid = false;
        } else {
          err.email = "";
        }
        break;
      }
      default:
        break;
    }

    setErrValues((currentState) => {
      return { ...currentState, ...err };
    });
    console.log(isValid);
    return isValid;
  };
  const submitForm = (e) => {
    e.preventDefault();
    let isValid = true;
    for (let key in values) {
      let bool = validateInput(key, values[key]);
      isValid = isValid && bool;
    }
    if (!isValid) {
      return null;
    } else {
    }
    themSinhVien(values);
    setValues({
      maSV: "",
      hoTen: "",
      soDT: "",
      email: "",
    });
  };
  return (
    <div className="userForm__content" style={{ fontSize: "18px" }}>
      <div className="userForm__header">
        <h1>Thông tin sinh viên</h1>
      </div>
      <div className="userForm__form">
        <form>
          <div className="row mb-4">
            <div className="col-6">
              <div className="form-group">
                <label htmlFor="maSV">Mã SV</label>
                {isEditMode ? (
                  <input
                    type="text"
                    className="form-control"
                    name="maSV"
                    id="maSV"
                    disabled
                    placeholder="Nhập mã SV"
                    value={values.maSV}
                    onBlur={handleBlur}
                  />
                ) : (
                  <input
                    type="text"
                    className="form-control"
                    name="maSV"
                    id="maSV"
                    disabled={false}
                    placeholder="Nhập mã SV "
                    value={values.maSV}
                    onChange={handleOnChangeValues}
                    onBlur={handleBlur}
                  />
                )}

                <span className="text-danger">{errValues.maSV}</span>
              </div>
            </div>
            <div className="col-6">
              <div className="form-group">
                <label htmlFor="hoTen">Họ tên</label>
                {isEditMode ? (
                  <input
                    type="text"
                    className="form-control"
                    name="hoTen"
                    id="hoTen"
                    placeholder="Nhập họ tên SV "
                    value={values.hoTen}
                    onChange={handleChangeCapNhatInput}
                    onBlur={handleBlur}
                  />
                ) : (
                  <input
                    type="text"
                    className="form-control"
                    name="hoTen"
                    id="hoTen"
                    placeholder="Nhập họ tên SV "
                    value={values.hoTen}
                    onChange={handleOnChangeValues}
                    onBlur={handleBlur}
                  />
                )}

                <span className="text-danger">{errValues.hoTen}</span>
              </div>
            </div>
          </div>
          <div className="row mb-4">
            <div className="col-6">
              <div className="form-group">
                <label htmlFor="soDT">Số diện thoại</label>
                {isEditMode ? (
                  <input
                    type="number"
                    className="form-control"
                    name="soDT"
                    id="soDT"
                    placeholder="Nhập số diện thoại "
                    value={values.soDT}
                    onBlur={handleBlur}
                    onChange={handleChangeCapNhatInput}
                  />
                ) : (
                  <input
                    type="number"
                    className="form-control"
                    name="soDT"
                    id="soDT"
                    placeholder="Nhập số diện thoại "
                    value={values.soDT}
                    onBlur={handleBlur}
                    onChange={handleOnChangeValues}
                  />
                )}

                <span className="text-danger">{errValues.soDT}</span>
              </div>
            </div>
            <div className="col-6">
              <div className="form-group">
                <label htmlFor="email">Email</label>
                {isEditMode ? (
                  <input
                    type="text"
                    className="form-control"
                    name="email"
                    id="email"
                    placeholder="Nhập email"
                    value={values.email}
                    onChange={handleChangeCapNhatInput}
                  />
                ) : (
                  <input
                    type="text"
                    className="form-control"
                    name="email"
                    id="email"
                    placeholder="Nhập email"
                    value={values.email}
                    onChange={handleOnChangeValues}
                  />
                )}

                <span className="text-danger">{errValues.email}</span>
              </div>
            </div>
          </div>
          {isEditMode ? (
            <button onClick={updateSinhVien} className="btn btn-secondary">
              Cập nhật sinh viên
            </button>
          ) : (
            <button onClick={submitForm} className="btn btn-success">
              Thêm sinh viên
            </button>
          )}
        </form>
      </div>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    themSinhVien: (sinhVien) => {
      const action = {
        type: themSinhVien,
        sinhVien,
      };
      console.log(action);
      dispatch(action);
    },
    capNhatSinhVien: (sinhVien) => {
      const action = {
        type: capNhatSinhVien,
        sinhVien,
      };
      console.log(action);
      dispatch(action);
    },
  };
};
const mapStateToProps = (state) => {
  return {
    mangUser: state.UserReducer.mangUser,
    sinhVienCapNhat: state.UserReducer.sinhVienCapNhat,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserForm);
