import express from "express";
import { isValidName } from "./utils.js";

const app = express();
const port = 8000;

app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(express.static("public"));

// user database variable here:
const userDatabase = {
  20: "Manee",
  21: "Mana",
  22: "Mano",
};

app.get("/users", (req, res) => {
  const users = Object.keys(userDatabase).map((id) => {
    return { id, name: userDatabase[id] };
  });

  res.json({ data: users });
});

app.get("/users/:userId", (req, res) => {
  const userId = req.params.userId;
  const name = userDatabase[userId];

  if (!name) {
    res.status(404).json({
      error: {
        message: "User not found",
      },
    });
    return;
  }

  res.json({
    data: {
      id: userId,
      name,
    },
  });
});

app.post("/users/:userId", (req, res) => {
  const userId = req.params.userId;
  const name = req.body.name;

  if (!userDatabase[userId]) {
    res.status(404).json({
      error: {
        message: "User not found",
      },
    });
    return;
  }

  if (!isValidName(name)) {
    res.status(404).json({
      error: {
        message: "The specified name is invalid",
      },
    });
    return;
  }

  userDatabase[userId] = name;

  res.json({
    data: {
      id: userId,
      name,
    },
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
