import client from "../client";

export default {
  list: () => client.get("config/service-router"),
  getByName: (name) => client.get(`config/service-router/${name}`),
};