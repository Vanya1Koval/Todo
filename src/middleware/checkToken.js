const jwt = require("jsonwebtoken");
require('dotenv').config();
const { JWT_SECRET } = process.env;

/**
  * checking jwt
  */
function isAuthenticated(req, res, next) {
    try {
        let token = req.get("authorization");
        if (!token) {
            return res.status(404).json({ success: false, msg: "Token not found" });
        }
        token = token.split(" ")[1];
        const decoded = jwt.verify(token, JWT_SECRET);
        req.headers._id = decoded._id;
        next();
    } catch (error) {
        return res.status(401).json({ success: false, msg: error.message });
    }
}

module.exports = { isAuthenticated }