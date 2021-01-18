'use strict';

const AWS = require('aws-sdk');
const dynamoDb = new AWS.DynamoDB.DocumentClient();
const Order = require('../../model/order');
module.exports = async (id, createdAt) => {
   
    const result = await Order.delete({id,createdAt})
    console.log(result)
    return "주문이 삭제 되었습니다."
};