const { create } = require('../../data-access/repositories/task.repository'); 

const createHandle = async (task) => {
    return await create({
        description: task.description,
        creationDate: new Date,
        expirationDate:new Date(task.expirationDate),
        status: 'NEW',
        user: task.userID
    });
}


module.exports = {
    createHandle
}