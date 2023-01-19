import { useEffect, useState } from "react";

export const usePersistedState = (initialState, key) => {
  const [state, setState] = useState(() => {
    const storedState = JSON.parse(localStorage.getItem(key));

    if (storedState) return storedState;

    return initialState;
  });
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [state, key]);

  return [state, setState];
};