const mongoose = require("mongoose");
const PaymentfullSchema = mongoose.Schema({
  eventName: {
    type: String,
  },
  orderId: {
    type: String,
  },
  userId: {
    type: String,
  },

  eventCharge: Number,
  bookingCharge: Number,
  confirmationCharge: Number,
  pendingCharge: Number,

  //booking
  booking: {
    booking_Amount: Number,
    booking_paymentId: String,
    booking_signature: String,
    booking_isPaid: Boolean,
  },

  //confirmation

  confirmation: {
    confirmation_Amount: Number,
    confirmation_paymentId: String,
    confirmation_isPaid: Boolean,
    confirmation_signature: String,
  },

  //pending
  pending: {
    pending_Amount: Number,
    pending_paymentId: String,
    pending_isPaid: Boolean,
    pending_signature: String,
  },

  // },
});
const PaymentfullDhoom = mongoose.model("PaymentfullDhoom", PaymentfullSchema);

exports.PaymentfullDhoom = PaymentfullDhoom;