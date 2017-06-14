import {
    GraphQLObjectType,
    GraphQLString
} from 'graphql';

const PropertyType = new GraphQLObjectType({
   name: 'Property',
    description: 'Properties can be a multitude of things. In our case, we imagine properties to be houses, condos, apartments, etc.',
    fields: {
       name: {
           type: GraphQLString,
           name: "The name of the property"
       },
       description: {
           type: GraphQLString,
           name: "A description of property."
       }
    }
});

export default PropertyType;