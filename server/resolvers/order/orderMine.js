'use strict';

const User = require('../../model/user');
const Order = require('../../model/order');
module.exports = async (data) => {
    const id = data.id
    const dummy = data.dummy
    
    const user = await User.get({id,dummy})

    // const result = await Order.scan({"username":{"contains":user.username}}).exec()
    const result = await Order.query("dummy").eq("주문").where("username").eq(user.username).exec()
    console.log(result)
    return result
};