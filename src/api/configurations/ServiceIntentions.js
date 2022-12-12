import client from "../client";

export default {
  list: () => client.get("config/service-intentions"),
  getByName: (name) => client.get("config/service-intentions" + "/" + name),
};