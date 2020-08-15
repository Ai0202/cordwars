import { app } from "./app";

const port = 3002 || process.env.port;
app.listen(port, () => {
  console.log(`API Server listenning on port ${port}!!`);
});

app;
