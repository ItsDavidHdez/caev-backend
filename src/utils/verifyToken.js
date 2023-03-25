const jwt = require("jsonwebtoken");

function verifyToken(req, res, next) {
  if (!req.headers.authorization) {
    return res.status(401).send("Unathorize request");
  }

  const token = req.headers.authorization.split(" ")[1];
  if (token === null) {
    return res.status(401).send("Unathorize request");
  }

  const data = jwt.verify(token, "secretkey");
  req.userId = data._id;
  next();
}

module.exports = { verifyToken };
