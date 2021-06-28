import mongoose from 'mongoose';

const schemaOptions = {
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' },
};

const User = mongoose.Schema({
    name: {
        firstName: { type: String },
        lastName: { type: String }
    },
    email: { type: String, required: true },
    phone: String,
    address: String,
    zipCode: String,
    city: String,
    country: String,
    emailVerified: Boolean,
},
    schemaOptions
)

export default mongoose.models.User || mongoose.model('User', User)