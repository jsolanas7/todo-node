const jwt = require('jsonwebtoken');

const SEED = process.env.SEED;

let validateToken = async (req,res,next) => {
    try{
        let token = await req.get('token');
        const decode = jwt.verify(token,SEED);
        res.user = decode.user;
        next();
    }catch(err){
        res.status(401).json({
            ok: false,
            message: 'Unauthorized'
        })
    }
        
}

module.exports = {
    validateToken
}