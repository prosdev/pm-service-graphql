import {
    GraphQLObjectType,
    GraphQLID,
    GraphQLList
} from 'graphql';
import PropertyType from './propertyType';
import faker from 'faker';

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
            resolve() {
                return properties;
            }
        }
    }
});

export default RootQueryType;