const express = require("express");
const router = express.Router();

router.get("/api", (req, res) => {
  res.send("this hit the test");
});

module.exports = router;
