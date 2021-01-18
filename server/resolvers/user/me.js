'use strict';

const User = require('../../model/user');
module.exports = async(id, createdAt) => {
    const result = await User.get({id,createdAt})
    console.log(result)
    return result
};