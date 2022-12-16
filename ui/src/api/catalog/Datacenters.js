import client from "../client";

const Datacenters = {
  list: () => client.get("catalog/datacenters"),
};

export default Datacenters;