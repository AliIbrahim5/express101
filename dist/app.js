"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
app.use((req, res, next) => {
    console.log("middleware1");
    next();
}, (req, res, next) => {
    console.log("middleware2");
    next();
});
const checkip = (req, res, next) => {
    if (req.ip == "0,1,0,0,0") {
        console.log("not allowed");
    }
    else {
        next();
    }
};
app.get("/users", checkip, (req, res) => {
    res.json({
        message: "welcome to express",
    });
});
const PROT = 5000;
app.listen(PROT, () => {
    console.log("server listening on port " + PROT);
});
