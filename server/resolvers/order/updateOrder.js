'use strict';

const AWS = require('aws-sdk');
const dynamoDb = new AWS.DynamoDB.DocumentClient();
const uuid = require('uuid');
const User = require('../../model/user');
const Order = require('../../model/order');
module.exports = async (data) => {
    let id = data.userid
    let createdAt = data.createdAtU
    
    await User.update({"id":id,"createdAt":createdAt,"stat":"주문완료"});
    

    id = data.orderid;
    createdAt = data.createdAtO;
    let hi = data.hi
    let menu = data.menu

    const result = await Order.update({"id":id,"createdAt":createdAt},{"hi":hi,"menu":menu});
    return result
};