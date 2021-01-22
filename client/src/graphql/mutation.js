import gql from "graphql-tag";


//Order RewritePage

export const CreateMutation = gql`
    mutation createOrder($id:ID! $menu:String! $hi:String!){
        createOrder(_id:$id,menu:$menu, hi:$hi){
            menu
            hi
            username
        }
    }

`

export const RemoveMutation = gql`
    mutation removeOrder($userid:ID! $orderid:ID!){
        removeOrder(userid:$userid, orderid:$orderid)
        {
            menu
            hi
            username
        }
    }
`

//Task RewritePage
export const TaskCreateMutation = gql`
    mutation($userid:ID!, $title:String!){
        createTask(userid:$userid, title:$title){
            _id
            creater
            title
        }
    }

`

//Task Update

export const UpdateUserMutation = gql`
    mutation updateUser($id:ID! $username:String!){
        updateUser(_id:$id, username:$username){
            _id
            username
        }
    }

`

//Task Remove
export const TaskRemoveMutation = gql`
    mutation removeTask($id:ID!,$userid:ID!){
        removeTask(_id:$id,userid:$userid){
            _id
            creater
            title
        }
    }`


//주문 포기 상태로 전환
export const OrderGiveupMutation = gql`
    mutation giveupOrder($userid:ID!){
        giveupOrder(userid:$userid)
    }`

//주문 초기화
export const OrderConfirmMutation = gql`
    mutation {
        confirmOrders
    }
`

export const BackUserMutation = gql`
    mutation updatePosition($ids:[ID])

    {updatePosition(ids:$ids)}

`


export const CreateUserMutation = gql`
    mutation registerUser($username: String!){
        registerUser(username:$username){
            username
        }
    }


`
export const OrderBackMutation = gql`
    mutation getbackUser($ids:[ID])

    {getbackUser(ids:$ids)}

`

export const getBackGiveup = gql`
    mutation getbackStatus($id:ID!){
        getbackStatus(_id:$id)
    }
`

export const multipleDelete = gql`
    mutation deleteUser($ids:[ID]!){
        deleteUser(ids:$ids)
    }
`