const requestsHandler = function (req, res) {
  const url = req.url;
  const method = req.method;
  let usernameData = ""; // Changed const to let

  /* Route "/" */
  if (url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>My first server</title></head>");
    res.write(
      // Corrected the form input and button (there was a typo)
      "<body><h1>Hey, new user! Welcome from the server!</h1><form action='/create-user' method='POST'><input type='text' name='username' /><button type='submit'>Submit</button></form></body>"
    );
    res.write("</html>");
    return res.end();
  }

  /* Route "/create-user" */
  if (url === "/create-user" && method === "POST") {
    req.on("data", (chunk) => {
      usernameData += chunk;
    });
    req.on("end", () => {
      console.log(usernameData);
      // Handle the data, e.g., save the username
      // Then redirect or respond
      res.statusCode = 302;
      res.setHeader("Location", "/");
      res.end();
    });
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

module.exports = requestsHandler;
