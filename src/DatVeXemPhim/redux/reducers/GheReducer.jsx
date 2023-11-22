import { chonGhe, huyGhe } from "../types/DatVeXemPhimType";

const stateDefault = {
  danhSachGheDangDat: [],
};

export const GheReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case chonGhe: {
      let danhSachGheDangDatUpdate = [...state.danhSachGheDangDat];
      let findIndexGheDaChon = danhSachGheDangDatUpdate.findIndex(
        (ghe) => ghe.soGhe === action.ghe.soGhe
      );
      if (findIndexGheDaChon !== -1) {
        danhSachGheDangDatUpdate.splice(findIndexGheDaChon, 1);
      } else {
        danhSachGheDangDatUpdate.push(action.ghe);
      }
      state.danhSachGheDangDat = danhSachGheDangDatUpdate;
      return { ...state };
    }
    case huyGhe: {
      let danhSachGheDangDatUpdate = [...state.danhSachGheDangDat];
      danhSachGheDangDatUpdate = danhSachGheDangDatUpdate.filter(
        (ghe) => ghe.soGhe !== action.soGhe
      );
      state.danhSachGheDangDat = danhSachGheDangDatUpdate;
      return { ...state };
    }
    default:
      return { ...state };
  }
};
