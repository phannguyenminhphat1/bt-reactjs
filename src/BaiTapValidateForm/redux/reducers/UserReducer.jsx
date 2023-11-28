import {
  capNhatSinhVien,
  suaSinhVien,
  themSinhVien,
  timKiemTheoTen,
  xoaSinhVien,
} from "../types/BaiTapValidateFormType";

const stateDefault = {
  mangUser: [],
  sinhVienCapNhat: {},
  mangTimKiem: [],
};

export const UserReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case themSinhVien: {
      const mangUserUpdate = [...state.mangUser, action.sinhVien];
      state.mangUser = mangUserUpdate;
      return { ...state };
    }
    case xoaSinhVien: {
      let mangUserUpdate = [...state.mangUser];
      mangUserUpdate = mangUserUpdate.filter(
        (item) => item.maSV !== action.maSinhVien
      );
      state.mangUser = mangUserUpdate;
      return { ...state };
    }
    case suaSinhVien: {
      let mangUserUpdate = [...state.mangUser];
      let sinhVienCapNhatUpdate = { ...state.sinhVienCapNhat };
      let findUser = mangUserUpdate.find(
        (item) => item.maSV === action.sinhVien.maSV
      );
      if (findUser) {
        sinhVienCapNhatUpdate = findUser;
        state.sinhVienCapNhat = sinhVienCapNhatUpdate;
        return { ...state };
      }
      return { ...state };
    }
    case capNhatSinhVien: {
      let mangUserUpdate = [...state.mangUser];
      let sinhVienCapNhatUpdate = { ...state.sinhVienCapNhat };
      sinhVienCapNhatUpdate = action.sinhVien;
      let findIndex = mangUserUpdate.findIndex(
        (item) => item.maSV === sinhVienCapNhatUpdate.maSV
      );
      if (findIndex === -1) {
        return { ...state };
      }
      mangUserUpdate[findIndex] = sinhVienCapNhatUpdate;
      state.mangUser = mangUserUpdate;
      state.sinhVienCapNhat = {};
      return { ...state };
    }
    case timKiemTheoTen: {
      const mangUserUpdate = [...state.mangUser];
      const mangTimKiemUpdate = mangUserUpdate.filter((item) =>
        item.hoTen.toLowerCase().includes(action.value.toLowerCase())
      );
      state.mangTimKiem = mangTimKiemUpdate;
      return { ...state };
    }

    default:
      return { ...state };
  }
};
