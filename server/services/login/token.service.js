const jwt = require('jsonwebtoken');
const SEED = process.env.SEED;

const generateToken = (user) =>{
    return jwt.sign({user}, SEED, {expiresIn: 60 * 60});
}

module.exports = {
    generateToken
}