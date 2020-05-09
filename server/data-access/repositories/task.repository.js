const Task = require('../models/task.model');


const create = async ({description,creationDate,expirationDate,status,user}) => {
    const newTask = new Task({
        description,
        creationDate,
        expirationDate,
        status,
        user
    });
    return await newTask.save();
}

const getNotExpired = async () => {
    const tasks = await Task.find({'status': {$ne : 'EXPIRED'}})
                       .lean()
                       .exec();
    return tasks;
}

const updateExpiredTasks = async (tasksToUpdate) => {
    await tasksToUpdate.forEach( async task =>  {
        await Task.findByIdAndUpdate(task._id, {status: 'EXPIRED'});
    });
}

const getByUser = async ({id}) => {
    return await Task.find({user: id});
}

module.exports = {
    create,
    getNotExpired,
    updateExpiredTasks,
    getByUser
}