'use strict';

const Order = require('../../model/order');
const User = require('../../model/user');
const Task = require('../../model/task');
module.exports = async() => {
    const orders = await Order.scan().exec()
    const tasks = await Task.scan().exec()
    const users = await User.scan().exec()
    console.log(orders.length)
    console.log(tasks)
    for (let i = 0; i < orders.length; i++) {
        let id = orders[i].id
        let createdAt = orders[i].createdAt
        const result = await Order.delete({id,createdAt})
    }

    for (let i = 0; i < users.length; i++) {
        let id = users[i].id
        let createdAt = users[i].createdAt
        const result = await User.update({"id":id,"createdAt":createdAt},{"posit":"주문자","stat":"대기중"})
        
    }

    for (let i = 0; i < tasks.length; i++) {
        let id = tasks[i].id
        let createdAt = tasks[i].createdAt
        const result = await Task.delete({id,createdAt})
        
    }

    return "주문이 최종 확정 되었습니다. 맛있게 드세요!"
};