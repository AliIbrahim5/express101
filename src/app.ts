import express, { NextFunction, Request, Response } from "express";
const app = express();

app.use(
  (req, res, next) => {
    console.log("middleware1");
    next();
  },
  (req, res, next) => {
    console.log("middleware2");
    next();
  }
);

const checkip = (req: Request, res: Response, next: NextFunction) => {
  if (req.ip == "0,1,0,0,0") {
    console.log("not allowed");
  } else {
    next();
  }
};

app.get("/users",checkip, (req, res) => {
  res.json({
    message: "welcome to express",
  });
});

const PROT = 5000;
app.listen(PROT, () => {
  console.log("server listening on port " + PROT);
});
