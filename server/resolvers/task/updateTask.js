'use strict';

const AWS = require('aws-sdk');
const dynamoDb = new AWS.DynamoDB.DocumentClient();
const uuid = require('uuid');

module.exports = async (data) => {
    let id = data._id
    let createdAt = data.createdAt
    let title = data.title
    const result = await Task.update({"id":id,"createdAt":createdAt,"title":title});
    return result
};