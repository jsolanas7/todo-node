const express = require('express');
const app = express();
const { createHandle } = require('../services/task/create.task.service');
const { getByUserHandle } = require('../services/task/getTaskByUser.task');
const { validateToken } = require('../middlewares/authentication');


app.post('/task/create', [validateToken], async (req,res) => {
    try{
        await createHandle(req.body);
        res.json({
            ok:true
        })
    }catch(exc){
        res.json({
            ok: false,
            message: exc.message
        })
    }
})

app.get('/task/getByUser', [validateToken], async (req,res) => {
    try{
        const tasks = await getByUserHandle(req.body);
        res.json({
            ok:true,
            tasks
        })
    }catch(exc){
        res.json({
            ok: false,
            message: exc.message
        })
    }
})


module.exports = app;