const express = require("express");
const app = express();
const port = 3000;
const userRoute = require("./routes/user.route");
app.use(express.json());
app.use("/", userRoute);
app.listen(port, () => console.log(`server listening on port ${port}!`));
