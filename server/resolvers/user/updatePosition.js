'use strict';

const User = require('../../model/user');
const Order = require('../../model/order');
module.exports = async (ids) => {
    for (let i = 0; i < ids.length; i++) {
        let _id = ids[i]
        let dummy = "유저"
        await User.update({"dummy":dummy,"_id":_id,"position":"휴가자"});
        const getUser = await User.get({"dummy":dummy,"_id":_id})
        
        if(getUser.status == "주문완료"){
            const updated = await Order.query("dummy").eq("주문").where("username").eq(getUser.username).exec()
            if(updated){
                dummy = "주문"
                _id = updated[0]._id
                await Order.delete({dummy,_id})
            }
        }
        
    }
    console.log("updatePosition")
    return "휴가자 등록이 완료 되었습니다."
};