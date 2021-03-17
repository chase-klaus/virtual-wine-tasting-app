import User from '../models/user.model';

export const CheckDuplicateEmail = (req, res, next) => {
    User.findOne({ where: { mail: req.body.mail } })
        .then(user => {
            if (user) {
                res.status(400).send({ message: "User already exists" });
                return;
            }
            next();
        })
}