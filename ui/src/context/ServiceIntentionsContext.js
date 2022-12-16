
import { useState, createContext, useEffect } from 'react';
import ServiceIntentions from '../api/configurations/ServiceIntentions';

const ServiceIntentionsContext = createContext();

export const ConfigurationsProvider = ({ children }) => {
  const [serviceIntentions, setServiceIntentions] = useState(null);

  const fetch = async () => {
    let response = await ServiceIntentions.list();
    if (response.status === 200) {
      response = await response.data;
      setServiceIntentions(response)
    }
  }

  useEffect(() => {
    fetch()
  }, [])

  return (
    <ServiceIntentionsContext.Provider
      value={{ serviceIntentions, fetch }}
    >
      {children}
    </ServiceIntentionsContext.Provider>
  );
};

export default ServiceIntentionsContext;