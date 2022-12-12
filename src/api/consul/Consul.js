import client from "../client";

export default {
  getLeader: () => client.get("status/leader"),
  getPeers: () => client.get("status/peers"),
  getAutopilotHealth: () => client.get("operator/autopilot/health"),
  getAutopilotConfiguration: () => client.get("operator/autopilot/configuration"),
  getConsulConfiguration: () => client.get("agent/self"),
};