'use strict';

const Order = require('../../model/order');
module.exports = async (cmenu) => {
    let result = ""
    if (cmenu == 0) {
        const orders0 = await Order.query("dummy").eq("주문").where("menu").eq("아메리카노").and().where("hi").eq("hot").exec()

        for (let i = 0; i < orders0.length; i++) {
            if (i == orders0.length - 1) {
                result += orders0[i].username
            }
            else {
                result += orders0[i].username + ", "
            }

        }

        return result
    }

    else if (cmenu == 1) {
        const orders1 = await Order.query("dummy").eq("주문").where("menu").eq("아메리카노").and().where("hi").eq("ice").exec()
        
        for (let i = 0; i < orders1.length; i++) {
            if (i == orders1.length - 1) {
                result += orders1[i].username
            }
            else {
                result += orders1[i].username + ", "
            }

        }
        return result
    }
    else if (cmenu == 2) {
        const orders2 = await Order.query("dummy").eq("주문").where("menu").eq("카페라떼").and().where("hi").eq("hot").exec()
        
        for (let i = 0; i < orders2.length; i++) {
            if (i == orders2.length - 1) {
                result += orders2[i].username
            }
            else {
                result += orders2[i].username + ", "
            }

        }
        return result
    }
    else if (cmenu == 3) {
        const orders3 = await Order.query("dummy").eq("주문").where("menu").eq("카페라떼").and().where("hi").eq("ice").exec()
        
        for (let i = 0; i < orders1.length; i++) {
            if (i == orders3.length - 1) {
                result += orders3[i].username
            }
            else {
                result += orders3[i].username + ", "
            }

        }
        return result
    }
    else if (cmenu == 4) {
        const orders4 = await Order.query("dummy").eq("주문").where("menu").eq("바닐라라떼").and().where("hi").eq("hot").exec()
        
        for (let i = 0; i < orders4.length; i++) {
            if (i == orders4.length - 1) {
                result += orders4[i].username
            }
            else {
                result += orders4[i].username + ", "
            }

        }
        return result
    }
    else if (cmenu == 5) {
        const orders5 = await Order.query("dummy").eq("주문").where("menu").eq("바닐라라떼").and().where("hi").eq("ice").exec()
        
        for (let i = 0; i < orders5.length; i++) {
            if (i == orders5.length - 1) {
                result += orders5[i].username
            }
            else {
                result += orders5[i].username + ", "
            }

        }
        return result
    }
    else if (cmenu == 6) {
        const orders6 = await Order.query("dummy").eq("주문").where("menu").eq("카페모카").and().where("hi").eq("hot").exec()
        
        for (let i = 0; i < orders6.length; i++) {
            if (i == orders6.length - 1) {
                result += orders6[i].username
            }
            else {
                result += orders6[i].username + ", "
            }

        }
        return result
    }
    else if (cmenu == 7) {
        const orders7 = await Order.query("dummy").eq("주문").where("menu").eq("카페모카").and().where("hi").eq("ice").exec()
        
        for (let i = 0; i < orders7.length; i++) {
            if (i == orders7.length - 1) {
                result += orders7[i].username
            }
            else {
                result += orders7[i].username + ", "
            }

        }
        return result
    }
    else if (cmenu == 8) {
        const orders8 = await Order.query("dummy").eq("주문").where("menu").eq("아시나요").and().where("hi").eq("icecream").exec()
        
        for (let i = 0; i < orders8.length; i++) {
            if (i == orders8.length - 1) {
                result += orders8[i].username
            }
            else {
                result += orders8[i].username + ", "
            }

        }
        return result
    }
    else if (cmenu == 9) {
        const orders9 = await Order.query("dummy").eq("주문").where("menu").eq("돼지콘").and().where("hi").eq("icecream").exec()
        
        for (let i = 0; i < orders9.length; i++) {
            if (i == orders9.length - 1) {
                result += orders9[i].username
            }
            else {
                result += orders9[i].username + ", "
            }

        }
        return result
    }
    else if (cmenu == 10) {
        const orders10 = await Order.query("dummy").eq("주문").where("menu").eq("브라보").and().where("hi").eq("icecream").exec()
        
        for (let i = 0; i < orders10.length; i++) {
            if (i == orders10.length - 1) {
                result += orders10[i].username
            }
            else {
                result += orders10[i].username + ", "
            }

        }
        return result
    }
    else if (cmenu == 11) {
        const orders11 = await Order.query("dummy").eq("주문").where("menu").eq("녹차마루").and().where("hi").eq("icecream").exec()
        
        for (let i = 0; i < orders11.length; i++) {
            if (i == orders11.length - 1) {
                result += orders11[i].username
            }
            else {
                result += orders11[i].username + ", "
            }

        }
        return result
    }
    else if (cmenu == 12) {
        const orders12 = await Order.query("dummy").eq("주문").where("menu").eq("아이스티").and().where("hi").eq("etc").exec()
        
        for (let i = 0; i < orders12.length; i++) {
            if (i == orders12.length - 1) {
                result += orders12[i].username
            }
            else {
                result += orders12[i].username + ", "
            }

        }
        return result
    }
    else if (cmenu == 13) {
        const orders13 = await Order.query("dummy").eq("주문").where("menu").eq("망고 요거트 스무디").and().where("hi").eq("etc").exec()
        
        for (let i = 0; i < orders13.length; i++) {
            if (i == orders13.length - 1) {
                result += orders13[i].username
            }
            else {
                result += orders13[i].username + ", "
            }

        }
        return result
    }
    else if (cmenu == 14) {
        const orders14 = await Order.query("dummy").eq("주문").where("menu").eq("딸기 요거트 스무디").and().where("hi").eq("etc").exec()
        
        for (let i = 0; i < orders14.length; i++) {
            if (i == orders14.length - 1) {
                result += orders14[i].username
            }
            else {
                result += orders14[i].username + ", "
            }

        }
        return result
    }
    else if (cmenu == 15) {
        const orders15 = await Order.query("dummy").eq("주문").where("menu").eq("플레인 요거트 스무디").and().where("hi").eq("etc").exec()
        
        for (let i = 0; i < orders15.length; i++) {
            if (i == orders15.length - 1) {
                result += orders15[i].username
            }
            else {
                result += orders15[i].username + ", "
            }

        }
        return result
    }
}
