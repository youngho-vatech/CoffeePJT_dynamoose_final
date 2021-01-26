'use strict';

const Task = require('../../model/task');
module.exports = async () => {
    const result = await Task.scan().exec()
    if(result.length==0) return null
    console.log(result)
    console.log(result.length)
    console.log("tasks")
    return result
}