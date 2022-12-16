import { useState, createContext, useEffect } from 'react';
import Datacenters from '../api/catalog/Datacenters';

const DatacenterContext = createContext();

export const DatacenterProvider = ({ children }) => {
  const [datacenters, setDatacenters] = useState(null);

  useEffect(() => {
    async function fetch() {
      let response = await Datacenters.list();
      if (response.status === 200) {
        response = await response.data;
        setDatacenters(response);
        if (!localStorage.getItem('datacenter')) {
          localStorage.setItem('datacenter', response[0]);
        }
      }
    }

    fetch()
  }, [])

  return (
    <DatacenterContext.Provider
      value={{ datacenters }}
    >
      {children}
    </DatacenterContext.Provider>
  );
};

export default DatacenterContext;