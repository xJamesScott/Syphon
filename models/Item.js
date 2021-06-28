import mongoose from 'mongoose';

const schemaOptions = {
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' },
};

const PRODUCT_TYPE = ["earphones", "headphones", "speakers"]

const Item = mongoose.Schema({
    name: String,
    productId: String,
    description: String,
    price: Number,
    quantity: Number,
    productType: {
        enum: PRODUCT_TYPE,
        type: String
    }
},
    schemaOptions
);

export default mongoose.models.Item || mongoose.model('Item', Item);