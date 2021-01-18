'use strict';

const User = require("../../model/user")

module.exports = async(id, createdAt) => {
    const result = await User.delete({id,createdAt})
    
    return "유저가 삭제 되었습니다."
};