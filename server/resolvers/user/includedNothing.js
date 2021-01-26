'use strict';

const User = require('../../model/user');
module.exports = async() =>{
    // const result = await User.scan({"posit":{"contains":"주문자"},"stat":{"contains":"대기중"}}).exec()
    // console.log(result)
    const result = await User.query("dummy").eq("유저").where("posit").eq("주문자").and().where("stat").eq("대기중").sort().using("username_index").exec()
    console.log(result, "includedNothing")
    
    return result
}