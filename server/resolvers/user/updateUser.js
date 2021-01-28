'use strict';

const AWS = require('aws-sdk');
const dynamoDb = new AWS.DynamoDB.DocumentClient();
const uuid = require('uuid');
const User = require('../../model/user');
const Order = require('../../model/order');
module.exports =  async(data) => {
    let dummy = "유저"
    let _id = data._id
    const person = await User.get({dummy,_id});
    
    const result = await User.update({"dummy":dummy,"_id":_id,"username":data.username});
    
    
    if(person.status == "주문완료"){
        const updated = await Order.query("dummy").eq("주문").where("username").eq(person.username).exec()
        
        dummy = "주문"
        _id = updated[0]._id
        const updateorder = await Order.update({"dummy":dummy,"_id":_id,"username":result.username})
        
    }
    return result
};