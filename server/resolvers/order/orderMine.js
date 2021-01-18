'use strict';

const AWS = require('aws-sdk');
const dynamoDb = new AWS.DynamoDB.DocumentClient();
const uuid = require('uuid');
const User = require('../../model/user');
const Order = require('../../model/order');
module.exports = async (data) => {
    const id = data._id
    const createdAt = data.createdAt
    
    const user = await User.get({id,createdAt})

    console.log(user.username)
    const result = await Order.scan({"username":{"contains":user.username}}).exec()
    console.log(result)
    return result
};