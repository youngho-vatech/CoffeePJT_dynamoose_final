'use strict';

const Task = require('../../model/task');
module.exports = async (data) => {
    let id = data.id
    let dummy = "게시글"
    let title = data.title
    const result = await Task.update({"id":id,"dummy":dummy,"title":title});
    return result
};