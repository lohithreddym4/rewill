import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
    name: String,
    email: String,
    image: String,
    rentedItems: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Item' }],
    lentItems: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Item' }]
});

export default mongoose.models.User || mongoose.model('User', UserSchema);

