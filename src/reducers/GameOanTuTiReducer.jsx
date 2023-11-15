const stateDefault = {
  mangDatCuoc: [
    { maCuoc: 1, hinhAnh: "./OanTuTi-Image/keo.png", datCuoc: false },
    { maCuoc: 2, hinhAnh: "./OanTuTi-Image/bua.png", datCuoc: false },
    { maCuoc: 3, hinhAnh: "./OanTuTi-Image/bao.png", datCuoc: true },
  ],
  ketQua: "",
  soBanThang: 0,
  soBanChoi: 0,
  computer: { maCuoc: 1, hinhAnh: "./OanTuTi-Image/keo.png" },
};

export const GameOanTuTiReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case "CHON_KEO_BUA_BAO": {
      let mangDatCuocUpdate = [...state.mangDatCuoc];
      mangDatCuocUpdate = mangDatCuocUpdate.map((item, index) => {
        return { ...item, datCuoc: false };
      });
      let found = mangDatCuocUpdate.find(
        (item) => item.maCuoc === action.maCuoc
      );
      if (found) {
        found.datCuoc = true;
      }
      state.mangDatCuoc = mangDatCuocUpdate;
      return { ...state };
    }
    case "CLICK_PLAY": {
      let computerUpdate = {};
      let randomItem = Math.floor(Math.random() * 3) + 1;
      if (randomItem === 1) {
        computerUpdate = {
          maCuoc: randomItem,
          hinhAnh: "./OanTuTi-Image/keo.png",
        };
      } else if (randomItem === 2) {
        computerUpdate = {
          maCuoc: randomItem,
          hinhAnh: "./OanTuTi-Image/bua.png",
        };
      } else {
        computerUpdate = {
          maCuoc: randomItem,
          hinhAnh: "./OanTuTi-Image/bao.png",
        };
      }
      state.computer = computerUpdate;
      return { ...state };
    }
    case "END GAME": {
      let player = state.mangDatCuoc.find((item) => item.datCuoc === true);
      let computer = state.computer;
      switch (player.maCuoc) {
        case 1:
          if (computer.maCuoc === 1) {
            state.ketQua = "Hòa nhau";
          } else if (computer.maCuoc === 2) {
            state.ketQua = "Thua rồi nha";
          } else {
            state.soBanThang += 1;
            state.ketQua = "Đã thắng rồi";
          }

          break;
        case 2:
          if (computer.maCuoc === 1) {
            state.soBanThang += 1;
            state.ketQua = "Thắng rồi á";
          } else if (computer.maCuoc === 2) {
            state.ketQua = "Hòa rồi nha";
          } else {
            state.ketQua = "Thua rồi nha";
          }

          break;
        case 3:
          if (computer.maCuoc === 1) {
            state.ketQua = "Thua rồi nhak";
          } else if (computer.maCuoc === 2) {
            state.soBanThang += 1;
            state.ketQua = "Thắng rồi nha";
          } else {
            state.ketQua = "Hòa rồi";
          }

          break;
        default:
          return { ...state };
      }
      state.soBanChoi += 1;

      return { ...state };
    }

    default:
      return { ...state };
  }
};
