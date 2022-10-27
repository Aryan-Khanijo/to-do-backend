const express = require('express');
const PORT = process.env.PORT || 6969;
const router = express.Router();
const routes = require('./src/routes');
const app = express();

// app.set(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "*" )
    next();
  });

app.use("/api/note", routes);

app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`);
});