const stateDefault = {
  mangCuoc: [
    { id: "bau", hinhAnh: "./img/bau.png", diemCuoc: 0 },
    { id: "cua", hinhAnh: "./img/cua.png", diemCuoc: 0 },
    { id: "ca", hinhAnh: "./img/ca.png", diemCuoc: 0 },
    { id: "nai", hinhAnh: "./img/nai.png", diemCuoc: 0 },
    { id: "tom", hinhAnh: "./img/tom.png", diemCuoc: 0 },
    { id: "ga", hinhAnh: "./img/ga.png", diemCuoc: 0 },
  ],
  tongDiem: 1000,
  mangXucXac: [
    { id: "bau", hinhAnh: "./img/bau.png" },
    { id: "cua", hinhAnh: "./img/cua.png" },
    { id: "ca", hinhAnh: "./img/ca.png" },
  ],
};
export const GameBauCuaReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case "DAT_CUOC_BAU_CUA": {
      let mangCuocUpdate = [...state.mangCuoc];
      let findIndex = mangCuocUpdate.findIndex(
        (item) => item.id === action.quan.id
      );
      if (findIndex !== -1) {
        if (action.tangGiam && state.tongDiem > 0) {
          mangCuocUpdate[findIndex].diemCuoc += 100;
          state.tongDiem -= 100;
        } else {
          if (mangCuocUpdate[findIndex].diemCuoc > 0) {
            mangCuocUpdate[findIndex].diemCuoc -= 100;
            state.tongDiem += 100;
          }
        }
      }
      state.mangCuoc = mangCuocUpdate;
      return { ...state };
    }
    case "XOC_XUC_XAC": {
      let mangXucXacRandom = [];
      for (let i = 0; i < 3; i++) {
        let randomXucXac = Math.floor(Math.random() * 5);

        let xucXac = state.mangCuoc[randomXucXac];
        mangXucXacRandom.push(xucXac);
      }
      mangXucXacRandom.forEach((item, index) => {
        let findI = state.mangCuoc.findIndex((mangCuoc) => {
          return mangCuoc.id === item.id;
        });
        if (findI !== -1) {
          state.tongDiem += state.mangCuoc[findI].diemCuoc;
        } else {
          state.tongDiem -= state.mangCuoc[findI].diemCuoc;
        }
      });
      state.mangCuoc.forEach((item, index) => {
        let findI = mangXucXacRandom.findIndex((xucXac) => {
          return xucXac.id === item.id;
        });
        if (findI !== -1) {
          state.tongDiem += item.diemCuoc;
        }
      });
      state.mangCuoc = state.mangCuoc.map((item, index) => {
        return {
          ...item,
          diemCuoc: 0,
        };
      });
      state.mangXucXac = mangXucXacRandom;
      return { ...state };
    }
    case "CHOI_LAI": {
      state.tongDiem = 1000;
      state.mangCuoc = state.mangCuoc.map((item, index) => {
        return {
          ...item,
          diemCuoc: 0,
        };
      });
      return { ...state };
    }

    default:
      break;
  }
  return { ...state };
};
