'use strict';


const uuid = require('uuid');
const User = require('../../model/user');
module.exports = async(data) => {
    const myUser = new User({
        dummy:"유저",
        username: data.username,
        status: "대기중",
        position: "주문자",
        _id: String(uuid.v1()),
        createdAt: String(Date.now())
    })
    console.log(myUser._id)
    console.log(typeof(myUser._id))
    console.log("registerUser")
    return await myUser.save()
};