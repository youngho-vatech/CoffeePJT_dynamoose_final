'use strict';

const AWS = require('aws-sdk');
const dynamoDb = new AWS.DynamoDB.DocumentClient();
const uuid = require('uuid');
const User = require('../../model/user');
module.exports =  async(_id, username) => {
    const dummy = "유저"
    const result = await User.update({"dummy":dummy,"_id":_id,"username":username});
    console.log(result)
    
    return "이름이 변경되었습니다."
};