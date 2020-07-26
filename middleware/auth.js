const jwt = require("jsonwebtoken");
const UserModel = require("../models/User.js");

const auth = async(req, res, next) => {
    try {
        const token = req.headers.authorization;
        jwt.verify(token,"Sushiya2020");
        const user = await UserModel.findOne({
            token: token
        })
        if (!user){
            return res.status(401).send({
                message: "You are not authorized."
            });
        }
        req.user = user;
        next();
        
    } catch (error) {
        console.error(error)
        return res.status(401).send({
            message: "You are not authorized.",
            error
        })
    }
}

module.exports = auth;