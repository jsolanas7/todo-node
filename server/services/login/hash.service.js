const bcrypt = require('bcrypt');


const encryptPassword = (password) =>{
    return bcrypt.hashSync(password, 10);
}

const compareHash = (hash, password) => {
    return bcrypt.compareSync(password,hash);
}

module.exports = {
    encryptPassword,
    compareHash
}