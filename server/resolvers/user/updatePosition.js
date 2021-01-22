'use strict';

const User = require('../../model/user');
module.exports = async (ids) => {
    for (let i = 0; i < ids.length; i++) {
        const _id = ids[i]
        const dummy = "유저"
        const result = await User.update({"dummy":dummy,"_id":_id,"posit":"휴가자"});
        console.log(result)
        
    }
    
    return "휴가자 등록이 완료 되었습니다."
};