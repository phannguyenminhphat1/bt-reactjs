const stateDefault = {
  taiXiu: true,
  mangXucXac: [
    { ma: 1, hinhAnh: "./XucXac-Image/3.png" },
    { ma: 1, hinhAnh: "./XucXac-Image/5.png" },
    { ma: 1, hinhAnh: "./XucXac-Image/1.png" },
  ],
  soBanThang: 0,
  tongSoBanChoi: 0,
};

const GameXucXacReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case "DAT_CUOC":
      state.taiXiu = action.taiXiu;
      return { ...state };
    case "PLAY_GAME":
      let mangXucXacUpdate = [];
      for (let i = 0; i < 3; i++) {
        let randomXucXac = Math.floor(Math.random() * 6) + 1;
        let xucXac = {
          ma: randomXucXac,
          hinhAnh: `./XucXac-Image/${randomXucXac}.png`,
        };
        mangXucXacUpdate.push(xucXac);
      }
      state.mangXucXac = mangXucXacUpdate;
      state.tongSoBanChoi += 1;
      let tongDiem = mangXucXacUpdate.reduce((tongDiem, xucXac, index) => {
        return tongDiem + xucXac.ma;
      }, 0);
      if (
        (tongDiem > 11 && state.taiXiu === true) ||
        (tongDiem <= 11 && state.taiXiu === false)
      ) {
        state.soBanThang += 1;
      }
      return { ...state };

    default:
      return { ...state };
  }
};
export default GameXucXacReducer;
