import client from "../client";

export default {
  list: () => client.get("internal/ui/services"),
};