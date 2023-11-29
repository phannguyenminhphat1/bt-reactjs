import React from "react";
import QuanCuoc from "./QuanCuoc";
import { connect } from "react-redux";

function DanhSachQuanCuoc({ mangCuoc }) {
  const renderMangCuoc = () => {
    return mangCuoc.map((item, index) => {
      return (
        <div className="col-4" key={index}>
          <QuanCuoc quanCuoc={item} diemCuoc={item.diemCuoc} />
        </div>
      );
    });
  };
  return (
    <div className="row mt-5" style={{ width: "80%" }}>
      {renderMangCuoc()}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    mangCuoc: state.GameBauCuaReducer.mangCuoc,
  };
};
export default connect(mapStateToProps, null)(DanhSachQuanCuoc);
