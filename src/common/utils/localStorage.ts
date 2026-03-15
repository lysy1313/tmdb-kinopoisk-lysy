/* eslint-disable @typescript-eslint/no-unused-vars */

export const loadState = <_T, D>(key: string, state: D) => {
  try {
    const serializedState = localStorage.getItem(key);
    if (serializedState === null) {
      return state;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    console.error(err);
  }
};

export const saveState = <_T, D>(key: string, state: D) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem(key, serializedState);
  } catch (err) {
    console.error(err);
  }
};
