'use strict';

const {
    GraphQLSchema,
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
    GraphQLList,
    GraphQLNonNull,
    GraphQLBoolean
} = require('graphql');
const createOrder = require('../resolvers/order/createOrder');
const orders = require('../resolvers/order/orders');
const orderMine = require('../resolvers/order/orderMine');
const howmuch = require('../resolvers/order/howmuch');
const receipt = require('../resolvers/order/receipt');
const removeOrder = require('../resolvers/order/removeOrder');
const updateOrder = require('../resolvers/order/updateOrder');
const giveupOrder = require('../resolvers/order/giveupOrder');
const confirmOrders = require('../resolvers/order/confirmOrders');

const createTask = require('../resolvers/task/createTask');
const tasks = require('../resolvers/task/tasks');
const removeTask = require('../resolvers/task/removeTask');
const updateTask = require('../resolvers/task/updateTask');

const registerUser = require('../resolvers/user/registerUser');
const allUsers = require('../resolvers/user/allUsers');
const user = require('../resolvers/user/user');
const me = require('../resolvers/user/me');
const includedOrdermen = require('../resolvers/user/includedOrdermen');
const includedVacation = require('../resolvers/user/includedVacation');
const includedNothing = require('../resolvers/user/includedNothing');
const updatePosition = require('../resolvers/user/updatePosition');
const updateUser = require('../resolvers/user/updateUser');
const getbackUser = require('../resolvers/user/getbackUser')
const getbackStatus = require('../resolvers/user/getbackStatus')
const deleteUser = require('../resolvers/user/deleteUser');
const howmany = require('../resolvers/user/howmany');

const userType = new GraphQLObjectType({
    name: 'User',
    fields: {
        id: { type: new GraphQLNonNull(GraphQLString) },
        username: { type: new GraphQLNonNull(GraphQLString) },
        stat: { type: new GraphQLNonNull(GraphQLString) },
        posit: { type: new GraphQLNonNull(GraphQLString) },
        createdAt: { type: new GraphQLNonNull(GraphQLString) },
    }
});
const taskType = new GraphQLObjectType({
    name: 'Task',
    fields: {
        id: { type: new GraphQLNonNull(GraphQLString) },
        creater: { type: new GraphQLNonNull(GraphQLString) },
        title: { type: new GraphQLNonNull(GraphQLString) },
        createdAt: { type: new GraphQLNonNull(GraphQLString) },
    }
});
const orderType = new GraphQLObjectType({
    name: 'Order',
    fields: {
        id: { type: new GraphQLNonNull(GraphQLString) },
        menu: { type: new GraphQLNonNull(GraphQLString) },
        hi: { type: new GraphQLNonNull(GraphQLString) },
        username: { type: new GraphQLNonNull(GraphQLString) },
        createdAt: { type: new GraphQLNonNull(GraphQLString) },
    }
});


const schema = new GraphQLSchema({
    query: new GraphQLObjectType({
        name: 'Query',
        fields: {
            orders: {
                args: {
                    hi: { type: new GraphQLNonNull(GraphQLString) }
                },
                type: new GraphQLList(orderType),
                resolve: (parent, args) => orders(args.hi)
            },
            orderMine: {
                args: {
                    _id: { type: new GraphQLNonNull(GraphQLString) },
                    createdAt: { type: new GraphQLNonNull(GraphQLString) }
                },
                type: new GraphQLList(orderType),
                resolve: (parent, args) => orderMine(args)
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
                    word: { type: new GraphQLNonNull(GraphQLString) },
                    category: { type: new GraphQLNonNull(GraphQLInt) }
                },
                type: new GraphQLList(userType),
                resolve: (parent, args) => user(args.word, args.category)
            },
            me: {
                args: {
                    userid: { type: new GraphQLNonNull(GraphQLString) },
                    createdAt: { type: new GraphQLNonNull(GraphQLString) }
                },
                type: userType,
                resolve: (parent, args) => me(args.userid, args.createdAt)
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
            }

        }
    }),

    mutation: new GraphQLObjectType({
        name: 'Mutation',
        fields: {
            createOrder: {
                args: {
                    _id: { type: new GraphQLNonNull(GraphQLString) },
                    createdAt: { type: new GraphQLNonNull(GraphQLString) },
                    menu: { type: new GraphQLNonNull(GraphQLString) },
                    hi: { type: new GraphQLNonNull(GraphQLString) },
                },
                type: orderType,
                resolve: (parent, args) => createOrder(args)
            },
            updateOrder: {
                args: {
                    userid: { type: new GraphQLNonNull(GraphQLString) },
                    createdAtU: { type: new GraphQLNonNull(GraphQLString) },
                    orderid: { type: new GraphQLNonNull(GraphQLString) },
                    createdAtO: { type: new GraphQLNonNull(GraphQLString) },
                    menu: { type: new GraphQLNonNull(GraphQLString) },
                    hi: { type: new GraphQLNonNull(GraphQLString) },
                },
                type: orderType,
                resolve: (parent, args) => updateOrder(args)
            },
            removeOrder: {
                args: {
                    _id: { type: new GraphQLNonNull(GraphQLString) },
                    createdAt: { type: new GraphQLNonNull(GraphQLString) }
                },
                type: GraphQLString,
                resolve: (parent, args) => removeOrder(args._id, args.createdAt)
            },
            giveupOrder: {
                args: {
                    userid: { type: new GraphQLNonNull(GraphQLString) },
                    createdAt: { type: new GraphQLNonNull(GraphQLString) }
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
                    userid: { type: new GraphQLNonNull(GraphQLString) },
                    createdAt: { type: new GraphQLNonNull(GraphQLString) },
                    title: { type: new GraphQLNonNull(GraphQLString) }
                },
                type: taskType,
                resolve: (parent, args) => createTask(args)
            },
            updateTask: {
                args: {
                    _id: { type: new GraphQLNonNull(GraphQLString) },
                    createdAt: { type: new GraphQLNonNull(GraphQLString) },
                    title: { type: new GraphQLNonNull(GraphQLString) },
                },
                type: taskType,
                resolve: (parent, args) => updateTask(args)
            },
            removeTask: {
                args: {
                    _id: { type: new GraphQLNonNull(GraphQLString) },
                    createdAtT: { type: new GraphQLNonNull(GraphQLString) },
                    userid: { type: new GraphQLNonNull(GraphQLString) },
                    createdAtU: { type: new GraphQLNonNull(GraphQLString) }
                },
                type: GraphQLString,
                resolve: (parent, args) => removeTask(args)
            },
            registerUser: {
                args: {
                    username: { type: new GraphQLNonNull(GraphQLString) },

                },
                type: userType,
                resolve: (parent, args) => registerUser(args)
            },
            updatePosition: {
                args: {
                    ids: { type: new GraphQLList(GraphQLString) },
                    createdAts: { type: new GraphQLList(GraphQLString) }
                },
                type: GraphQLString,
                resolve: (parent, args) => updatePosition(args.ids, args.createdAts)
            },
            updateUser: {
                args: {
                    _id: { type: new GraphQLNonNull(GraphQLString) },
                    createdAt: { type: new GraphQLNonNull(GraphQLString) },
                    username: { type: new GraphQLNonNull(GraphQLString) }
                },
                type: GraphQLString,
                resolve: (parent, args) => updateUser(args._id, args.createdAt, args.username)
            },
            getbackUser: {
                args: {
                    ids: { type: new GraphQLList(GraphQLString) },
                    createdAts: { type: new GraphQLList(GraphQLString) }
                },
                type: GraphQLString,
                resolve: (parent, args) => getbackUser(args.ids, args.createdAts)
            },
            getbackStatus: {
                args: {
                    _id: { type: new GraphQLNonNull(GraphQLString) },
                    createdAt: { type: new GraphQLNonNull(GraphQLString) }
                },
                type: GraphQLString,
                resolve: (parent, args) => getbackStatus(args._id, args.createdAt)
            },
            deleteUser: {
                args: {
                    _id: { type: new GraphQLNonNull(GraphQLString) },
                    createdAt: { type: new GraphQLNonNull(GraphQLString) }
                },
                type: GraphQLString,
                resolve: (parent, args) => deleteUser(args._id, args.createdAt)
            },

        }
    })
});

module.exports = schema;