import React from "react";
import DiemCuoc from "./DiemCuoc";
import DanhSachQuanCuoc from "./DanhSachQuanCuoc";
import DanhSachXucXac from "./DanhSachXucXac";
import "./GameBauCua.css";

export default function GameBauCua() {
  return (
    <div className="container-fluid gameBauCua">
      <DiemCuoc />
      <div className="row">
        <div className="col-8">
          <DanhSachQuanCuoc />
        </div>
        <div className="col-4">
          <DanhSachXucXac />
        </div>
      </div>
    </div>
  );
}
