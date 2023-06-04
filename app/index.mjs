import express from "express";

const app = express();
const port = 3100;

app.get('/', (_req, res) => {
  res.send('Hello World');
})

app.listen(port, () => {
  console.log(`app running on: ${port}`);
});
