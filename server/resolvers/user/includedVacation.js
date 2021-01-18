'use strict';

const User = require('../../model/user');
module.exports = () => dynamoDb.scan({ 
    TableName: process.env.USER_TABLE,
    FilterExpression: "#posit = :posit",
    ExpressionAttributeNames: {
        "#posit": "posit"
    },
    ExpressionAttributeValues: {
       ":posit": "휴가자"
    }  

 }).promise().then(r => r.Items);