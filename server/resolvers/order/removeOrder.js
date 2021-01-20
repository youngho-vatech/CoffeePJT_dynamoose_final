'use strict';

const Order = require('../../model/order');
module.exports = async (id, dummy) => {
   
    const result = await Order.delete({id,dummy})
    console.log(result)
    return "주문이 삭제 되었습니다."
};