const BookingSchema = new mongoose.Schema({
    item: { type: mongoose.Schema.Types.ObjectId, ref: 'Item' },
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    startDate: Date,
    endDate: Date,
    totalPrice: Number
});

export default mongoose.models.Booking || mongoose.model('Booking', BookingSchema);