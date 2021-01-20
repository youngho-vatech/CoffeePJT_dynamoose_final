'use strict';

const User = require('../../model/user');

module.exports =  async(id,dummy) => {
    
    const result = await User.update({"dummy":dummy,"id":id,"stat":"대기중"});
    console.log(result)
    return "해당 인원은 주문포기에서 대기중으로 다시 바뀌었습니다."
};