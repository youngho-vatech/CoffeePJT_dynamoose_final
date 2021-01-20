'use strict';

const User = require('../../model/user');
const Order = require('../../model/order');
module.exports = async (data) => {
    const id = data.userid
    const dummy = data.dummy
    
    const result = await User.update({"dummy":dummy,"id":id,"stat":"주문포기"});
    console.log(result)
    return "주문을 포기하셨습니다."
};