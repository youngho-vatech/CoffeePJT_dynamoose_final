'use strict';

const User = require('../../model/user');
module.exports = async() =>{
    const result = await User.scan({"posit":{"contains":"주문자"},"stat":{"contains":"대기중"}}).exec()
    console.log(result)
    return result
}