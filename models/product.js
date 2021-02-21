const mongoose = require("mongoose");
const {ObjectId} = mongoose.Schema;

const productSchema = new mongoose.Schema( {
    name: {
        type: String,
        trim: true,
        required: [true, 'Product Name is required.'],
        maxlength: 32
    },

    description: {
        type: String,
        required: [true, 'Description is required.'],
        maxlength: 2000
    },

    price: {
        type: Number,
        trim: true,
        required: [true, 'Price is required.'],
        maxlength: 32
    },

    category: {
        type: ObjectId,
        ref: 'Category',
        required: [true, 'Category is required.']
    },

    quantity: {
        type: Number
    },

    sold: {
        type: Number,
        default: 0
    },

    photo: {
        data: Buffer,
        contentType: String
    },

    shipping: {
        required: false,
        type: Boolean
    }
}, 
    {timestamps: true}
);

module.exports = mongoose.model("Product", productSchema);