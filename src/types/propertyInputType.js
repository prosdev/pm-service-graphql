import {
    GraphQLObjectType,
    GraphQLString,
    GraphQLList
} from 'graphql';
import Location from './locationType';

const InputPropertyType = new GraphQLObjectType({
    name: 'InputProperty',
    description: 'Properties can be a multitude of things. In our case, we imagine properties to be houses, condos, apartments, etc.',
    fields: {
        name: {
            type: GraphQLString,
            description: 'The name of the property'
        },
        description: {
            type: GraphQLString,
            description: 'A description of property.'
        },
        location: {
            type: Location,
            description: 'Location object for property. Contains street address, lng and lat for coordinates.'
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
        }
    }
});

export default InputPropertyType;