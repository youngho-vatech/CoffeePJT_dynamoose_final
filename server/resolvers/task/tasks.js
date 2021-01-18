'use strict';

const Task = require('../../model/task');
module.exports = async () => {
    const result = await Task.scan().exec()
    console.log(result)
    return result
}