import * as Express from "express";
import { SimpleMaxDigitSum } from "./SimpleMaxDigitSum"

const app = Express();
app.get("/", (req, res) => {
  SimpleMaxDigitSum(10);
  res.send("Hello, VS Code!!!");
});

export { app };