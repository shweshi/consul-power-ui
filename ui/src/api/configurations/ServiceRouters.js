import client from "../client";

const ServiceRouters = {
  list: () => client.get("config/service-router"),
  getByName: (name) => client.get(`config/service-router/${name}`),
};

export default ServiceRouters;