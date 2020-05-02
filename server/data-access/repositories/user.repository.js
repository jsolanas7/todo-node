const User = require('../models/user.model');


const create = async ({firstName,surName,email,password}) => {
    const newUser = new User({
        firstName,
        surName,
        email,
        password
    });
    return await newUser.save();
}

const getByEmail = async (email) => {
    const user = User.findOne({'email' : email});
    return user;
}

module.exports = {
    create,
    getByEmail
}