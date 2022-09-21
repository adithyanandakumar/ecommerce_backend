const jwt = require('jsonwebtoken');
const path = require('path')
require('dotenv').config({ path: path.resolve(__dirname, '../.env') })

//check jwt token; store jwt key as env
module.exports = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(" ")[1];
        const decoded = jwt.verify(token, process.env.JWT_KEY);
        req.userData = decoded;
        if (req.userData.role!="Admin") {
          res.send(error)
        }
        next();
    } catch (error) {
        return res.status(401).json({
            message: 'Auth failed'
        });
    }
};
