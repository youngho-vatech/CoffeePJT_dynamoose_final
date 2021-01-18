'use strict';
const User = require("../../model/user")


module.exports = async() => {
    const lastKey={
        id: '377795c0-5928-11eb-8742-c78a85d8788e',
        createdAt: '1610931482908'
      }
    const result = await User.scan().startAt(lastKey).limit(5).exec()
    console.log(result)
    return result
}
    