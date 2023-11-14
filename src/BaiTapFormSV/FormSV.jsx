import React, { Component } from "react";
import { connect } from "react-redux";

class FormSV extends Component {
  state = {
    values: {
      id: "",
      name: "",
      phone: "",
      email: "",
    },

    errors: {
      id: "",
      name: "",
      phone: "",
      email: "",
    },
  };

  handleChangeInput = (e) => {
    const { name, value } = e.target;
    let errorMessage = "";
    if (value.trim() === "") {
      errorMessage = name + " không được để trống ! ";
    }
    let values = { ...this.state.values, [name]: value };
    let errors = { ...this.state.errors, [name]: errorMessage };
    this.setState({
      values,
      errors,
    });
  };
  handleThemSinhVien = (e) => {
    e.preventDefault();
    this.props.themSinhVien(this.state.values);
  };
  render() {
    return (
      <div>
        <div className="card">
          <div className="card-header bg-dark text-white text-center p-3">
            <h3>Thông tin sinh viên</h3>
          </div>
          <div className="card-body">
            <form onSubmit={this.handleThemSinhVien}>
              <div className="row">
                <div className="form-group col-6">
                  <label htmlFor="">ID</label>
                  <input
                    type="text"
                    className="form-control"
                    name="id"
                    value={this.state.values.id}
                    onChange={this.handleChangeInput}
                  />
                  <span className="text-danger">{this.state.errors.id}</span>
                </div>
                <div className="form-group col-6">
                  <label htmlFor="">Name</label>
                  <input
                    type="text"
                    className="form-control"
                    name="name"
                    value={this.state.values.name}
                    onChange={this.handleChangeInput}
                  />
                  <span className="text-danger">{this.state.errors.name}</span>
                </div>
                <div className="form-group col-6">
                  <label htmlFor="">Phone</label>
                  <input
                    type="number"
                    className="form-control"
                    name="phone"
                    value={this.state.values.phone}
                    onChange={this.handleChangeInput}
                  />
                  <span className="text-danger">{this.state.errors.phone}</span>
                </div>
                <div className="form-group col-6">
                  <label htmlFor="">Email</label>
                  <input
                    type="text"
                    className="form-control"
                    name="email"
                    value={this.state.values.email}
                    onChange={this.handleChangeInput}
                  />
                  <span className="text-danger">{this.state.errors.email}</span>
                </div>
                <div className="row mt-3">
                  <div className="col-md-12 text-end">
                    <button className="btn btn-success">Thêm sinh viên</button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    themSinhVien: (sinhVien) => {
      const action = {
        type: "THEM_SINH_VIEN",
        sinhVien,
      };
      dispatch(action);
    },
  };
};
export default connect(null, mapDispatchToProps)(FormSV);
