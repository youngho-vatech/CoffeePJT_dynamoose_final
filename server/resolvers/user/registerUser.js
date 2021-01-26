'use strict';


const uuid = require('uuid');
const User = require('../../model/user');
module.exports = async(data) => {
    const myUser = new User({
        dummy:"유저",
        username: data.username,
        stat: "대기중",
        posit: "주문자",
        _id: uuid.v1(),
        createdAt: String(Date.now())
    })
    console.log("registerUser")
    return await myUser.save()
};