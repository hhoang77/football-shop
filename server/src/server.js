import "dotenv/config";
import express from "express";
import cors from "cors";
import { connectDB } from "./configs/connectDb.js";
// import { connectRedis } from "./configs/redis.js";
import { routers } from "./routers/index.js";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import { corsOptions } from "./configs/cors.js";

const port = process.env.PORT;
connectDB();
// connectRedis();

const app = express();
app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());
app.use("/user", routers.userRoutes);
app.use("/review", routers.reviewRoutes);
app.use("/category", routers.categoryRoutes);
app.use("/club", routers.clubRoutes);
app.use("/product", routers.productRoutes);
app.use("/blog", routers.blogRoutes);
app.use("/order", routers.orderRoutes);

app.listen(port, (req, res) => {
  console.log(`listen running on port ${port}`);
});
