'use strict';

const User = require('../../model/user');
module.exports = async() =>{
    // const result = await User.scan({"posit":{"contains":"휴가자"}}).exec()
    const result = await User.query("dummy").eq("유저").where("position").eq("휴가자").sort().using("username_index").exec()
    console.log(result, "includedVacation")
   
    return result
}