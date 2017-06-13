import {
    GraphQLObjectType,
    GraphQLString,
    GraphQLID
} from 'graphql';

const PortfolioType = new GraphQLObjectType({
    name: 'PortfolioType',
    fields: {
        id: {type: GraphQLID},
        name: {type: GraphQLString}
    }
});

export default PortfolioType;