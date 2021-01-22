'use strict';

const User = require('../../model/user');
const Order = require('../../model/order');
module.exports = async (data) => {
    const _id = data._id
    const dummy = "유저"
    
    const user = await User.get({_id,dummy})

    // const result = await Order.scan({"username":{"contains":user.username}}).exec()
    const result = await Order.query("dummy").eq("주문").where("username").eq(user.username).exec()
    console.log(result)
    return result
};