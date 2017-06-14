import Property from '../models/Property';

const addProperty = async ({name, description}) => {
    return await new Property({name, description}).save();
};

export default {addProperty};