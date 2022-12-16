
import { useState, createContext, useEffect } from 'react';
import Consul from '../api/consul/Consul';

const ConsulContext = createContext();

export const ConsulProvider = ({ children }) => {
  const [leader, setLeader] = useState(null);
  const [peers, setPeers] = useState(null);
  const [autopilotHealth, setAutopilotHealth] = useState(null);
  const [autopilotConfiguration, setAutopilotConfiguration] = useState(null);
  const [consulConfiguration, setConsulConfiguration] = useState(null);

  const fetchLeader = async () => {
    let response = await Consul.getLeader();
    if (response.status === 200) {
      response = await response.data;
      setLeader(response)
    }
  }

  const fetchPeers = async () => {
    let response = await Consul.getPeers();
    if (response.status === 200) {
      response = await response.data;
      setPeers(response)
    }
  }

  const fetchAutopilotHealth = async () => {
    let response = await Consul.getAutopilotHealth();
    if (response.status === 200) {
      response = await response.data;
      setAutopilotHealth(response)
    }
  }

  const fetchAutopilotConfiguration = async () => {
    let response = await Consul.getAutopilotConfiguration();
    if (response.status === 200) {
      response = await response.data;
      setAutopilotConfiguration(response)
    }
  }

  const fetchConsulConfigurations = async () => {
    let response = await Consul.getConsulConfiguration();
    if (response.status === 200) {
      response = await response.data;
      setConsulConfiguration(response)
    }
  }

  useEffect(() => {
    fetchLeader()
    fetchPeers()
    fetchAutopilotHealth()
    fetchAutopilotConfiguration()
    fetchConsulConfigurations()
  }, [])

  return (
    <ConsulContext.Provider
      value={{ leader, peers, autopilotHealth, autopilotConfiguration, consulConfiguration }}
    >
      {children}
    </ConsulContext.Provider>
  );
};

export default ConsulContext;