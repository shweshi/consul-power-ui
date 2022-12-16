import client from "../client";

const Nodes = {
  list: () => client.get("internal/ui/nodes"),
  deregister: (data) => client.put("catalog/deregister", data),
  getNode: (node) => client.get("internal/ui/node/" + node),
};

export default Nodes;