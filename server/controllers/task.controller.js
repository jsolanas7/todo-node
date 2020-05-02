const express = require('express');
const app = express();
const { createHandle } = require('../services/task/create.task.service');
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


module.exports = app;