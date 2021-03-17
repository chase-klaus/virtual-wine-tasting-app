import jwt from 'jsonwebtoken';
// import User from '../models/user.model';

const SECRET_KEY = process.env.SECRET_KEY || "thisisourwinetastingapp";

export const verifyToken = (req, res, next) => {
    const token = req.headers['x-access-token'];
    if (!token) return res.sendStatus(403).send({ message: "No token provided" });
    jwt.verify(token, SECRET_KEY, (err, decoded) => {
        if (err) {
            return res.status(401).send({ message: "Unauthorized!" })
        }
        req.userId = decoded.id;
        next();
    });

};
