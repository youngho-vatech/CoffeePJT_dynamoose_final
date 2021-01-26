'use strict';

const User = require('../../model/user');
module.exports = async (word, category) => {
        let result = []
        if (word == "") return result
        // const result = await User.query("dummy").eq("유저").where("username").contains(word).sort().using("username_index").exec() // 안되네,,
        result = await User.scan({ "username": { "contains": word }}).using("username_index").exec()
        console.log(result, "user")
        return result
    
    // else {
    //     if (word == "") return null
    //     const result = await User.scan({ "username": { "contains": "주문자" }, "stat": { "contains": "대기중" } }).exec()
    //     console.log(result)
    //     return result
    // }

};