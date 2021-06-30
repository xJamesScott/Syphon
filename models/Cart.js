import mongoose from 'mongoose';

const schemaOptions = {
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' },
};

const Cart = mongoose.Schema({
    name: String,
    productId: String,
    price: Number,
    quantity: Number
},
    schemaOptions
);

export default mongoose.models.Cart || mongoose.model('Cart', Cart);