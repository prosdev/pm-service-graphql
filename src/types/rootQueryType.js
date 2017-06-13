import {
    GraphQLObjectType
} from 'graphql';
import PortfolioType from '../types/portfolioType';

const portoflios = [{
    id: "1",
    name: "Porfolio"
}];

const RootQueryType = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        portfolio: {
            type: PortfolioType,
            resolve(parentValue, args, req) {
                return portoflios;
            }
        }
    }
});

export default RootQueryType;