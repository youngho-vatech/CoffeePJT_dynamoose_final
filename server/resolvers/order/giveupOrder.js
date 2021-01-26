'use strict';

const User = require('../../model/user');
const Order = require('../../model/order');
module.exports = async (data) => {
    const _id = data.userid
    const dummy ="유저"
    
    const result = await User.update({"dummy":dummy,"_id":_id,"stat":"주문포기"});
    console.log(result, "giveupOrder")
    return "주문을 포기하셨습니다."
};