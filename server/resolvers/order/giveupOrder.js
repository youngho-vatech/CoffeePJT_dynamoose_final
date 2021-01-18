'use strict';

const User = require('../../model/user');
const Order = require('../../model/order');
module.exports = async (data) => {
    const id = data.userid
    const createdAt = data.createdAt
    
    const result = await User.update({"id":id,"createdAt":createdAt,"stat":"주문포기"});
    console.log(result)
    return "주문을 포기하셨습니다."
};