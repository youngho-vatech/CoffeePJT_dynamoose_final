'use strict';

const User = require('../../model/user');
const Order = require('../../model/order');
module.exports = async (data) => {
    let _id = data.userid
    let dummy = "유저"
    
    await User.update({"_id":_id,"dummy":dummy,"stat":"주문완료"});
    

    _id = data.orderid;
    dummy = "주문";
    let hi = data.hi
    let menu = data.menu

    const result = await Order.update({"_id":_id,"dummy":dummy},{"hi":hi,"menu":menu});
    console.log(result, "updateOrder")
    return result
};