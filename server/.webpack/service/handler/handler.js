module.exports =
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./handler/handler.js":
/*!****************************!*\
  !*** ./handler/handler.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "queryhandler": () => /* binding */ queryhandler
/* harmony export */ });
const express = __webpack_require__(/*! express */ "express");

const serverless = __webpack_require__(/*! serverless-http */ "serverless-http");

const graphiql = __webpack_require__(/*! graphql-playground-middleware-express */ "graphql-playground-middleware-express");

const {
  ApolloServer,
  gql
} = __webpack_require__(/*! apollo-server-express */ "apollo-server-express");

const schema = __webpack_require__(/*! ../schema/schema */ "./schema/schema.js");

const app = express();
const server = new ApolloServer({
  schema,
  path: "/graphql"
});
server.applyMiddleware({
  app
});
const queryhandler = serverless(app);


/***/ }),

/***/ "./model/order.js":
/*!************************!*\
  !*** ./model/order.js ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const dynamoose = __webpack_require__(/*! dynamoose */ "dynamoose"); // 몽구스는 서버와 몽고디비를 연결해준다. no sql이 기존 mysql과 다르게 테이블이 존재하지 않는데,


const {
  Schema
} = dynamoose; // 스키마라는 개념을 넣어서 중구난방으로 데이터를 쓰지 않게 잡아준다.
// 정형화된 스키마를 선언하는 부분 -> spring model과 비슷하다 생각하면 됨

const Order = dynamoose.model('test00_orders', {
  dummy: {
    "type": String,
    "hashKey": true,
    "index": {
      "name": "username_index",
      "rangeKey": "username",
      "throughput": {
        "read": 5,
        "write": 5
      }
    },
    "index": {
      "name": "createdAt_index",
      "rangeKey": "createdAt",
      "throughput": {
        "read": 5,
        "write": 5
      }
    },
    "index": {
      "name": "hi_index",
      "rangeKey": "hi",
      "throughput": {
        "read": 5,
        "write": 5
      }
    },
    "index": {
      "name": "menu_index",
      "rangeKey": "menu",
      "throughput": {
        "read": 5,
        "write": 5
      }
    }
  },
  _id: {
    "type": String,
    "rangeKey": true
  },
  createdAt: String,
  hi: String,
  menu: String,
  username: String
});
module.exports = Order; // Content라는 모델이름을 가지고 contentSchema의 틀에 맞게 가져갈 수 있다.

/***/ }),

/***/ "./model/task.js":
/*!***********************!*\
  !*** ./model/task.js ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const dynamoose = __webpack_require__(/*! dynamoose */ "dynamoose"); // 몽구스는 서버와 몽고디비를 연결해준다. no sql이 기존 mysql과 다르게 테이블이 존재하지 않는데,


const {
  Schema
} = dynamoose; // 스키마라는 개념을 넣어서 중구난방으로 데이터를 쓰지 않게 잡아준다.
// 정형화된 스키마를 선언하는 부분 -> spring model과 비슷하다 생각하면 됨

const Task = dynamoose.model('test00_tasks', {
  dummy: {
    "type": String,
    "hashKey": true,
    "index": {
      "name": "createdAt_index",
      "rangeKey": "createdAt",
      "throughput": {
        "read": 5,
        "write": 5
      }
    },
    "index": {
      "name": "creater_index",
      "rangeKey": "creater",
      "throughput": {
        "read": 5,
        "write": 5
      }
    },
    "index": {
      "name": "title_index",
      "rangeKey": "title",
      "throughput": {
        "read": 5,
        "write": 5
      }
    }
  },
  _id: {
    "type": String,
    "rangeKey": true
  },
  createdAt: String,
  creater: String,
  title: String
});
module.exports = Task; // Content라는 모델이름을 가지고 contentSchema의 틀에 맞게 가져갈 수 있다.

/***/ }),

/***/ "./model/user.js":
/*!***********************!*\
  !*** ./model/user.js ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const dynamoose = __webpack_require__(/*! dynamoose */ "dynamoose"); // 몽구스는 서버와 몽고디비를 연결해준다. no sql이 기존 mysql과 다르게 테이블이 존재하지 않는데,


const {
  Schema
} = dynamoose; // 스키마라는 개념을 넣어서 중구난방으로 데이터를 쓰지 않게 잡아준다.
// 정형화된 스키마를 선언하는 부분 -> spring model과 비슷하다 생각하면 됨

const User = dynamoose.model('test00_users', {
  dummy: {
    "type": String,
    "hashKey": true,
    "index": {
      "name": "createdAt_index",
      "rangeKey": "createdAt",
      "throughput": {
        "read": 5,
        "write": 5
      }
    },
    "index": {
      "name": "username_index",
      "rangeKey": "username",
      "throughput": {
        "read": 5,
        "write": 5
      }
    },
    "index": {
      "name": "stat_index",
      "rangeKey": "stat",
      "throughput": {
        "read": 5,
        "write": 5
      }
    },
    "index": {
      "name": "posit_index",
      "rangeKey": "posit",
      "throughput": {
        "read": 5,
        "write": 5
      }
    }
  },
  _id: {
    "type": String,
    "rangeKey": true
  },
  createdAt: String,
  username: String,
  stat: String,
  posit: String
});
module.exports = User; // Content라는 모델이름을 가지고 contentSchema의 틀에 맞게 가져갈 수 있다.

/***/ }),

/***/ "./resolvers/order/confirmOrders.js":
/*!******************************************!*\
  !*** ./resolvers/order/confirmOrders.js ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


const Order = __webpack_require__(/*! ../../model/order */ "./model/order.js");

const User = __webpack_require__(/*! ../../model/user */ "./model/user.js");

const Task = __webpack_require__(/*! ../../model/task */ "./model/task.js");

module.exports = async () => {
  const orders = await Order.scan().exec();
  const tasks = await Task.scan().exec();
  const users = await User.scan().exec();

  for (let i = 0; i < orders.length; i++) {
    let _id = orders[i]._id;
    let dummy = "주문";
    const result = await Order.delete({
      _id,
      dummy
    });
  }

  for (let i = 0; i < users.length; i++) {
    let _id = users[i]._id;
    let dummy = "유저";
    const result = await User.update({
      "_id": _id,
      "dummy": dummy
    }, {
      "posit": "주문자",
      "stat": "대기중"
    });
  }

  for (let i = 0; i < tasks.length; i++) {
    let _id = tasks[i]._id;
    let dummy = "게시글";
    const result = await Task.delete({
      _id,
      dummy
    });
  }

  console.log("confirmOrders");
  return "주문이 최종 확정 되었습니다. 맛있게 드세요!";
};

/***/ }),

/***/ "./resolvers/order/createOrder.js":
/*!****************************************!*\
  !*** ./resolvers/order/createOrder.js ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


const uuid = __webpack_require__(/*! uuid */ "uuid");

const User = __webpack_require__(/*! ../../model/user */ "./model/user.js");

const Order = __webpack_require__(/*! ../../model/order */ "./model/order.js");

module.exports = async data => {
  const _id = data._id;
  const dummy = "유저";
  const user = await User.get({
    dummy,
    _id
  });
  if (user.stat == "주문완료") return "이미 주문 하셨습니다.";
  await User.update({
    "dummy": dummy,
    "_id": _id,
    "stat": "주문완료"
  });
  const myOrder = new Order({
    dummy: "주문",
    menu: data.menu,
    hi: data.hi,
    username: user.username,
    _id: String(uuid.v1()),
    createdAt: String(Date.now())
  });
  const result = await myOrder.save();
  console.log(result, "createOrderssssss");
  return result;
};

/***/ }),

/***/ "./resolvers/order/giveupOrder.js":
/*!****************************************!*\
  !*** ./resolvers/order/giveupOrder.js ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


const User = __webpack_require__(/*! ../../model/user */ "./model/user.js");

const Order = __webpack_require__(/*! ../../model/order */ "./model/order.js");

module.exports = async data => {
  const _id = data.userid;
  const dummy = "유저";
  const result = await User.update({
    "dummy": dummy,
    "_id": _id,
    "stat": "주문포기"
  });
  console.log(result, "giveupOrder");
  return "주문을 포기하셨습니다.";
};

/***/ }),

/***/ "./resolvers/order/howmuch.js":
/*!************************************!*\
  !*** ./resolvers/order/howmuch.js ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


const Order = __webpack_require__(/*! ../../model/order */ "./model/order.js");

module.exports = async () => {
  const orders = await Order.query("dummy").eq("주문").exec();
  let sum = 0;
  console.log(orders, "howmuch");

  for (let i = 0; i < orders.length; i++) {
    if (orders[i].menu === "아메리카노") {
      sum += 2000;
    } else if (orders[i].menu === "카페라떼") {
      sum += 2500;
    } else if (orders[i].menu === "바닐라라떼") {
      sum += 3000;
    } else if (orders[i].menu === "카페모카") {
      sum += 3000;
    } else if (orders[i].menu === "아시나요") {
      sum += 3000;
    } else if (orders[i].menu === "돼지콘") {
      sum += 3000;
    } else if (orders[i].menu === "브라보") {
      sum += 3000;
    } else if (orders[i].menu === "녹차마루") {
      sum += 3000;
    } else if (orders[i].menu === "아이스티") {
      sum += 2000;
    } else if (orders[i].menu === "망고 요거트 스무디") {
      sum += 3400;
    } else if (orders[i].menu === "딸기 요거트 스무디") {
      sum += 3400;
    } else if (orders[i].menu === "플레인 요거트 스무디") {
      sum += 3400;
    }
  }

  return sum;
};

/***/ }),

/***/ "./resolvers/order/orderMine.js":
/*!**************************************!*\
  !*** ./resolvers/order/orderMine.js ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


const User = __webpack_require__(/*! ../../model/user */ "./model/user.js");

const Order = __webpack_require__(/*! ../../model/order */ "./model/order.js");

module.exports = async _id => {
  const dummy = "유저";
  const user = await User.get({
    dummy,
    _id
  });
  console.log("유저이름", user.username); // const result = await Order.scan({"username":{"contains":user.username}}).exec()

  const result = await Order.query("dummy").eq("주문").where("username").eq(user.username).exec();
  console.log(result, "orderMine");
  return result;
};

/***/ }),

/***/ "./resolvers/order/orders.js":
/*!***********************************!*\
  !*** ./resolvers/order/orders.js ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


const Order = __webpack_require__(/*! ../../model/order */ "./model/order.js");

module.exports = async () => {
  // const result = await Order.scan({"hi":{"contains":hi}}).exec()
  const result = await Order.query("dummy").eq("주문").using("username_index").exec();
  console.log(result, "orders");
  return result;
};

/***/ }),

/***/ "./resolvers/order/receipt.js":
/*!************************************!*\
  !*** ./resolvers/order/receipt.js ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


const Order = __webpack_require__(/*! ../../model/order */ "./model/order.js");

module.exports = async () => {
  const orders = await Order.scan().exec();
  const orderV = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  let mention = ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""];

  for (let i = 0; i < orders.length; i++) {
    if (orders[i].menu === "아메리카노" && orders[i].hi === "hot") {
      orderV[0]++;
    } else if (orders[i].menu === "아메리카노" && orders[i].hi === "ice") {
      orderV[1]++;
    } else if (orders[i].menu === "카페라떼" && orders[i].hi === "hot") {
      orderV[2]++;
    } else if (orders[i].menu === "카페라떼" && orders[i].hi === "ice") {
      orderV[3]++;
    } else if (orders[i].menu === "바닐라라떼" && orders[i].hi === "hot") {
      orderV[4]++;
    } else if (orders[i].menu === "바닐라라떼" && orders[i].hi === "ice") {
      orderV[5]++;
    } else if (orders[i].menu === "카페모카" && orders[i].hi === "hot") {
      orderV[6]++;
    } else if (orders[i].menu === "카페모카" && orders[i].hi === "ice") {
      orderV[7]++;
    } else if (orders[i].menu === "아시나요" && orders[i].hi === "icecream") {
      orderV[8]++;
    } else if (orders[i].menu === "돼지콘" && orders[i].hi === "icecream") {
      orderV[9]++;
    } else if (orders[i].menu === "브라보" && orders[i].hi === "icecream") {
      orderV[10]++;
    } else if (orders[i].menu === "녹차마루" && orders[i].hi === "icecream") {
      orderV[11]++;
    } else if (orders[i].menu === "아이스티" && orders[i].hi === "etc") {
      orderV[12]++;
    } else if (orders[i].menu === "망고 요거트 스무디" && orders[i].hi === "etc") {
      orderV[13]++;
    } else if (orders[i].menu === "딸기 요거트 스무디" && orders[i].hi === "etc") {
      orderV[14]++;
    } else if (orders[i].menu === "플레인 요거트 스무디" && orders[i].hi === "etc") {
      orderV[15]++;
    }
  }

  for (let i = 0; i < orderV.length; i++) {
    if (orderV[i] != 0 && i == 0) {
      mention[i] = "Hot 아메리카노 : " + orderV[i] + "잔";
    } else if (orderV[i] != 0 && i == 1) {
      mention[i] = "Ice 아메리카노 : " + orderV[i] + "잔";
    } else if (orderV[i] != 0 && i == 2) {
      mention[i] = "Hot 카페라떼 : " + orderV[i] + "잔";
    } else if (orderV[i] != 0 && i == 3) {
      mention[i] = "Ice 카페라떼 : " + orderV[i] + "잔";
    } else if (orderV[i] != 0 && i == 4) {
      mention[i] = "Hot 바닐라라떼 : " + orderV[i] + "잔";
    } else if (orderV[i] != 0 && i == 5) {
      mention[i] = "Ice 바닐라라떼 : " + orderV[i] + "잔";
    } else if (orderV[i] != 0 && i == 6) {
      mention[i] = "Hot 카페모카 : " + orderV[i] + "잔";
    } else if (orderV[i] != 0 && i == 7) {
      mention[i] = "Ice 카페모카 : " + orderV[i] + "잔";
    } else if (orderV[i] != 0 && i == 8) {
      mention[i] = "아시나요 : " + orderV[i] + "개";
    } else if (orderV[i] != 0 && i == 9) {
      mention[i] = "돼지콘 : " + orderV[i] + "개";
    } else if (orderV[i] != 0 && i == 10) {
      mention[i] = "브라보 : " + orderV[i] + "개";
    } else if (orderV[i] != 0 && i == 11) {
      mention[i] = "녹차마루 : " + orderV[i] + "개";
    } else if (orderV[i] != 0 && i == 12) {
      mention[i] = "아이스티 : " + orderV[i] + "잔";
    } else if (orderV[i] != 0 && i == 13) {
      mention[i] = "망고 요거트 스무디 : " + orderV[i] + "잔";
    } else if (orderV[i] != 0 && i == 14) {
      mention[i] = "딸기 요거트 스무디 : " + orderV[i] + "잔";
    } else if (orderV[i] != 0 && i == 15) {
      mention[i] = "플레인 요거트 스무디 : " + orderV[i] + "잔";
    }
  }

  console.log("receipt");
  return mention;
};

/***/ }),

/***/ "./resolvers/order/removeOrder.js":
/*!****************************************!*\
  !*** ./resolvers/order/removeOrder.js ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


const Order = __webpack_require__(/*! ../../model/order */ "./model/order.js");

const User = __webpack_require__(/*! ../../model/user */ "./model/user.js");

module.exports = async (userid, orderid) => {
  let dummy = "유저";
  await User.update({
    "dummy": dummy,
    "_id": userid,
    "stat": "주문취소"
  });
  dummy = "주문";
  let _id = orderid;
  const result = await Order.delete({
    _id,
    dummy
  });
  console.log(result, "removeOrder");
  return result;
};

/***/ }),

/***/ "./resolvers/order/updateOrder.js":
/*!****************************************!*\
  !*** ./resolvers/order/updateOrder.js ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


const User = __webpack_require__(/*! ../../model/user */ "./model/user.js");

const Order = __webpack_require__(/*! ../../model/order */ "./model/order.js");

module.exports = async data => {
  let _id = data.userid;
  let dummy = "유저";
  await User.update({
    "_id": _id,
    "dummy": dummy,
    "stat": "주문완료"
  });
  _id = data.orderid;
  dummy = "주문";
  let hi = data.hi;
  let menu = data.menu;
  const result = await Order.update({
    "_id": _id,
    "dummy": dummy
  }, {
    "hi": hi,
    "menu": menu
  });
  console.log(result, "updateOrder");
  return result;
};

/***/ }),

/***/ "./resolvers/task/createTask.js":
/*!**************************************!*\
  !*** ./resolvers/task/createTask.js ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


const uuid = __webpack_require__(/*! uuid */ "uuid");

const Task = __webpack_require__(/*! ../../model/task */ "./model/task.js");

const User = __webpack_require__(/*! ../../model/user */ "./model/user.js");

const Order = __webpack_require__(/*! ../../model/order */ "./model/order.js");

module.exports = async data => {
  const isthere = await Task.scan().exec();
  console.log(isthere);
  if (isthere.count != 0) return isthere;
  const _id = data.userid;
  const dummy = "유저";
  const up = await User.update({
    "_id": _id,
    "dummy": dummy,
    "posit": "결제자"
  });
  const user = await User.get({
    dummy,
    _id
  });
  const creater = user.username;
  const myTask = new Task({
    dummy: "게시글",
    creater: creater,
    title: data.title,
    _id: String(uuid.v1()),
    createdAt: String(Date.now())
  });
  console.log("createTask");
  const result = await myTask.save();
  return result;
};

/***/ }),

/***/ "./resolvers/task/removeTask.js":
/*!**************************************!*\
  !*** ./resolvers/task/removeTask.js ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


const Task = __webpack_require__(/*! ../../model/task */ "./model/task.js");

const User = __webpack_require__(/*! ../../model/user */ "./model/user.js");

module.exports = async data => {
  let _id = data._id;
  let dummy = "게시글";
  const result = await Task.delete({
    _id,
    dummy
  });
  _id = data.userid;
  dummy = "유저";
  await User.update({
    "_id": _id,
    "dummy": dummy
  }, {
    "posit": "주문자",
    "stat": "대기중"
  });
  console.log("removeTask");
  return result;
};

/***/ }),

/***/ "./resolvers/task/tasks.js":
/*!*********************************!*\
  !*** ./resolvers/task/tasks.js ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


const Task = __webpack_require__(/*! ../../model/task */ "./model/task.js");

module.exports = async () => {
  const result = await Task.scan().exec();
  if (result.length == 0) return null;
  console.log(result);
  console.log(result.length);
  console.log("tasks");
  return result;
};

/***/ }),

/***/ "./resolvers/task/updateTask.js":
/*!**************************************!*\
  !*** ./resolvers/task/updateTask.js ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


const Task = __webpack_require__(/*! ../../model/task */ "./model/task.js");

module.exports = async data => {
  let _id = data._id;
  let dummy = "게시글";
  let title = data.title;
  const result = await Task.update({
    "_id": _id,
    "dummy": dummy,
    "title": title
  });
  console.log("updateTask");
  return result;
};

/***/ }),

/***/ "./resolvers/user/allUsers.js":
/*!************************************!*\
  !*** ./resolvers/user/allUsers.js ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


const User = __webpack_require__(/*! ../../model/user */ "./model/user.js");

module.exports = async () => {
  // const lastKey={
  //     username: '양씨',
  //     dummy: '유저'
  //   }
  const result = await User.query("dummy").eq("유저").sort().using("username_index").exec();
  console.log(result, "allUsers");
  return result;
};

/***/ }),

/***/ "./resolvers/user/deleteUser.js":
/*!**************************************!*\
  !*** ./resolvers/user/deleteUser.js ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


const User = __webpack_require__(/*! ../../model/user */ "./model/user.js");

module.exports = async ids => {
  const dummy = "유저";

  for (let i = 0; i < ids.length; i++) {
    const _id = ids[i];
    await User.delete({
      _id,
      dummy
    });
  }

  console.log("deleteUser");
  return "유저가 삭제 되었습니다.";
};

/***/ }),

/***/ "./resolvers/user/getbackStatus.js":
/*!*****************************************!*\
  !*** ./resolvers/user/getbackStatus.js ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


const User = __webpack_require__(/*! ../../model/user */ "./model/user.js");

module.exports = async _id => {
  const dummy = "유저";
  const result = await User.update({
    "dummy": dummy,
    "_id": _id,
    "stat": "대기중"
  });
  console.log(result, "getbackStatus");
  return "해당 인원은 주문포기에서 대기중으로 다시 바뀌었습니다.";
};

/***/ }),

/***/ "./resolvers/user/getbackUser.js":
/*!***************************************!*\
  !*** ./resolvers/user/getbackUser.js ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


const User = __webpack_require__(/*! ../../model/user */ "./model/user.js");

module.exports = async ids => {
  for (let i = 0; i < ids.length; i++) {
    const _id = ids[i];
    const dummy = "유저";
    const result = await User.update({
      "dummy": dummy,
      "_id": _id,
      "posit": "주문자"
    });
    console.log(result, "getbackUser");
  }

  return "해당 인원은 주문자로 다시 바뀌었습니다.";
};

/***/ }),

/***/ "./resolvers/user/howmany.js":
/*!***********************************!*\
  !*** ./resolvers/user/howmany.js ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


const User = __webpack_require__(/*! ../../model/user */ "./model/user.js");

module.exports = async () => {
  const people = await User.scan().exec();
  const number = [0, 0, 0, 0];
  console.log(people);

  for (let i = 0; i < people.length; i++) {
    if (people[i].stat === "주문완료") {
      number[0]++;
    } else if (people[i].stat === "주문취소") {
      number[1]++;
    } else if (people[i].stat === "주문포기") {
      number[2]++;
    } else {
      number[3]++;
    }
  }

  console.log("howmany");
  return number;
};

/***/ }),

/***/ "./resolvers/user/includedNothing.js":
/*!*******************************************!*\
  !*** ./resolvers/user/includedNothing.js ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


const User = __webpack_require__(/*! ../../model/user */ "./model/user.js");

module.exports = async () => {
  // const result = await User.scan({"posit":{"contains":"주문자"},"stat":{"contains":"대기중"}}).exec()
  // console.log(result)
  const result = await User.query("dummy").eq("유저").where("posit").eq("주문자").and().where("stat").eq("대기중").sort().using("username_index").exec();
  console.log(result, "includedNothing");
  return result;
};

/***/ }),

/***/ "./resolvers/user/includedOrdermen.js":
/*!********************************************!*\
  !*** ./resolvers/user/includedOrdermen.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


const User = __webpack_require__(/*! ../../model/user */ "./model/user.js");

module.exports = async () => {
  // const result = await User.scan({"posit":{"contains":"주문자"}}).using("username_index").exec()
  const result = await User.query("dummy").eq("유저").where("posit").eq("주문자").sort().using("username_index").exec();
  console.log(result, "includedOrdermen");
  return result;
};

/***/ }),

/***/ "./resolvers/user/includedVacation.js":
/*!********************************************!*\
  !*** ./resolvers/user/includedVacation.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


const User = __webpack_require__(/*! ../../model/user */ "./model/user.js");

module.exports = async () => {
  // const result = await User.scan({"posit":{"contains":"휴가자"}}).exec()
  const result = await User.query("dummy").eq("유저").where("posit").eq("휴가자").sort().using("username_index").exec();
  console.log(result, "includedVacation");
  return result;
};

/***/ }),

/***/ "./resolvers/user/me.js":
/*!******************************!*\
  !*** ./resolvers/user/me.js ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


const User = __webpack_require__(/*! ../../model/user */ "./model/user.js");

module.exports = async _id => {
  const dummy = "유저";
  const result = await User.get({
    dummy,
    _id
  });
  console.log(result, "me");
  return result;
};

/***/ }),

/***/ "./resolvers/user/receiptUser.js":
/*!***************************************!*\
  !*** ./resolvers/user/receiptUser.js ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


const Order = __webpack_require__(/*! ../../model/order */ "./model/order.js");

module.exports = async cmenu => {
  let result = "";

  if (cmenu == 0) {
    const orders0 = await Order.query("dummy").eq("주문").where("menu").eq("아메리카노").and().where("hi").eq("hot").exec();

    for (let i = 0; i < orders0.length; i++) {
      if (i == orders0.length - 1) {
        result += orders0[i].username;
      } else {
        result += orders0[i].username + ", ";
      }
    }

    return result;
  } else if (cmenu == 1) {
    const orders1 = await Order.query("dummy").eq("주문").where("menu").eq("아메리카노").and().where("hi").eq("ice").exec();

    for (let i = 0; i < orders1.length; i++) {
      if (i == orders1.length - 1) {
        result += orders1[i].username;
      } else {
        result += orders1[i].username + ", ";
      }
    }

    return result;
  } else if (cmenu == 2) {
    const orders2 = await Order.query("dummy").eq("주문").where("menu").eq("카페라떼").and().where("hi").eq("hot").exec();

    for (let i = 0; i < orders2.length; i++) {
      if (i == orders2.length - 1) {
        result += orders2[i].username;
      } else {
        result += orders2[i].username + ", ";
      }
    }

    return result;
  } else if (cmenu == 3) {
    const orders3 = await Order.query("dummy").eq("주문").where("menu").eq("카페라떼").and().where("hi").eq("ice").exec();

    for (let i = 0; i < orders1.length; i++) {
      if (i == orders3.length - 1) {
        result += orders3[i].username;
      } else {
        result += orders3[i].username + ", ";
      }
    }

    return result;
  } else if (cmenu == 4) {
    const orders4 = await Order.query("dummy").eq("주문").where("menu").eq("바닐라라떼").and().where("hi").eq("hot").exec();

    for (let i = 0; i < orders4.length; i++) {
      if (i == orders4.length - 1) {
        result += orders4[i].username;
      } else {
        result += orders4[i].username + ", ";
      }
    }

    return result;
  } else if (cmenu == 5) {
    const orders5 = await Order.query("dummy").eq("주문").where("menu").eq("바닐라라떼").and().where("hi").eq("ice").exec();

    for (let i = 0; i < orders5.length; i++) {
      if (i == orders5.length - 1) {
        result += orders5[i].username;
      } else {
        result += orders5[i].username + ", ";
      }
    }

    return result;
  } else if (cmenu == 6) {
    const orders6 = await Order.query("dummy").eq("주문").where("menu").eq("카페모카").and().where("hi").eq("hot").exec();

    for (let i = 0; i < orders6.length; i++) {
      if (i == orders6.length - 1) {
        result += orders6[i].username;
      } else {
        result += orders6[i].username + ", ";
      }
    }

    return result;
  } else if (cmenu == 7) {
    const orders7 = await Order.query("dummy").eq("주문").where("menu").eq("카페모카").and().where("hi").eq("ice").exec();

    for (let i = 0; i < orders7.length; i++) {
      if (i == orders7.length - 1) {
        result += orders7[i].username;
      } else {
        result += orders7[i].username + ", ";
      }
    }

    return result;
  } else if (cmenu == 8) {
    const orders8 = await Order.query("dummy").eq("주문").where("menu").eq("아시나요").and().where("hi").eq("icecream").exec();

    for (let i = 0; i < orders8.length; i++) {
      if (i == orders8.length - 1) {
        result += orders8[i].username;
      } else {
        result += orders8[i].username + ", ";
      }
    }

    return result;
  } else if (cmenu == 9) {
    const orders9 = await Order.query("dummy").eq("주문").where("menu").eq("돼지콘").and().where("hi").eq("icecream").exec();

    for (let i = 0; i < orders9.length; i++) {
      if (i == orders9.length - 1) {
        result += orders9[i].username;
      } else {
        result += orders9[i].username + ", ";
      }
    }

    return result;
  } else if (cmenu == 10) {
    const orders10 = await Order.query("dummy").eq("주문").where("menu").eq("브라보").and().where("hi").eq("icecream").exec();

    for (let i = 0; i < orders10.length; i++) {
      if (i == orders10.length - 1) {
        result += orders10[i].username;
      } else {
        result += orders10[i].username + ", ";
      }
    }

    return result;
  } else if (cmenu == 11) {
    const orders11 = await Order.query("dummy").eq("주문").where("menu").eq("녹차마루").and().where("hi").eq("icecream").exec();

    for (let i = 0; i < orders11.length; i++) {
      if (i == orders11.length - 1) {
        result += orders11[i].username;
      } else {
        result += orders11[i].username + ", ";
      }
    }

    return result;
  } else if (cmenu == 12) {
    const orders12 = await Order.query("dummy").eq("주문").where("menu").eq("아이스티").and().where("hi").eq("etc").exec();

    for (let i = 0; i < orders12.length; i++) {
      if (i == orders12.length - 1) {
        result += orders12[i].username;
      } else {
        result += orders12[i].username + ", ";
      }
    }

    return result;
  } else if (cmenu == 13) {
    const orders13 = await Order.query("dummy").eq("주문").where("menu").eq("망고 요거트 스무디").and().where("hi").eq("etc").exec();

    for (let i = 0; i < orders13.length; i++) {
      if (i == orders13.length - 1) {
        result += orders13[i].username;
      } else {
        result += orders13[i].username + ", ";
      }
    }

    return result;
  } else if (cmenu == 14) {
    const orders14 = await Order.query("dummy").eq("주문").where("menu").eq("딸기 요거트 스무디").and().where("hi").eq("etc").exec();

    for (let i = 0; i < orders14.length; i++) {
      if (i == orders14.length - 1) {
        result += orders14[i].username;
      } else {
        result += orders14[i].username + ", ";
      }
    }

    return result;
  } else if (cmenu == 15) {
    const orders15 = await Order.query("dummy").eq("주문").where("menu").eq("플레인 요거트 스무디").and().where("hi").eq("etc").exec();

    for (let i = 0; i < orders15.length; i++) {
      if (i == orders15.length - 1) {
        result += orders15[i].username;
      } else {
        result += orders15[i].username + ", ";
      }
    }

    console.log(result, "receiptUser");
    return result;
  }
};

/***/ }),

/***/ "./resolvers/user/registerUser.js":
/*!****************************************!*\
  !*** ./resolvers/user/registerUser.js ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


const uuid = __webpack_require__(/*! uuid */ "uuid");

const User = __webpack_require__(/*! ../../model/user */ "./model/user.js");

module.exports = async data => {
  const myUser = new User({
    dummy: "유저",
    username: data.username,
    stat: "대기중",
    posit: "주문자",
    _id: String(uuid.v1()),
    createdAt: String(Date.now())
  });
  console.log(myUser._id);
  console.log(typeof myUser._id);
  console.log("registerUser");
  return await myUser.save();
};

/***/ }),

/***/ "./resolvers/user/updatePosition.js":
/*!******************************************!*\
  !*** ./resolvers/user/updatePosition.js ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


const User = __webpack_require__(/*! ../../model/user */ "./model/user.js");

module.exports = async ids => {
  for (let i = 0; i < ids.length; i++) {
    const _id = ids[i];
    const dummy = "유저";
    const result = await User.update({
      "dummy": dummy,
      "_id": _id,
      "posit": "휴가자"
    });
    console.log(result);
  }

  console.log("updatePosition");
  return "휴가자 등록이 완료 되었습니다.";
};

/***/ }),

/***/ "./resolvers/user/updateUser.js":
/*!**************************************!*\
  !*** ./resolvers/user/updateUser.js ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


const AWS = __webpack_require__(/*! aws-sdk */ "aws-sdk");

const dynamoDb = new AWS.DynamoDB.DocumentClient();

const uuid = __webpack_require__(/*! uuid */ "uuid");

const User = __webpack_require__(/*! ../../model/user */ "./model/user.js");

module.exports = async (_id, username) => {
  const dummy = "유저";
  const result = await User.update({
    "dummy": dummy,
    "_id": _id,
    "username": username
  });
  console.log(result, "updateUser");
  return result;
};

/***/ }),

/***/ "./resolvers/user/user.js":
/*!********************************!*\
  !*** ./resolvers/user/user.js ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


const User = __webpack_require__(/*! ../../model/user */ "./model/user.js");

module.exports = async (word, category) => {
  let result = [];
  if (word == "") return result; // const result = await User.query("dummy").eq("유저").where("username").contains(word).sort().using("username_index").exec() // 안되네,,

  result = await User.scan({
    "username": {
      "contains": word
    }
  }).using("username_index").exec();
  console.log(result, "user");
  return result; // else {
  //     if (word == "") return null
  //     const result = await User.scan({ "username": { "contains": "주문자" }, "stat": { "contains": "대기중" } }).exec()
  //     console.log(result)
  //     return result
  // }
};

/***/ }),

/***/ "./schema/schema.js":
/*!**************************!*\
  !*** ./schema/schema.js ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


const {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLList,
  GraphQLNonNull,
  GraphQLBoolean
} = __webpack_require__(/*! graphql */ "graphql");

const createOrder = __webpack_require__(/*! ../resolvers/order/createOrder */ "./resolvers/order/createOrder.js");

const orders = __webpack_require__(/*! ../resolvers/order/orders */ "./resolvers/order/orders.js");

const orderMine = __webpack_require__(/*! ../resolvers/order/orderMine */ "./resolvers/order/orderMine.js");

const howmuch = __webpack_require__(/*! ../resolvers/order/howmuch */ "./resolvers/order/howmuch.js");

const receipt = __webpack_require__(/*! ../resolvers/order/receipt */ "./resolvers/order/receipt.js");

const removeOrder = __webpack_require__(/*! ../resolvers/order/removeOrder */ "./resolvers/order/removeOrder.js");

const updateOrder = __webpack_require__(/*! ../resolvers/order/updateOrder */ "./resolvers/order/updateOrder.js");

const giveupOrder = __webpack_require__(/*! ../resolvers/order/giveupOrder */ "./resolvers/order/giveupOrder.js");

const confirmOrders = __webpack_require__(/*! ../resolvers/order/confirmOrders */ "./resolvers/order/confirmOrders.js");

const createTask = __webpack_require__(/*! ../resolvers/task/createTask */ "./resolvers/task/createTask.js");

const tasks = __webpack_require__(/*! ../resolvers/task/tasks */ "./resolvers/task/tasks.js");

const removeTask = __webpack_require__(/*! ../resolvers/task/removeTask */ "./resolvers/task/removeTask.js");

const updateTask = __webpack_require__(/*! ../resolvers/task/updateTask */ "./resolvers/task/updateTask.js");

const registerUser = __webpack_require__(/*! ../resolvers/user/registerUser */ "./resolvers/user/registerUser.js");

const allUsers = __webpack_require__(/*! ../resolvers/user/allUsers */ "./resolvers/user/allUsers.js");

const user = __webpack_require__(/*! ../resolvers/user/user */ "./resolvers/user/user.js");

const me = __webpack_require__(/*! ../resolvers/user/me */ "./resolvers/user/me.js");

const includedOrdermen = __webpack_require__(/*! ../resolvers/user/includedOrdermen */ "./resolvers/user/includedOrdermen.js");

const includedVacation = __webpack_require__(/*! ../resolvers/user/includedVacation */ "./resolvers/user/includedVacation.js");

const includedNothing = __webpack_require__(/*! ../resolvers/user/includedNothing */ "./resolvers/user/includedNothing.js");

const updatePosition = __webpack_require__(/*! ../resolvers/user/updatePosition */ "./resolvers/user/updatePosition.js");

const updateUser = __webpack_require__(/*! ../resolvers/user/updateUser */ "./resolvers/user/updateUser.js");

const getbackUser = __webpack_require__(/*! ../resolvers/user/getbackUser */ "./resolvers/user/getbackUser.js");

const getbackStatus = __webpack_require__(/*! ../resolvers/user/getbackStatus */ "./resolvers/user/getbackStatus.js");

const deleteUser = __webpack_require__(/*! ../resolvers/user/deleteUser */ "./resolvers/user/deleteUser.js");

const howmany = __webpack_require__(/*! ../resolvers/user/howmany */ "./resolvers/user/howmany.js");

const receiptUser = __webpack_require__(/*! ../resolvers/user/receiptUser */ "./resolvers/user/receiptUser.js");

const userType = new GraphQLObjectType({
  name: 'User',
  fields: {
    _id: {
      type: new GraphQLNonNull(GraphQLString)
    },
    username: {
      type: new GraphQLNonNull(GraphQLString)
    },
    stat: {
      type: new GraphQLNonNull(GraphQLString)
    },
    posit: {
      type: new GraphQLNonNull(GraphQLString)
    },
    createdAt: {
      type: new GraphQLNonNull(GraphQLString)
    }
  }
});
const taskType = new GraphQLObjectType({
  name: 'Task',
  fields: {
    _id: {
      type: new GraphQLNonNull(GraphQLString)
    },
    creater: {
      type: new GraphQLNonNull(GraphQLString)
    },
    title: {
      type: new GraphQLNonNull(GraphQLString)
    },
    createdAt: {
      type: new GraphQLNonNull(GraphQLString)
    }
  }
});
const orderType = new GraphQLObjectType({
  name: 'Order',
  fields: {
    _id: {
      type: new GraphQLNonNull(GraphQLString)
    },
    menu: {
      type: new GraphQLNonNull(GraphQLString)
    },
    hi: {
      type: new GraphQLNonNull(GraphQLString)
    },
    username: {
      type: new GraphQLNonNull(GraphQLString)
    },
    createdAt: {
      type: new GraphQLNonNull(GraphQLString)
    }
  }
});
const schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'Query',
    fields: {
      orders: {
        type: new GraphQLList(orderType),
        resolve: (parent, args) => orders()
      },
      orderMine: {
        args: {
          _id: {
            type: new GraphQLNonNull(GraphQLString)
          }
        },
        type: new GraphQLList(orderType),
        resolve: (parent, args) => orderMine(args._id)
      },
      howmuch: {
        type: new GraphQLNonNull(GraphQLInt),
        resolve: (parent, args) => howmuch()
      },
      receipt: {
        type: new GraphQLList(GraphQLString),
        resolve: (parent, args) => receipt()
      },
      tasks: {
        type: new GraphQLList(taskType),
        resolve: (parent, args) => tasks()
      },
      allUsers: {
        type: new GraphQLList(userType),
        resolve: (parent, args) => allUsers()
      },
      user: {
        args: {
          word: {
            type: new GraphQLNonNull(GraphQLString)
          },
          category: {
            type: new GraphQLNonNull(GraphQLInt)
          }
        },
        type: new GraphQLList(userType),
        resolve: (parent, args) => user(args.word, args.category)
      },
      me: {
        args: {
          userid: {
            type: new GraphQLNonNull(GraphQLString)
          }
        },
        type: userType,
        resolve: (parent, args) => me(args.userid)
      },
      includedOrdermen: {
        type: new GraphQLList(userType),
        resolve: (parent, args) => includedOrdermen()
      },
      includedVacation: {
        type: new GraphQLList(userType),
        resolve: (parent, args) => includedVacation()
      },
      includedNothing: {
        type: new GraphQLList(userType),
        resolve: (parent, args) => includedNothing()
      },
      howmany: {
        type: new GraphQLList(GraphQLInt),
        resolve: (parent, args) => howmany()
      },
      receiptUser: {
        args: {
          cmenu: {
            type: new GraphQLNonNull(GraphQLInt)
          }
        },
        type: GraphQLString,
        resolve: (parent, args) => receiptUser(args.cmenu)
      }
    }
  }),
  mutation: new GraphQLObjectType({
    name: 'Mutation',
    fields: {
      createOrder: {
        args: {
          _id: {
            type: new GraphQLNonNull(GraphQLString)
          },
          menu: {
            type: new GraphQLNonNull(GraphQLString)
          },
          hi: {
            type: new GraphQLNonNull(GraphQLString)
          }
        },
        type: orderType,
        resolve: (parent, args) => createOrder(args)
      },
      updateOrder: {
        args: {
          userid: {
            type: new GraphQLNonNull(GraphQLString)
          },
          orderid: {
            type: new GraphQLNonNull(GraphQLString)
          },
          menu: {
            type: new GraphQLNonNull(GraphQLString)
          },
          hi: {
            type: new GraphQLNonNull(GraphQLString)
          }
        },
        type: orderType,
        resolve: (parent, args) => updateOrder(args)
      },
      removeOrder: {
        args: {
          userid: {
            type: new GraphQLNonNull(GraphQLString)
          },
          orderid: {
            type: new GraphQLNonNull(GraphQLString)
          }
        },
        type: orderType,
        resolve: (parent, args) => removeOrder(args.userid, args.orderid)
      },
      giveupOrder: {
        args: {
          userid: {
            type: new GraphQLNonNull(GraphQLString)
          }
        },
        type: GraphQLString,
        resolve: (parent, args) => giveupOrder(args)
      },
      confirmOrders: {
        type: GraphQLString,
        resolve: (parent, args) => confirmOrders()
      },
      createTask: {
        args: {
          userid: {
            type: new GraphQLNonNull(GraphQLString)
          },
          title: {
            type: new GraphQLNonNull(GraphQLString)
          }
        },
        type: taskType,
        resolve: (parent, args) => createTask(args)
      },
      updateTask: {
        args: {
          _id: {
            type: new GraphQLNonNull(GraphQLString)
          },
          title: {
            type: new GraphQLNonNull(GraphQLString)
          }
        },
        type: taskType,
        resolve: (parent, args) => updateTask(args)
      },
      removeTask: {
        args: {
          _id: {
            type: new GraphQLNonNull(GraphQLString)
          },
          userid: {
            type: new GraphQLNonNull(GraphQLString)
          }
        },
        type: taskType,
        resolve: (parent, args) => removeTask(args)
      },
      registerUser: {
        args: {
          username: {
            type: new GraphQLNonNull(GraphQLString)
          }
        },
        type: userType,
        resolve: (parent, args) => registerUser(args)
      },
      updatePosition: {
        args: {
          ids: {
            type: new GraphQLList(GraphQLString)
          }
        },
        type: GraphQLString,
        resolve: (parent, args) => updatePosition(args.ids)
      },
      updateUser: {
        args: {
          _id: {
            type: new GraphQLNonNull(GraphQLString)
          },
          username: {
            type: new GraphQLNonNull(GraphQLString)
          }
        },
        type: userType,
        resolve: (parent, args) => updateUser(args._id, args.username)
      },
      getbackUser: {
        args: {
          ids: {
            type: new GraphQLList(GraphQLString)
          }
        },
        type: GraphQLString,
        resolve: (parent, args) => getbackUser(args.ids)
      },
      getbackStatus: {
        args: {
          _id: {
            type: new GraphQLNonNull(GraphQLString)
          }
        },
        type: GraphQLString,
        resolve: (parent, args) => getbackStatus(args._id)
      },
      deleteUser: {
        args: {
          ids: {
            type: new GraphQLList(GraphQLString)
          }
        },
        type: GraphQLString,
        resolve: (parent, args) => deleteUser(args.ids)
      }
    }
  })
});
module.exports = schema;

/***/ }),

/***/ "apollo-server-express":
/*!****************************************!*\
  !*** external "apollo-server-express" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("apollo-server-express");;

/***/ }),

/***/ "aws-sdk":
/*!**************************!*\
  !*** external "aws-sdk" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = require("aws-sdk");;

/***/ }),

/***/ "dynamoose":
/*!****************************!*\
  !*** external "dynamoose" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("dynamoose");;

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = require("express");;

/***/ }),

/***/ "graphql":
/*!**************************!*\
  !*** external "graphql" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = require("graphql");;

/***/ }),

/***/ "graphql-playground-middleware-express":
/*!********************************************************!*\
  !*** external "graphql-playground-middleware-express" ***!
  \********************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("graphql-playground-middleware-express");;

/***/ }),

/***/ "serverless-http":
/*!**********************************!*\
  !*** external "serverless-http" ***!
  \**********************************/
/***/ ((module) => {

"use strict";
module.exports = require("serverless-http");;

/***/ }),

/***/ "uuid":
/*!***********************!*\
  !*** external "uuid" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("uuid");;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// module exports must be returned from runtime so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__("./handler/handler.js");
/******/ })()
;
//# sourceMappingURL=handler.js.map