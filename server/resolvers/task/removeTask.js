'use strict';

const Task = require('../../model/task');
const User = require('../../model/user');

module.exports = async(data) => {
    let id = data._id
    let createdAt = data.createdAtT
    
    await Task.delete({id,createdAt})

    id = data.userid
    createdAt = data.createdAtU
    
    await User.update({"id":id,"createdAt":createdAt,"posit":"주문자"})


    return "게시글이 삭제 되었습니다."
};