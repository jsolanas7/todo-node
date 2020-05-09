const express = require('express');
const app = express();
const { loginHandle } = require('../services/user/login.user.service');
const { validateToken } = require('../middlewares/authentication');



app.post('/login', [], async (req,res) => {
    try{
        const result = await loginHandle(req.body);
        res.json({
            ok:true,
            token: result
        })
    }catch(exc){
        res.json({
            ok: false,
            message: exc.message
        })
    }
})

app.get('/validateToken',[validateToken], (req,res) => {
    return res.json({
        ok: true
    });
})


module.exports = app;