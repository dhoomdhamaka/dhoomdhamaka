const mongoose = require("mongoose");

const invoiceSchema = new mongoose.Schema(
  {
    userName: {
      type: String,
    },
    eventName: {
      type: String,
    },
    userId: {
      type: String,
    },
    orderId: {
      type: String,
    },
    date: {
      type: String,
    },
    shows: {
      type: Number,
    },
    decoration: {
      type: Number,
    },
    weddingType: {
      type: Number,
    },
    catering: {
      type: Number,
    },
    invitaion: {
      type: Number,
    },
    beauty: {
      type: Number,
    },
    photography: {
      type: Number,
    },
    mehandi: {
      type: Number,
    },
    panditJi: {
      type: Number,
    },
    venue: {
      type: Number,
    },
    muhDikhai: {
      type: Number,
    },
    bachelorParty: {
      type: Number,
    },
    subharambh: {
      type: Number,
    },
    hosting: {
      type: Number,
    },
    shooting: {
      type: Number,
    },
    honeymoon: {
      type: Number,
    },
    addtional: {
      type: Number,
    },
    emergency: {
      type: Number,
    },
    premium: {
      type: Number,
    },
  },
  {
    timestamps: true,
  }
);

const InvoiceDhoom = mongoose.model("InvoiceDhoom", invoiceSchema);

exports.InvoiceDhoom = InvoiceDhoom;