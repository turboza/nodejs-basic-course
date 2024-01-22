import express from "express";

const app = express();
const port = 8000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/myapp", (req, res) => {
  console.log(req.query);
  const keyword = req.query.keyword;

  res.send(`You are searching: ${keyword}`);
});

app.get("/product/:id", (req, res) => {
  console.log(req.params);

  res.send(`Your params: ${req.params.id}`);
});

app.post("/login", (req, res) => {
  console.log(req.body);
  res.send(`login`);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
