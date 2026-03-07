const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/users") {
    const users = [
      { id: 1, name: "ALI" },
      { id: 2, name: "ahemd" },
    ];

    res.setHeader("content-Type", "application/json");
    res.write(JSON.stringify(users));

    res.end();
  }
});

server.listen(3000, () => {
  console.log("server is running on port 3000");
});
