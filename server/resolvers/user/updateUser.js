'use strict';

const AWS = require('aws-sdk');
const dynamoDb = new AWS.DynamoDB.DocumentClient();
const uuid = require('uuid');
const User = require('../../model/user');
module.exports =  async(id,createdAt,username) => {
    
    const result = await User.update({"id":id,"createdAt":createdAt,"username":username});
    console.log(result)
    
    return "이름이 변경되었습니다."
};