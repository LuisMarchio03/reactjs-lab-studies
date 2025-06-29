import {useState, useEffect} from "react";

function usePersistedState(key: string, inicialState: any) {
  const [state, setState] = useState(() => {
    const storageValue = localStorage.getItem(key);

    if (storageValue) {
      return JSON.parse(storageValue);
    } else {
      return inicialState
    }
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [key, state])

  return [state, setState];
}

export default usePersistedState;