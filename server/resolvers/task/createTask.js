'use strict';
const uuid = require('uuid');
const Task = require('../../model/task');
const User = require('../../model/user');
const Order = require('../../model/order');
module.exports = async (data) => {
    const isthere = await Task.scan().exec()
    console.log(isthere)
    if (isthere.count != 0) return "이미 진행중인 주문이 있습니다."

    const id = data.userid
    const createdAt = data.createdAt

    const user = await User.get({ id, createdAt })

    const creater = user.username

    const myTask = new Task({

        creater: creater,
        title: data.title,
        id: uuid.v1(),
        createdAt: String(Date.now()),

    });
    return await myTask.save()
};