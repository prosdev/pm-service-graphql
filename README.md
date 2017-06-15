# About project
GraphQL Server
- Set up
- Goal

# Getting started
Clone the project, and once inside the folder, run:
```bash
    npm start
```


### Supported Mutations
Find out more about supported operations in the service by exploring the graphiql interface.
Vist the graphiql endpt: `http://localhost:4000/graphiql`

Or see below:

I. Create new properties
```bash
mutation CreateProperty{
  addProperty(
    name: "Creston Hill Manor", 
    description: "Charming Creston-Kenilworth Bungalow on .11 Acre Lot. Spacious living room with fireplace, hardwoods, rustic brick surround. Nook with built-ins, coved archways. Modern, open kitchen with granite counters, pantry. Dining room with wood floors."
    tags: ["personal"]
    thumbImage: ["https://placeimg.com/350/200/arch"]
    mainImage: ["https://placeimg.com/1080/500/arch"]
    location: {
      streetAddress: "4423 SE 30th Ave, Portland, OR 97202"
        coordinates: [-122.634882, 45.491029]
    }
  ) {
    name
  }
}
```

### Support Queries
Again, find out more about support operations in the service by cloning the project and exploring the `graphiql` endpt.
But, here's a summary: 

I. Get Properties
```bash
query getProperties {
  properties {
    name
    tags
    slug
    thumbImage
    mainImage
  }
}
```

Inside the properties object, specify the fields desired in the response. 
Fields available are: 
```code
id
name
description
location
slug
thumbImage
mainImage
tags
```

Query response will return data in the following format:
```code
{
  "data": {
    "properties": [
      {
        "name": "Elm's Hollow",
        "tags": [
          "personal"
        ],
        "slug": "elms-hollow",
        "thumbImage": [
          "https://placeimg.com/350/200/arch"
        ],
        "mainImage": [
          "https://placeimg.com/1080/500/arch"
        ]
      },
      {
        "name": "Colonial Split",
        "tags": [
          "rental"
        ],
        "slug": "colonial-split",
        "thumbImage": [
          "https://placeimg.com/350/200/arch"
        ],
        "mainImage": [
          "https://placeimg.com/1080/500/arch"
        ]
      },
      {
        "name": "Creston Hill Manor",
        "tags": [
          "personal"
        ],
        "slug": "creston-hill-manor",
        "thumbImage": [
          "https://placeimg.com/350/200/nature/grayscale/1"
        ],
        "mainImage": [
          "https://placeimg.com/1080/500/arch"
        ]
      }
    ]
  }
}
```

