import React from "react";
import "./DatVeXemPhim.css";
import HangGhe from "./HangGhe";
import ThongTinDatGhe from "./ThongTinDatGhe";
import data from "./danhSachGhe.json";

export default function DatVeXemPhim() {
  const renderHangGhe = () => {
    return data.map((hangGhe, index) => {
      return (
        <div
          className="hangGhe mt-3 text-light"
          style={{ fontSize: "30px" }}
          key={index}
        >
          <HangGhe hangGhe={hangGhe} hangGheDau={index} />
        </div>
      );
    });
  };
  return (
    <div className="datVeXemPhim__content">
      <div className="overlay">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-8 text-center p-4">
              <h1 className="title text-light">ĐẶT VÉ XEM PHIM</h1>
              <h4 style={{ color: "white", fontWeight: "normal" }}>Màn hình</h4>
              <div className="screen__content">
                <div className="screen"></div>
              </div>
              <div className="hangGhe__content">{renderHangGhe()}</div>
            </div>
            <div className="col-md-4 p-4">
              <h1 style={{ color: "white" }}>DANH SÁCH GHẾ BẠN ĐÃ CHỌN</h1>
              <ThongTinDatGhe />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
