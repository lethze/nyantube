import express from "express";
import { home, getSearch } from "../controllers/videoController";
import { join, login, getJoin, postJoin } from "../controllers/userController";

const rootRouter = express.Router();

rootRouter.get("/", home);
rootRouter.route("/join").get(getJoin).post(postJoin);
rootRouter.get("/login", login);
rootRouter.get("/search", getSearch);

export default rootRouter;
