const mongoose = require("mongoose");

const CorporateEventSchema = new mongoose.Schema(
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
    TypeOfFunction: {
      type: String,
      required: true,
    },
    NameOfEvent: {
      type: String,
    },
    NameOfConcern: {
      type: String,
    },
    date: {
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
    FromTime: {
      type: String,
    },
    ToTime: {
      type: String,
    },
    NoOfGuests: {
      type: Number,
    },
    MinBudget: {
      type: String,
      required: true,
    },
    MaxBudget: {
      type: String,
      required: true,
    },
    Shows: {
      show: [
        {
          type: String,
        },
      ],
      musicvalues: {
        type: String,
      },
      dancevalues: {
        type: String,
      },
      dj: {
        type: String,
      },
    },
    Decoration: {
      RegularDecoration: {
        type: String,
      },
    },
    SpecialService: {
      type: String,
    },
    OtherServices: [
      {
        type: String,
      },
    ],
    OtherServiceValues: {
      invitation: {
        type: String,
      },
      photography: {
        type: Object,
      },
      venues: {
        venue1: {
          name: {
            type: String,
          },
          place: {
            type: String,
          },
        },
        venue2: {
          name: {
            type: String,
          },
          place: {
            type: String,
          },
        },
        venue3: {
          name: {
            type: String,
          },
          place: {
            type: String,
          },
        },
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
    venueStatus: {
      type: String,
    },
    decorationStatus: {
      type: String,
    },
    photographyStatus: {
      type: String,
    },
    cateringStatus: {
      type: String,
    },
    foodb: {
      type: Boolean,
    },
    venueb: {
      type: Boolean,
    },
    photographyb: {
      type: Boolean,
    },
    decorationb: {
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

const corporateInfoSchema = new mongoose.Schema({

  eventName: {
    type: String,
  },
  orderId : {
    type: String
  },
  userId: {
    type: String,
  },

  //1
  invitationReason : {
    type: String
  },
  invitationStatus : {
    type: String
  },
  invitationPromiseDate : {
    type : String
  },
  invitationService : {
    type : String
  },

  
  //3
  venueReason : {
    type: String
  },
  venueStatus : {
    type: String
  },
  venuePromiseDate : {
    type : String
  },
  venueService : {
    type : String
  },
//4
  showsReason : {
    type: String
  },
  showsStatus : {
    type: String
  },
  showsPromiseDate : {
    type : String
  },
  showsService : {
    type : String
  },
//5
  photographyReason : {
    type: String
  },
  photographyStatus : {
    type: String
  },
  photographyPromiseDate : {
    type : String
  },
  photographyService : {
    type : String
  },

//7
  cateringReason : {
    type: String
  },
  cateringStatus : {
    type: String
  },
  cateringPromiseDate : {
    type : String
  },
  cateringService : {
    type : String
  },
//8
  decorationReason : {
    type: String
  },
  decorationStatus : {
    type: String
  },
  decorationPromiseDate : {
    type : String
  },
  decorationService : {
    type : String
  },


//11
  hostingReason : {
    type: String
  },
  hostingStatus : {
    type: String
  },
  hostingPromiseDate : {
    type : String
  },
  hostingService : {
    type : String
  },
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



const CorporateInfo = mongoose.model("CorporateInfo", corporateInfoSchema);

const CorporateEventForm = mongoose.model(
  "CorporateEventForm",
  CorporateEventSchema
);

exports.CorporateEventForm = CorporateEventForm;
exports.CorporateInfo = CorporateInfo;