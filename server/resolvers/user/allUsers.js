'use strict';
const User = require("../../model/user")


module.exports = async() => {
    const result = await User.scan().exec()
    console.log(result)
    return result
}
    