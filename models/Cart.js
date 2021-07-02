import mongoose from 'mongoose';

const schemaOptions = {
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' },
};

const PRODUCT_TYPE = ["earphones", "headphones", "speakers"]

const Cart = mongoose.Schema({
    productId: String,
    name: String,
    price: Number,
    productType: {
        enum: PRODUCT_TYPE,
        type: String
    },
    quantity: Number
},
    schemaOptions
);

export default mongoose.models.Cart || mongoose.model('Cart', Cart);