const dynamoose = require("dynamoose") ;   // 몽구스는 서버와 몽고디비를 연결해준다. no sql이 기존 mysql과 다르게 테이블이 존재하지 않는데,
const {Schema} = dynamoose;            // 스키마라는 개념을 넣어서 중구난방으로 데이터를 쓰지 않게 잡아준다.

// 정형화된 스키마를 선언하는 부분 -> spring model과 비슷하다 생각하면 됨
const User = dynamoose.model('test00_users', {
    
    dummy: {
        "type": String,
        "hashKey": true,
        "index": {
            "name": "createdAt_index",
            "rangeKey": "createdAt",
            "throughput": {"read": 5, "write": 5}
        },
        "index": {
            "name": "username_index",
            "rangeKey": "username",
            "throughput": {"read": 5, "write": 5}
        },
        "index": {
            "name": "status_index",
            "rangeKey": "status",
            "throughput": {"read": 5, "write": 5}
        },
        "index": {
            "name": "position_index",
            "rangeKey": "position",
            "throughput": {"read": 5, "write": 5}
        }
    },
    _id:{
        "type":String,
        "rangeKey":true
    },
    createdAt:String,
    username: String,
    status: String,
    position:String
  });
    

module.exports= User; // Content라는 모델이름을 가지고 contentSchema의 틀에 맞게 가져갈 수 있다.