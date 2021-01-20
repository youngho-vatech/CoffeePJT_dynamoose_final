'use strict';
const User = require("../../model/user")


module.exports = async(lastKey) => {
    // const lastKey={
    //     username: '양씨',
    //     dummy: '유저'
    //   }
    if(lastKey.id == "") return await User.query("dummy").eq("유저").limit(5).sort().using("username_index").exec()
    return await User.query("dummy").eq("유저").startAt(lastKey).limit(5).exec()
}
    