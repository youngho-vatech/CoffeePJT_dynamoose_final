'use strict';

const AWS = require('aws-sdk');
const dynamoDb = new AWS.DynamoDB.DocumentClient();
const User = require('../../model/user');
module.exports = async (word, category) => {
    
        if (word == "") return null
        const result = await User.scan("username").contains(word).exec()
        console.log(result)
        return result
    
    // else {
    //     if (word == "") return null
    //     const result = await User.scan({ "username": { "contains": "주문자" }, "stat": { "contains": "대기중" } }).exec()
    //     console.log(result)
    //     return result
    // }

};