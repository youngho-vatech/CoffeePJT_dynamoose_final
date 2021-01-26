'use strict';

const Order = require('../../model/order');
module.exports = async () => {
        // const result = await Order.scan({"hi":{"contains":hi}}).exec()
        const result = await Order.query("dummy").eq("주문").using("username_index").exec()
        console.log(result, "orders")
        return result
    
}