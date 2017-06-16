import {
    GraphQLObjectType,
    GraphQLString,
    GraphQLList,
    GraphQLFloat,
    GraphQLID
} from 'graphql';

const InputTransactionType = new GraphQLObjectType({
    name: 'InputTransaction',
    description: 'Transactions associated with property. Think of bills, items purchased for renovating property...general expenses associated with property. Can even include rental income.',
    fields: {
        name: {
            type: GraphQLString,
            description: 'The name of a transaction'
        },
        note: {
            type: GraphQLString,
            description: 'A short note regarding transaction. For example, could be the item intended usage'
        },
        amount: {
            type: GraphQLFloat,
            description: 'Amount for transaction'
        },
        category: {
            type: new GraphQLList(GraphQLString),
            description: 'Category of transaction. Property improvement, repair, general expense, bills, etc... can be a category for transaction'
        },
        type: {
            type: GraphQLString,
            description: 'A type for transaction. Usually falls into two types: "expense" or "income"'
        },
        property: {
            type: GraphQLID,
            description: 'Property id associated with transaction'
        }
    }
});

export default InputTransactionType;