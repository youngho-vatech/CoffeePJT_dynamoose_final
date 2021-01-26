'use strict';
const uuid = require('uuid');
const Task = require('../../model/task');
const User = require('../../model/user');
const Order = require('../../model/order');
module.exports = async (data) => {
    const isthere = await Task.scan().exec()
    console.log(isthere)
    if (isthere.count != 0) return isthere

    const _id = data.userid
    const dummy = "유저"

    const up = await User.update({"_id":_id,"dummy":dummy,"posit":"결제자"});
    
    const user = await User.get({ dummy, _id })
    const creater = user.username
    
    const myTask = new Task({
        dummy:"게시글",
        creater: creater,
        title: data.title,
        _id: uuid.v1(),
        createdAt: String(Date.now()),
    });
    console.log("createTask")
    const result = await myTask.save()
    return result
};