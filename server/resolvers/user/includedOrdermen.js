'use strict';

const User = require('../../model/user');

module.exports = async() =>{
    // const result = await User.scan({"posit":{"contains":"주문자"}}).using("username_index").exec()
    const result = await User.query("dummy").eq("유저").where("position").eq("주문자").sort().using("username_index").exec()
    console.log(result, "includedOrdermen")
   
    return result
}