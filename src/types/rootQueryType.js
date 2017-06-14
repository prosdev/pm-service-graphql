import {
    GraphQLObjectType,
    GraphQLID,
    GraphQLList
} from 'graphql';
import PropertyType from './propertyType';
import faker from 'faker';
import propertyService from '../services/propertyService';

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
    description: 'The root access to the many query possibilities contained in our service.',
    fields: {
        properties: {
            type: new GraphQLList(PropertyType),
            description: 'Get a list of properties. Specify fields to return properties with only needed fields.',
            resolve: async (properties) => {
                return await propertyService.getProperties(properties);
            }
        }
    }
});

export default RootQueryType;