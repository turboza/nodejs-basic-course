import express from "express";
const app = express();
const port = 8000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/users", (req, res) => {
  // 1. Implement: returns "Users ID: [NUMBER]", ex. "User ID: 20"
  console.log(req.query.id);

  if (!req.query.id) {
    res.status(400).send("id not found");
    return;
  }

  res.send(`User ID: ${req.query.id}`);
});

app.post("/users", (req, res) => {
  // 2. Implement: returns "User ID: [NUMBER], name has been updated to [NAME]".
  const id = req.query.id;
  const name = req.body.name;

  res.send(`User ID: ${id}, name has been updated to ${name}`);
});

app.get("/users/:userId", (req, res) => {
  // 3. Implement: returns "Users ID: [NUMBER]", ex. "User ID: 20"
  res.send(`User ID: ${req.params.userId}`);
});

app.post("/users/:userId", (req, res) => {
  // 4. Implement: returns "User ID: [NUMBER], name has been updated to [NAME]".

  const userId = req.params.userId;
  const name = req.body.name;

  res.send(`User ID: ${userId}, name has been updated to ${name}`);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
