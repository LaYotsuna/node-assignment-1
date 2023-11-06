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
    let body = "";
    req.on("data", (chunk) => {
      body += chunk.toString(); // convert Buffer to string
    });
    req.on("end", () => {
      const parsedBody = querystring.parse(body);
      const username = parsedBody.username;
      console.log(username.split("=")); // Log the username to the console

      // After logging the username, you would typically redirect or send some response back
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
