const express = require("express");
const hbs = require("express-handlebars");
const path = require("path");
const Routes = require("./routes/main");

const app = express();
const PORT = process.env.PORT || 8080;

// Set Handlebars as the templating engine
app.engine(
  "hbs",
  hbs.engine({
    extname: "hbs",
    defaultLayout: "layout",
    layoutsDir: __dirname + "/views/layout/",
  })
);
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "hbs");

// Middleware to serve static files
app.use(express.static(path.join(__dirname, "public")));

app.use(Routes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
