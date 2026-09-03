const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
    userId: { 
        type: mongoose.Schema.Types.ObjectId,
         ref: 'User', required: true 
        },
    eventId: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Event',
         required: true 
        },

    status: { 
        type: String, 
        enum: ['confirmed', 'cancelled', 'pending'], 
        default: 'pending'
     },

    paymentStatus: { 
        type: String, 
        enum: ['paid', 'not_paid'], //not paid: user book a event free to with no charge !
        default: 'not_paid'       //by default its no paid ! 
    },
    amount: {
         type: Number,
          required: true   
        },
    bookedAt: {
         type: Date, 
         default: Date.now
         }
}, { 
    timestamps: true
 }
);

module.exports = mongoose.model('Booking', bookingSchema);
