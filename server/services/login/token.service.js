const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const SEED = process.env.SEED;

const generateToken = (user) =>{
    return jwt.sign({user}, SEED, {expiresIn: 60 * 60});
}

const compareHash = (hash, password) => {
    return bcrypt.compareSync(password,hash);
}

module.exports = {
    generateToken
}