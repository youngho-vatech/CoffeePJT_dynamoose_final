'use strict';
const User = require("../../model/user")


module.exports = async() => {
    // const lastKey={
    //     username: '양씨',
    //     dummy: '유저'
    //   }
    return await User.query("dummy").eq("유저").sort().using("username_index").exec()
}
    