let express = require("express")
let app = express();
const routes = require("./routes/index")

app.use((req, res, next) => {
  console.log("Up and Running");
  next()
})

app.use("/", routes)

app.set("view engine", "pug")
app.use(express.static(__dirname + "/public"))
app.set("views", __dirname + "/views")

app.listen(3000, () => {
  console.log("TensorFlowProject up and running")
})
