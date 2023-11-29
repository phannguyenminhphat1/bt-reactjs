import React from "react";

export default function XucXac({ xucXac }) {
  return (
    <>
      <div className="scene">
        <div className="cube">
          <img
            className="ml-3 cube__face front"
            src={xucXac.hinhAnh}
            style={{ width: 50 }}
            alt=""
          />

          <img
            className="ml-3 cube__face back"
            src="./img/tom.png"
            style={{ width: 50 }}
            alt=""
          />
          <img
            className="ml-3 cube__face left right"
            src="./img/ca.png"
            style={{ width: 50 }}
            alt=""
          />
          <img
            className="ml-3 cube__face right"
            src="./img/ga.png"
            style={{ width: 50 }}
            alt=""
          />
          <img
            className="ml-3 cube__face top"
            src="./img/nai.png"
            style={{ width: 50 }}
            alt=""
          />
          <img
            className="ml-3 cube__face bottom"
            src="./img/bau.png"
            style={{ width: 50 }}
            alt=""
          />
        </div>
      </div>
    </>
  );
}
