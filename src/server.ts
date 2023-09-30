import express, { Request, Response } from "express";
import bodyParser from "body-parser";
import morgan from "morgan";
import cookieSession from "cookie-session";
import { AppRouter } from "./AppRouter";
import "./controllers/LoginController";
import "./controllers/RootController";

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieSession({ keys: ["laskdjf"] }));
app.use(morgan("dev"));

app.use(AppRouter.getInstance());

export { app };
