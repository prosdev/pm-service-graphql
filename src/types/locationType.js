import {
    GraphQLObjectType,
    GraphQLString,
    GraphQLFloat,
    GraphQLList,
    GraphQLNonNull
} from 'graphql';

const LocationType = new GraphQLObjectType({
    name: 'Location',
    description: 'Location object containing coordinates and street address.',
    fields: {
        coordinates: {
            type: new GraphQLList(GraphQLFloat),
            description: "Must supply valid coordinates to determine location. Caution: Mongodb accepts lat, lng while google map supplies lng, lat"
        },
        streetAddress: {
            type: GraphQLString,
            description: 'Must supply a street address!'
        }
    }
});

export default LocationType;