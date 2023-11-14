import React, { Component } from "react";
import { connect } from "react-redux";

class TableSV extends Component {
  renderSinhVien = () => {
    const { mangSinhVien } = this.props;
    return mangSinhVien.map((item, index) => {
      return (
        <tr key={item.id}>
          <td>{item.id}</td>
          <td>{item.name}</td>
          <td>{item.phone}</td>
          <td>{item.email}</td>
        </tr>
      );
    });
  };
  render() {
    return (
      <div className="text-center mt-5">
        <h2 className="title">Danh sách sinh viên</h2>
        <table className="table table-bordered table-danger">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Phone</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>{this.renderSinhVien()}</tbody>
        </table>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    mangSinhVien: state.QuanLySinhVienReducer.mangSinhVien,
  };
};
export default connect(mapStateToProps, null)(TableSV);
