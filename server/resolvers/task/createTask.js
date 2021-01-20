'use strict';
const uuid = require('uuid');
const Task = require('../../model/task');
const User = require('../../model/user');
const Order = require('../../model/order');
module.exports = async (data) => {
    const isthere = await Task.scan().exec()
    
    if (isthere.count != 0) return "이미 진행중인 주문이 있습니다."

    const id = data.userid
    const dummy = "유저"

    const up = await User.update({"id":id,"dummy":dummy,"posit":"결제자"});
    
    const user = await User.get({ id, dummy })
    const creater = user.username
    
    const myTask = new Task({
        dummy:"게시글",
        creater: creater,
        title: data.title,
        id: uuid.v1(),
        createdAt: String(Date.now()),
    });
    return await myTask.save()
};