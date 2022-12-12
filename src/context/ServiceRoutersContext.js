import { useState, createContext, useEffect } from 'react';
import ServiceRouters from '../api/configurations/ServiceRouters';

const ServiceRoutersContext = createContext();

export const ConfigurationsProvider = ({ children }) => {
  const [serviceRouters, setServiceRouters] = useState(null);

  const fetch = async () => {
    let response = await ServiceRouters.list();
    if (response.status === 200) {
      response = await response.data;
      setServiceRouters(response)
    }
  }

  useEffect(() => {
    fetch()
  }, [])

  return (
    <ServiceRoutersContext.Provider
      value={{ serviceRouters, fetch }}
    >
      {children}
    </ServiceRoutersContext.Provider>
  );
};

export default ServiceRoutersContext;