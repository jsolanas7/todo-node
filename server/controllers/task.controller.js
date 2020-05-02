const express = require('express');
const app = express();
const { createHandle } = require('../services/task/create.task.service');
const { getUserByEmailHandle } = require('../services/user/getByEmail.user.service');
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

app.get('/task/getByDescription', [validateToken], async (req,res) => {
    try{
        const user = await getUserByEmailHandle(req.body);
        res.json({
            ok:true,
            user: {
                _id: user._id,
                firstName: user.firstName,
                surName: user.surName,
                email: user.email
            }
        })
    }catch(exc){
        res.json({
            ok: false,
            message: exc.message
        })
    }
})


module.exports = app;