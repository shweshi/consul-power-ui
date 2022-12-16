import client from "../client";

const Services = {
  list: () => client.get("internal/ui/services"),
};

export default Services;