import {
    GraphQLString,
    GraphQLFloat,
    GraphQLList,
    GraphQLNonNull,
    GraphQLInputObjectType
} from 'graphql';

const InputLocationType = new GraphQLInputObjectType({
    name: 'InputLocation',
    description: 'Location object containing coordinates and street address.',
    fields: {
        coordinates: {
            type: new GraphQLNonNull(new GraphQLList(GraphQLFloat)),
            description: "Must supply valid coordinates to determine location. Caution: Mongodb accepts lat, lng while google map supplies lng, lat"
        },
        streetAddress: {
            type: new GraphQLNonNull(GraphQLString),
            description: 'Must supply a street address!'
        }
    }
});

export default InputLocationType;