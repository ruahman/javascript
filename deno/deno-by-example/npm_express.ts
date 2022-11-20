import express from "npm:express@^4.18";

if (import.meta.main) {
  const app = express();

  app.get("/", function (_req, res) {
    res.send("Hello World");
  });

  console.log("listening on http://localhost:3000/");
  app.listen(3000);
}
