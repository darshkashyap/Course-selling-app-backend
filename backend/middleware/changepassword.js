const { JWT_USER_PASSWORD, JWT_ADMIN_PASSWORD } = require("../config.js");
const jwt = require("jsonwebtoken");

const changePasswordMiddleware = (req, res, next) => {
    const token = req.headers.authorization?.split(" ")[1];

    if (!token) {
        return res.status(401).json({ message: "Unauthorized" });
    }

    try {
        let decoded;

        try {
            decoded = jwt.verify(token, JWT_USER_PASSWORD);
        } catch (err) {

            decoded = jwt.verify(token, JWT_ADMIN_PASSWORD);
        }

        req.userId = decoded.userId;
        req.role = decoded.role;

        next();

    } catch (err) {
        return res.status(401).json({ message: "Unauthorized" });
    }
};

module.exports = { changePasswordMiddleware };