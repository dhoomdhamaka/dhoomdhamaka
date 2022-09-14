const { string } = require("joi");
const mongoose = require("mongoose");

const postweddingSchema = new mongoose.Schema(
  {
    eventName: {
      type: String,
    },
    orderId : {
      type: String
    },
    userId: {
      type: String,
    },
    ClientName: {
      type: String,
    },
    BrideName: {
      type: String,
    },
    GroomName: {
      type: String,
    },
    cancelrequest:{
      type:Boolean
    },
    cancelstatus:{
      type:String
    },
    canceled:{
      type:Boolean
    },
    refund:{
      type:Number
    },
    date: {
      type: String,
    },
    FromDate: {
      type: String,
    },
    ToData: {
      type: String,
    },
    MinBudget: {
      type: String,
      required: true,
    },
    MaxBudget: {
      type: String,
      required: true,
    },
    City: {
      type: String,
    },
    SpecialService: {
      type: String,
    },
    NoOfGuests: {
      type: Number,
    },
    muhDikhal: [
      {
        type: String,
      },
    ],
    muhDikhalvalue: {
      musicvalues: {
        type: String,
      },
      dancevalues: {
        type: String,
      },
    },
    SubaarambhYatra: [
      {
        type: String,
      },
    ],
    Honneymoon: {
      DestinationIndia: {
        type: String,
      },
      DestinationAbroad: {
        type: String,
      },
      HonneymoonDays: {
        type: String,
      },
    },
    Food: {
      Foodtype: {
        type: String,
      },
      items: {
        type: String,
      },
    },
    // honeymoonStatus: {
    //   type: String,
    // },
    cateringStatus: {
      type: String,
    },
    foodb: {
      type: Boolean,
    },
    Honneymoonb: {
      type: Boolean,
    },
    isVerified: {
      type: Boolean,
    },
  },
  {
    timestamps: true,
  }
);

// Post wedding
// Muh - Dikhai
// Subharambh Yatra
// Honney moon


const postweddingInfoSchema = new mongoose.Schema({
  eventName: {
    type: String,
  },
  orderId : {
    type: String
  },
  userId: {
    type: String,
  },
  muh_DikhaiReason:{
    type: String
  } ,
  muh_DikhaiConfirmation:{
    type: String
  } ,
  muh_Dikhaistatus:{
    type: String
  } ,
  muh_DikhaiPromiseDate:{
    type: String
  } ,
  subaarambhYatraReason:{
    type: String
  } ,
  subaarambhYatraConfirmation:{
    type: String
  } ,
  subaarambhYatrastatus:{
    type: String
  } ,
  subaarambhYatraPromiseDate:{
    type: String
  } ,

  honeymoonReason:{
    type: String
  } ,
  honeymoonConfirmation:{
    type: String
  } ,
  honeymoonstatus:{
    type: String
  } ,
  honeymoonPromiseDate:{
    type: String
  } ,
  
  AdditionalReason : {
    type: String
  },
  AdditionalStatus : {
    type: String
  },
  AdditionalPromiseDate : {
    type : String
  },
  AdditionalService : {
    type : String
  },
})

const PostWeddingForm = mongoose.model("PostWeddingForm", postweddingSchema);
const PostWeddinngInfo = mongoose.model("PostWeddingInfo", postweddingInfoSchema);

exports.PostWeddingForm = PostWeddingForm;
exports.PostWeddinngInfo = PostWeddinngInfo;
