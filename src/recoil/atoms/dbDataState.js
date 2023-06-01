import { atom } from 'recoil';

const dbDataState = atom({
  key: 'dbDataState',
  default: [],
});

export default dbDataState;
