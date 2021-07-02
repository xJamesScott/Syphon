import mongoose from 'mongoose';

const schemaOptions = {
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' },
};

const Order = mongoose.Schema({
    product: {
        name: String,
        quauntity: Number
    },
    total: Number,
    address: String,
    city: String,
    State: String,
    zip: Number,
    email: String,
    phone: String,
    customer: Object
},
    schemaOptions
);

export default mongoose.models.Order || mongoose.model('Order', Order);