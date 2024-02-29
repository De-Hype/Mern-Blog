const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require('morgan');
const UserRoute = require("./Routes/UserRoutes");
const BlogRoute = require("./Routes/BlogRoutes");
const { Connect } = require("./helpers/db");
require("dotenv").config();
const GlobalHandler = require("./errors/GlobalHandler");

const app = express();
process.on("uncaughtException", (err)=>{
    console.log(err.name, err.message);
    console.log('Unhandled Exception, Shutting down server...');
    process.exit(1);
})
app.use(cors());
app.use(helmet());
app.use(morgan('dev'));
app.use(express.json());

//MongoDb Database Connection

app.use("/api/user", UserRoute);
app.use("/api/blog", BlogRoute);
app.all("*", (req, res, next) => {
  next(
    new AppError(
      `Can not find ${req.originalUrl} with ${req.method} on this server`,
      501
    )
  );
});
app.use(GlobalHandler);

const Port = process.env.Port || 8080;

Connect().then(() => {
  app.listen(Port, () => {
    console.log(`Server listening on Port ${Port}`);
  });
});

process.on("unhandledRejection", (err)=>{
    console.log(err.name, err.message);
    console.log("Unhandled Rejection, shutting down server...");
    server.close(()=>{
        process.exit(1);
    })
})
