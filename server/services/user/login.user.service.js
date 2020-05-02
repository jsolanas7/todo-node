const { getByEmail } = require('../../data-access/repositories/user.repository'); 
const { compareHash } = require('../login/hash.service');
const { generateToken } = require('../login/token.service');
const loginHandle = async (user) => {
    const userBD = await getByEmail(user.email);
    if(!userBD){
        throw {message:'User not found'};
    }
    if(!compareHash(userBD.password, user.password)){
        throw {message:'Wrong password'};
    }
    return generateToken({
        _id: userBD._id,
        firstName: userBD.firstName,
        surName: userBD.surName,
        email: userBD.email
    });
}


module.exports = {
    loginHandle
}