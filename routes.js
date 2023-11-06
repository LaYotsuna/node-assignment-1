const fs = require("fs");

const requestsHandler = function (req, res) {
  const url = req.url;
  const method = req.method;

  /* Route "/" */
  if (url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html></html>");
    res.write("<head><title>My first server</title></head>");
    res.write("<body><h1>Hey, new user! Welcome from the server!</h1></body>");
    return res.end();
  }
};
