// require = require("esm")(module);
const phpServer = require("node-php-server");
// const path = require("path");

// Create a PHP Server
phpServer.createServer({
  port: 8000,
  hostname: "127.0.0.1",
  base: ".",
  keepalive: false,
  open: false,
  bin: "php",
  router: __dirname + "/server.php",
});
