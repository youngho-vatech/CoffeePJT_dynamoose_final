'use strict';

const Order = require('../../model/order');
const User = require('../../model/user');
const Task = require('../../model/task');
module.exports = async() => {
    const orders = await Order.scan().exec()
    const tasks = await Task.scan().exec()
    const users = await User.scan().exec()
    
    for (let i = 0; i < orders.length; i++) {
        let _id = orders[i]._id
        let dummy = "주문"
        const result = await Order.delete({_id,dummy})
    }

    for (let i = 0; i < users.length; i++) {
        let _id = users[i]._id
        let dummy = "유저"
        const result = await User.update({"_id":_id,"dummy":dummy},{"posit":"주문자","stat":"대기중"})
        
    }

    for (let i = 0; i < tasks.length; i++) {
        let _id = tasks[i]._id
        let dummy = "게시글"
        const result = await Task.delete({_id,dummy})
        
    }

    return "주문이 최종 확정 되었습니다. 맛있게 드세요!"
};