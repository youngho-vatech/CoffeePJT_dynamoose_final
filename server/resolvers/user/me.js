'use strict';

const User = require('../../model/user');
module.exports = async(dummy,id) => {
    const result = await User.get({dummy,id})
    console.log(result)
    return result
};