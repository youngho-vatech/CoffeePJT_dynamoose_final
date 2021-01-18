'use strict';

const User = require('../../model/user');
module.exports = async (ids,createdAts) => {
    for (let i = 0; i < ids.length; i++) {
        const id = ids[i]
        const createdAt = createdAts[i]
        const result = await User.update({"id":id,"createdAt":createdAt,"posit":"휴가자"});
        console.log(result)
        
    }
    
    return "휴가자 등록이 완료 되었습니다."
};