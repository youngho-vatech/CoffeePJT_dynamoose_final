'use strict';

const uuid = require('uuid');
const User = require('../../model/user');
const Order = require('../../model/order');
module.exports = async (data) => {
    const _id = data._id
    const dummy = "유저"
    const user = await User.get({dummy,_id})
    
    if(user.stat == "주문완료") return "이미 주문 하셨습니다."
    await User.update({"dummy":dummy,"_id":_id,"stat":"주문완료"});
    
    const myOrder = new Order({
            dummy:"주문",
            menu: data.menu,
            hi: data.hi,
            username: user.username,
            _id: String(uuid.v1()),
            createdAt: String(Date.now()),
        })
    const result = await myOrder.save()
    console.log(result, "createOrderssssss")
    return result
};