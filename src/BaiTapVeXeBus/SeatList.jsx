import React from "react";
import SeatItem from "./SeatItem";

export default function SeatList({ data }) {
  const renderSeat = () => {
    return data.map((item, index) => {
      return (
        <div key={index} className="col-3">
          <SeatItem seat={item} />
        </div>
      );
    });
  };
  return (
    <div className="row">
      <div className="col-12 bg-primary p-2 text-center text-white">Tài xế</div>
      {renderSeat()}
    </div>
  );
}
