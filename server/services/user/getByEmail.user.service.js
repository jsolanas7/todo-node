const { getByEmail } = require('../../data-access/repositories/user.repository'); 

const getUserByEmailHandle = async (user) => {
    const userBD = await getByEmail(user.email);
    if(!userBD){
        throw {message: 'User not found'};
    }
    return userBD;
}


module.exports = {
    getUserByEmailHandle
}