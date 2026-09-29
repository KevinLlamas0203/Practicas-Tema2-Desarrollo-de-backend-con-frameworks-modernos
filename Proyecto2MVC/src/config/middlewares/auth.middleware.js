const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
    const authHeader = req.headers["authorization"];
    // fromato "Bearer <token>"
    const token = authHeader && authHeader.split(" ")[1];

    if (!token) {
        return res.status(401).json({ message: "Acceso denegado: Sin token" });
    }

    try {
        const verified = jwt.verify(token, process.env.JWT_SECRET);
        req.user = verified;
        next();
    } catch (error) {
        return res.status(403).json({ message: "Token inválido" });
    }

};

const checkRole = (roles) => {
    return (req, res, next) => {
        if (!roles.includes(req.user.role)) {
            return res.status(403).json({ message: "Acceso denegado: Rol no autorizado" });
        }
        next();
    };
};

module.exports = {
    verifyToken,
    checkRole,
};