import mongoose from 'mongoose';

const schemaOptions = {
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' },
};

const Item = mongoose.Schema({
    name: String,
    productId: String,
    description: String,
    price: Number,
    quantity: Number,
    schemaOptions
})

export default mongoose.models.Item || mongoose.model('Item', Item)