'use strict';

const User = require("../../model/user")

module.exports = async(id, dummy) => {
    const result = await User.delete({id,dummy})
    
    return "유저가 삭제 되었습니다."
};