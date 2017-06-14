import {
    GraphQLList,
    GraphQLNonNull,
    GraphQLString,
    GraphQLObjectType
} from 'graphql';

import PropertyType from '../types/propertyType';
import propertyService from '../services/propertyService';

const createPropertyMutation = {
        type: PropertyType,
        description: 'A mutation to add a property given the required fields.',
        args: {
            name: {
                name: 'Property name',
                type: new GraphQLNonNull(GraphQLString)
            },
            description: {
                name: 'Must provide a short description of property',
                type: new GraphQLNonNull(GraphQLString)
            }
        },

        resolve(parentValue, {name, description}) {
            return propertyService.addProperty({name, description});
        }
};

export default createPropertyMutation;