const stateDefault = {
  mangSinhVien: [
    { id: 1, name: "Name1", phone: "Phone1", email: "email1@example.com" },
    { id: 2, name: "Name2", phone: "Phone2", email: "email2@example.com" },
  ],
};
export const QuanLySinhVienReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case "THEM_SINH_VIEN": {
      const mangSinhVienNew = [...state.mangSinhVien];
      mangSinhVienNew.push(action.sinhVien);
      state.mangSinhVien = mangSinhVienNew;
      return { ...state };
    }

    default:
      return { ...state };
  }
};
