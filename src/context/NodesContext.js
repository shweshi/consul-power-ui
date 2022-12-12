
import { useState, createContext, useEffect } from 'react';
import Nodes from '../api/catalog/Nodes';

const NodesContext = createContext();

export const NodesProvider = ({ children }) => {
  const [nodes, setNodes] = useState(null);

  const fetch = async () => {
    let response = await Nodes.list();
    if (response.status === 200) {
      response = await response.data;
      setNodes(response)
    }
  }

  useEffect(() => {
    fetch()
  }, [])

  return (
    <NodesContext.Provider
      value={{ nodes, fetch }}
    >
      {children}
    </NodesContext.Provider>
  );
};

export default NodesContext;