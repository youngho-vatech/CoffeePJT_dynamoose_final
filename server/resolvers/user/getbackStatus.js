'use strict';

const User = require('../../model/user');

module.exports =  async(_id) => {
    const dummy = "유저"
    const result = await User.update({"dummy":dummy,"_id":_id,"status":"대기중"});
    console.log(result, "getbackStatus")
    return "해당 인원은 주문포기에서 대기중으로 다시 바뀌었습니다."
};