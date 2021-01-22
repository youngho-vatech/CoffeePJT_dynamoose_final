'use strict';

const User = require("../../model/user")

module.exports = async(ids) => {
    const dummy = "유저"
    for (let i = 0; i < ids.length; i++) {
        const _id = ids[i]
        await User.delete({_id,dummy})  
    }
    
    
    return "유저가 삭제 되었습니다."
};