import React from "react";
import SeatList from "./SeatList";
import Ticket from "./Ticket";
import data from "./data.json";

export default function BusTicket() {
  return (
    <div>
      <h1>Bus Ticket</h1>
      <div className="row">
        <div className="col-6">
          <SeatList data={data} />
        </div>
        <div className="col-6">
          <Ticket />
        </div>
      </div>
    </div>
  );
}
