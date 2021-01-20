'use strict';

const Order = require('../../model/order');
module.exports = async (hi) => {
        // const result = await Order.scan({"hi":{"contains":hi}}).exec()
        const result = await Order.query("dummy").eq("주문").where("hi").eq(hi).using("username_index").exec()
        console.log(result)
        return result
    
}