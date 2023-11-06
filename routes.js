const fs = require("fs");

const requestsHandler = function (req, res) {
  const url = req.url;
  const method = req.method;

  /* Route "/" */
  if (url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>My first server</title></head>");
    res.write(
      "<body><h1>Hey, new user! Welcome from the server!</h1><form action='/username' method='POST'><input type='text' name'username' /><button type'submit'>Submit</button></form></body>"
    );
    res.write("</html>");
    return res.end();
  }

  /* Route "/users" */
  if (url === "/users") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>My first server</title></head>");
    res.write(
      "<body><ul><li>Larissa</li><li>Geovana</li><li>Heitor</li></ul></body>"
    );
    res.write("</html>");
    return res.end();
  }
};
