'use strict';

const User = require('../../model/user');
module.exports = async(_id) => {
    const dummy = "유저"
    const result = await User.get({dummy,_id})
    console.log(result, "me")
    return result
};