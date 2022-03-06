import { atom } from "recoil";

const userState = atom({
  key: "USERSTATE",
  default: "",
});

const loadingState = atom({
  key: "LOADINGSTATE",
  default: true,
});
const starState = atom({
  key: "STARSTATE",
  default: 0,
});
const commentState = atom({
  key: "COMMENTSTATE",
  default: 0,
});
const starOneState = atom({
  key: "STARONESTATE",
  default: 0,
});
const starTwoState = atom({
  key: "STARTWOSTATE",
  default: 0,
});
const starThreeState = atom({
  key: "STARTHREESTATE",
  default: 0,
});
const starFourState = atom({
  key: "STARFOURSTATE",
  default: 0,
});
const starFiveState = atom({
  key: "STARFIVESTATE",
  default: 0,
});
const idRout = atom({
  key: "idrout",
  default: "",
});

export { userState, loadingState, starState, commentState, starOneState, starTwoState, starThreeState, starFourState, starFiveState, idRout };
