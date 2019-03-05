let express = require("express")
let router = express.Router()

router.get("/", (req, res, next) => {
  return res.send("Home Page")

})

module.exports = router
