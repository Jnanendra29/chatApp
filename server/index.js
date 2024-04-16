const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const userRoute = require("./Routes/userRoute");
const chatRoute = require("./Routes/chatRoute");
const messageRoute = require("./Routes/messageRoute");

const app = express();
require("dotenv").config();

app.use(express.json());
app.use(cors());

app.use("/api/users", userRoute);
app.use("/api/chats", chatRoute);
app.use("/api/messages", messageRoute);

const port = process.env.PORT || 7000;
const url = process.env.COMPASS_URL;

app.listen(port, (req, res) => {
  console.log(`server is up and running at port: ${port}`);
});

mongoose
  .connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Successfully connected to mongoDB"))
  .catch((error) => console.log("MongoDB connection failed: ", error.message));
