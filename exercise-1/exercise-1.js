const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.writeHead(200, {
      "Content-Type": "text/plain",
    });
    const readStream = fs.createReadStream("./large-text-file.txt");
    readStream.pipe(res);
    readStream.on("error", (err) => {
      console.error(err);
      res.statusCode = 500;
      res.end("Internal Server Error");
    });
  } else {
    res.writeHead(404, {
      "Content-Type": "text/plain",
    });
    res.end("Not Found");
  }
});

const port = 8000;
server.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
