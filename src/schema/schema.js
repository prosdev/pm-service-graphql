import {
    GraphQLSchema
} from 'graphql';
import MutationType from '../types/MutationType';
import RootQueryType from '../types/rootQueryType';

const schema = new GraphQLSchema({
    query: RootQueryType,
    mutation: MutationType
});

export default schema;

