import {
    GraphQLList,
    GraphQLNonNull,
    GraphQLString,
    GraphQLObjectType
} from 'graphql';

import InputPropertyType from '../types/propertyInputType';
import InputLocationType from '../types/locationInputType';

import propertyService from '../services/propertyService';

const createPropertyMutation = {
        type: InputPropertyType,
        description: 'A mutation to add a property given the required fields.',
        args: {
            name: {
                name: 'Property name',
                type: new GraphQLNonNull(GraphQLString)
            },
            description: {
                name: 'Must provide a short description of property',
                type: new GraphQLNonNull(GraphQLString)
            },
            location: {
                type: InputLocationType,
                description: 'Location object for property. Needs street address, lng and lat for coordinates.'
            },
            thumbImage: {
                type: new GraphQLList(GraphQLString),
                description: 'A list of thumbnail images for a property.'
            },
            mainImage: {
                type: new GraphQLList(GraphQLString),
                description: 'A list of full size images for a property.'
            },
            tags: {
                type: new GraphQLList(GraphQLString),
                description: 'A list of tags associated with a property.'
            },
        },

        resolve: async (parentValue, {name, description, location, thumbImage, mainImage, tags}) => {
            return await propertyService.addProperty({
                name,
                description,
                location,
                thumbImage,
                mainImage,
                tags
            });
        }
};

export default createPropertyMutation;