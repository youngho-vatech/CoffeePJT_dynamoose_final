'use strict';

const User = require('../../model/user');
module.exports = async() => {
    const people = await User.scan().exec()
    const number = [0,0,0,0]
    console.log(people)
    for (let i = 0; i < people.length; i++) {
        if (people[i].stat === "주문완료") {
            number[0]++;
        }
        else if(people[i].stat === "주문취소"){
            number[1]++;
        }
        else if(people[i].stat === "주문포기"){
            number[2]++;
        }
        else{
            number[3]++;
        }
        
    }
    return number
};