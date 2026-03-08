import express from "express";
import cors from "cors";
const app = express();

app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173",
  }),
);

let users = [
  { id: 1, name: "ali" },
  { id: 2, name: "ahmed" },
];

app.get("/", (req, res) => {
  res.send("server is started");
});

app.get("/users", (req, res) => {
  res.json(users);
});

app.post("/create-users", (req, res) => {
  const newuser = {
    id: users.length + 1,
    name: req.body.name,
  };

  users.push(newuser);
  res
    .status(201)
    .send({ message: "user is created", succes: true, newuser, users });
});

app.put("/update/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const user = users.find((u) => u.id === id);
  if (!user) {
    res.status(404).send({ message: "user not found", succes: false });
  }
  user.name = req.body.name;
  res
    .status(201)
    .send({ message: "user updated scucesfullt", success: true, users, user });
});
app.delete("/delete/:id", (req, res) => {
  const id = parseInt(req.params.id);
  users = users.filter((u) => u.id !== id);
  res
    .status(200)
    .send({ message: "user deleted successfully", succes: true, users });
});
app.listen(3000, () => {
  console.log("server is running on port 3000");
});
