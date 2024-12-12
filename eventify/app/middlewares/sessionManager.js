const jwt = require("jsonwebtoken");

module.exports = {
    loginMiddleware: (req, res, next) => {
        console.log("Login Middleware Called");
        try {
            let token;
            if (
                req.headers.authorization &&
                req.headers.authorization.split(" ")[0] === "Bearer"
            ) {
                token = req.headers.authorization.split(" ")[1];
            } else if (req.query && req.query.token) {
                token = req.query.token;
            }
            jwt.verify(token, "secret", async function (err, decoded) {
                if (err) {
                    return res
                        .status(401)
                        .json({ error: "Token Validation Failed.", status: 401 });
                } else {
                    var userId = decoded.userId;
                    if (userId) {
                        req.userId = userId;
                    } else {
                        return res
                            .status(401)
                            .json({ error: "Token Validation Failed.", status: 401 });
                    }
                    next();
                }
            });
        } catch (error) {
            console.log("error", error);
            res.status(503).json({ message: "Something went wrong." });
        }
    },
};
