import client from "../client";

const ServiceIntentions = {
  list: () => client.get("config/service-intentions"),
  getByName: (name) => client.get(`config/service-intentions/${name}`),
};

export default ServiceIntentions;