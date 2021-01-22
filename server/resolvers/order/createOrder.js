'use strict';

const uuid = require('uuid');
const User = require('../../model/user');
const Order = require('../../model/order');
module.exports = async (data) => {
    const _id = data._id
    const dummy = "유저"
    const user = await User.get({dummy,_id})
    
    if(user.stat == "주문완료") return null
    await User.update({"dummy":dummy,"_id":_id,"stat":"주문완료"});
    
    const myOrder = new Order({
            menu: data.menu,
            hi: data.hi,
            username: user.username,
            _id: uuid.v1(),
            createdAt: String(Date.now()),
            dummy:"주문"
        })
    return await myOrder.save()
};