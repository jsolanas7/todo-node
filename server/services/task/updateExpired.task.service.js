const { getNotExpired } = require('../../data-access/repositories/task.repository'); 
const { updateExpiredTasks } = require('../../data-access/repositories/task.repository');

const expiredHandle = async () => {
    const tasks = await getNotExpired();
    if(tasks){
        const tasksExpired = tasks.filter(x => new Date(x.expirationDate) < new Date());
        if(tasksExpired){
            await updateExpiredTasks(tasksExpired);
        }
    }
}

module.exports = {
    expiredHandle
}