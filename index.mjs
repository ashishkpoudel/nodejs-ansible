import express from "express";

const app = express();
const port = 3100;

app.get('/', async (_req, res) => {
  res.send('New feature added....');
})

app.listen(port, () => {
  console.log(`app running on: ${port}`);
});
