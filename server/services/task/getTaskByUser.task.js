const { getByUser } = require('../../data-access/repositories/task.repository'); 
const { getByEmail } = require('../../data-access/repositories/user.repository');

const getByUserHandle = async (user) => {
    const userBD = await getByEmail(user.email);
    if(!userBD) throw {message: 'User not found'};
    return await getByUser({
        id: userBD._id
    });
}


module.exports = {
    getByUserHandle
}