'use strict';

const AWS = require('aws-sdk');
const dynamoDb = new AWS.DynamoDB.DocumentClient();
const uuid = require('uuid');
const User = require('../../model/user');
const Order = require('../../model/order');
module.exports = async (data) => {
    const id = data._id
    const createdAt = data.createdAt
    console.log(id, createdAt)
    
    const user = await User.get({id,createdAt})
    
    
    if(user.stat == "주문완료") return null
    await User.update({"id":id,"createdAt":createdAt,"stat":"주문완료"});
    
    console.log(user.stat)
    const myOrder = new Order({
        
            menu: data.menu,
            hi: data.hi,
            username: user.username,
            id: uuid.v1(),
            createdAt: String(Date.now())
        })
    // result = await myOrder.save()
    return await myOrder.save()
};