const express = require("express");
const { createProxyMiddleware } = require("http-proxy-middleware");
var cors = require("cors");

const app = express();
const corsOptions = {
  origin: true,
  credentials: true,
};

app.use(cors(corsOptions));

app.use('/', createProxyMiddleware("/", {
  target: "http://localhost:8500",
  changeOrigin: true,
}));

app.listen(3001, () => {
  console.log("proxy is listening on port 3001");
});