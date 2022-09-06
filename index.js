const express = require("express");
const postRouter = require("./routes/posts.routes");
const app = express();

app.get("/", (req, res, next) => {
  res.status(200).send("homepage");
});

app.use("/posts", postRouter);

app.listen(4000, () => {
  console.log("Server is running on port 4000");
});
