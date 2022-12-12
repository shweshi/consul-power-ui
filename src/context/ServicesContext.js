import { useState, createContext, useEffect } from 'react';
import Services from '../api/catalog/Services';

const ServicesContext = createContext();

export const ServicesProvider = ({ children }) => {
  const [services, setServices] = useState(null);

  useEffect(() => {
    async function fetch() {
      let response = await Services.list();
      if (response.status === 200) {
        response = await response.data;
        setServices(response)
      }
    }

    fetch()
  }, [])

  return (
    <ServicesContext.Provider
      value={{ services }}
    >
      {children}
    </ServicesContext.Provider>
  );
};

export default ServicesContext;