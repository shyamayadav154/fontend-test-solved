import axios from 'axios';
import { createContext, useContext, useState, useEffect } from 'react';

const url = 'http://3.109.133.121:8000/app/car/?format=json';


const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {
  const [key, setKey] = useState();

  const fetchForKey = async () => {
    const { data } = await axios(url);
    
    setKey(data[3].key.id);
  };

  useEffect(() => {
    fetchForKey();
  }, []);

  return (
    <GlobalContext.Provider value={{ key }}>
      {children}
    </GlobalContext.Provider>
  );
};

export { GlobalProvider, GlobalContext };

export const useGlobalState = () => {
  return useContext(GlobalContext);
};
