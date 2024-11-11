const ItemSchema = new mongoose.Schema({
    title: String,
    description: String,
    price: Number,
    location: String,
    category: String,
    images: [String],
    owner: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    bookings: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Booking' }]
});

export default mongoose.models.Item || mongoose.model('Item', ItemSchema);
