const { create } = require('../../data-access/repositories/user.repository'); 
const { encryptPassword } = require('../login/hash.service');

const createHandle = async (user) => {
    return await create({
        firstName: user.firstName,
        surName: user.surName,
        email: user.email,
        password: encryptPassword(user.password)
    });
}


module.exports = {
    createHandle
}