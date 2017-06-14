import Property from '../models/Property';

const addProperty = async ({name, description, location, thumbImage, mainImage, tags}) => {
    return await new Property({
        name,
        description,
        location,
        thumbImage,
        mainImage,
        tags
    }).save();
};

const getProperties = async(properties) => {
    return await Property.find(properties);
};

export default {addProperty, getProperties};
