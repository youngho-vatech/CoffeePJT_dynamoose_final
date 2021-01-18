'use strict';

const User = require('../../model/user');
module.exports =  async(ids,createdAts) => {
    for (let i = 0; i < ids.length; i++) {
        const id = ids[i]
        const createdAt = createdAts[i]
        const result = await User.update({"id":id,"createdAt":createdAt,"posit":"주문자"});
        console.log(result)
    }
    
    return "해당 인원은 주문자로 다시 바뀌었습니다."
};