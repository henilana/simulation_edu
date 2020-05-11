console.log("app is loading");
const express = require("express");
const app = express();
const routeHelper = require("./routeHelper.js");

// used for json inside body 
app.use(express.json());

app.get("/api", (req, res) => {
  console.log("root is accessed");
  res.send({res:"result from server"});
});


app.put("/chooserole/update", (req, res) => {
   routeHelper.chooseRoleUpdate(req, res);
});


app.get("/chooserole/get", (req, res) => {
  routeHelper.chooseRoleGet(req, res);
});



const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
