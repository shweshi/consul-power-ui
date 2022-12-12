import client from "../client";

export default {
  list: () => client.get("internal/ui/nodes"),
  deregister: (data) => client.put("catalog/deregister", data),
  getNode: (node) => client.get("internal/ui/node/" + node),
};