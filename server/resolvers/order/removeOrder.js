'use strict';

const Order = require('../../model/order');
const User = require('../../model/user');
module.exports = async (userid, orderid) => {
    
    let dummy = "유저"
    await User.update({"_id":userid,"dummy":dummy,"stat":"주문취소"});
    
    dummy="주문"
    const result = await Order.delete({orderid,dummy})
    console.log(result)
    return "주문이 삭제 되었습니다."
};