'use strict';

const AWS = require('aws-sdk');
const dynamoDb = new AWS.DynamoDB.DocumentClient();
const Order = require('../../model/order');
module.exports = async (hi) => {
        const result = await Order.scan({"hi":{"contains":hi}}).exec()
        console.log(result)
        return result
    
}