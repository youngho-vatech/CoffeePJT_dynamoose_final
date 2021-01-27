'use strict';

const User = require('../../model/user');
module.exports = async() => {
    const people = await User.query("dummy").eq("유저").where("position").in(["주문자","결제자"]).exec()
    const number = [0,0,0,0]
    console.log(people)
    for (let i = 0; i < people.length; i++) {
        if (people[i].status === "주문완료") {
            number[0]++;
        }
        else if(people[i].status === "주문취소"){
            number[1]++;
        }
        else if(people[i].status === "주문포기"){
            number[2]++;
        }
        else{
            number[3]++;
        }
        
    }
    console.log("howmany")
    return number
};