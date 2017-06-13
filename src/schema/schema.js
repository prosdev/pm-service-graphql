import {
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
    GraphQLSchema,
    GraphQLList,
    GraphQLNonNull
} from 'graphql';
import RootQueryType from '../types/rootQueryType';

const schema = new GraphQLSchema({
    query: RootQueryType
});

export default schema;