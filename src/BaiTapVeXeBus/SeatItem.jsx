import React from "react";
import cln from "classnames";

export default function SeatItem({ seat }) {
  return (
    <div>
      <button
        className={cln("btn btn-secondary m-2", {
          "btn-danger": seat.isBooket,
        })}
      >
        {seat.name}
      </button>
    </div>
  );
}
