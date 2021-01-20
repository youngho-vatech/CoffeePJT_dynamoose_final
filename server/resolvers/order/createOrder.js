'use strict';

const uuid = require('uuid');
const User = require('../../model/user');
const Order = require('../../model/order');
module.exports = async (data) => {
    const id = data.id
    const dummy = data.dummy
    const user = await User.get({dummy,id})
    
    if(user.stat == "주문완료") return null
    await User.update({"dummy":dummy,"id":id,"stat":"주문완료"});
    
    const myOrder = new Order({
            menu: data.menu,
            hi: data.hi,
            username: user.username,
            id: uuid.v1(),
            createdAt: String(Date.now()),
            dummy:"주문"
        })
    return await myOrder.save()
};