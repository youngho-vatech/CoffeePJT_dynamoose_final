'use strict';

const Task = require('../../model/task');
const User = require('../../model/user');

module.exports = async(data) => {
    let _id = data._id
    let dummy = "게시글"
    
    await Task.delete({_id,dummy})

    _id = data.userid
    dummy = "유저"
    
    await User.update({"_id":_id,"dummy":dummy},{"posit":"주문자","stat":"대기중"})


    return "게시글이 삭제 되었습니다."
};