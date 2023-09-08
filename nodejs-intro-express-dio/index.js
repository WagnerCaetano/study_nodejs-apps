const express = require("express");
const userRoute = require("./routes/userRoute");
const bodyParser = require("body-parser");

const port = 3000;
const app = express();

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));

userRoute(app);

app.get("/", (req, res) => res.send("Olá mundo pelo Express!"));

app.listen(port, () => console.log(`API rodando na porta http://localhost:${port}`));
