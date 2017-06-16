import {
    GraphQLObjectType
} from 'graphql';
import createPropertyMutation from '../mutations/createPropertyMutation';
import createTransactionMutation from '../mutations/createTransactionMutation';

const MutationType = new GraphQLObjectType({
    name: 'Mutation',
    description: 'The entry point for the many mutations (methods) you can perform in this service.',
    fields: {
        addProperty: createPropertyMutation,
        addTransaction: createTransactionMutation
    }
});

export default MutationType;