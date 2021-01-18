'use strict';

const User = require('../../model/user');
module.exports = async() =>{
    const result = await User.scan({"posit":{"contains":"주문자"}}).exec()
    console.log(result)
    return result
}