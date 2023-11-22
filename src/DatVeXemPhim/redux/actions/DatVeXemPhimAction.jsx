import { chonGhe } from "../types/DatVeXemPhimType";

export const chonGheAction = (ghe) => {
  return {
    type: chonGhe,
    ghe,
  };
};
