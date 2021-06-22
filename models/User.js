import mongoose from 'mongoose';

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
    country: String
})

export default mongoose.models.User || mongoose.model('User', User)