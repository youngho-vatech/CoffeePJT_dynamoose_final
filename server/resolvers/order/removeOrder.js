'use strict';

const Order = require('../../model/order');
const User = require('../../model/user');
module.exports = async (userid, orderid) => {
    
    let dummy = "유저"
    await User.update({"dummy":dummy,"_id":userid,"stat":"주문취소"});
    
    dummy="주문"
    let _id= orderid
    const result = await Order.delete({_id,dummy})
    console.log(result, "removeOrder")
    return result
};