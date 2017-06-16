import {
    GraphQLObjectType,
    GraphQLID,
    GraphQLList
} from 'graphql';
import PropertyType from './propertyType';
import TransactionType from './transactionType';
import faker from 'faker';
import propertyService from '../services/propertyService';
import transactionService from '../services/transactionService';

const properties = [
    {
        name: faker.name.findName(),
        description : faker.lorem.paragraph()
    },
    {
        name: faker.name.findName(),
        description : faker.lorem.paragraph()
    },
    {
        name: faker.name.findName(),
        description : faker.lorem.paragraph()
    }
];

const RootQueryType = new GraphQLObjectType({
    name: 'RootQueryType',
    description: 'The root access to the many query possibilities contained in our service',
    fields: {
        properties: {
            type: new GraphQLList(PropertyType),
            description: 'Get a list of properties. Specify fields to return properties with only needed data',
            resolve: async (properties) => {
                return await propertyService.getProperties(properties);
            }
        },
        transactions: {
            type: new GraphQLList(TransactionType),
            description: 'Get a list of transactions for a property. Specify fields to return only needed data',
            resolve: async (transactions) => {
                return await transactionService.getTransactions(transactions);
            }
        }
    }
});

export default RootQueryType;