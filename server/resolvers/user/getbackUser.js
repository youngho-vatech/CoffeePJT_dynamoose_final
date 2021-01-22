'use strict';

const User = require('../../model/user');
module.exports =  async(ids) => {
    for (let i = 0; i < ids.length; i++) {
        const _id = ids[i]
        const dummy = "유저"
        const result = await User.update({"dummy":dummy,"_id":_id,"posit":"주문자"});
        console.log(result)
    }
    
    return "해당 인원은 주문자로 다시 바뀌었습니다."
};