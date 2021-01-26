'use strict';

const Task = require('../../model/task');
module.exports = async (data) => {
    let _id = data._id
    let dummy = "게시글"
    let title = data.title
    const result = await Task.update({"_id":_id,"dummy":dummy,"title":title});
    console.log("updateTask")
    return result
};