import {
    GraphQLList,
    GraphQLNonNull,
    GraphQLString,
    GraphQLFloat,
    GraphQLID
} from 'graphql';

import transactionService from '../services/transactionService';
import InputTransactionType from '../types/transactionInputType';

const createTransactionMutation = {
    type: InputTransactionType,
    description: 'A mutation to add a property given the required fields.',
    args: {
        name: {
            type: new GraphQLNonNull(GraphQLString),
            description: 'Transaction name'
        },
        note: {
            type: GraphQLString,
            description: 'A short note regarding transaction. For example, could be the item intended usage'
        },
        amount: {
            type: new GraphQLNonNull(GraphQLFloat),
            description: 'Amount for transaction'
        },
        category: {
            type: new GraphQLList(GraphQLString),
            description: 'Category of transaction. Property improvement, repair, general expense, bills, etc... can be a category for transaction'
        },
        type: {
            type: new GraphQLNonNull(GraphQLString),
            description: 'A type for transaction. Usually falls into two types: "expense" or "income"'
        },
        property: {
            type: new GraphQLNonNull(GraphQLID),
            description: 'Property id associated with transaction'
        }
    },

    resolve: async (parentValue, {name, note, amount, category, type, property}) => {
        return await transactionService.addTransaction({
            name,
            note,
            amount,
            category,
            type,
            property
        });
    }
};

export default createTransactionMutation;