const mongoose = require('mongoose');
const Schema = mongoose.Schema;
import slug from 'slugs';

const PropertySchema = new Schema({
    name: {
        type: String,
        required: "Must supply a name for property.",
        trim: true,
        unique: true
    },
    description: {
        type: String,
        trim: true,
        required: "Must provide a short description of property"
    },
    slug: String,
    thumbImage: [String],
    mainImage: [String],
    tags: [String],
    createdAt: {
        type: Date,
        default: Date.now
    },
    location: {
        type: {
            type: String,
            default: 'Point'
        },
        //Mongodb accepts lat, lng while google map supplies lng, lat
        coordinates: [{
            type: Number,
            required: 'Must supply coordinates!'
        }],
        streetAddress: {
            type: String,
            required: 'Must supply an address!'
        }
    }
});

const generateUniqueSlugs = async function (next) {
    if(!this.isModified('name')) {
        next(); //skip if name has not been modified
        return;
    }
    this.slug = slug(this.name);
    const slugRegEx = new RegExp(`^(${this.slug})((-[0-9]*$)?)`, 'i');
    const propertyWithSlug = await this.constructor.find({ slug: slugRegEx });
    if (propertyWithSlug.length) {
        this.slug = `${this.slug}-${propertyWithSlug.length + 1}`;
    }
    next();
};

PropertySchema.pre('save', generateUniqueSlugs);

export default mongoose.model('Property', PropertySchema);