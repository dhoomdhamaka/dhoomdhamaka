const { boolean } = require("joi");
const mongoose = require("mongoose");

const babyshowerSchema = new mongoose.Schema(
  {
    eventName: {
      type: String,
    },
    orderId: {
      type: String,
    },
    userId: {
      type: String,
    },
    DadName: {
      type: String,
      required: true,
    },
    MomName: {
      type: String,
    },
    Gender: {
      type: String,
    },
    FromDate: {
      type: String,
    },
    ToData: {
      type: String,
    },
    date: {
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
      ThemeDecoration: {
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

const babyshowerInfoSchema = new mongoose.Schema({

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
  //2

  beautyReason : {
    type: String
  },
  beautyStatus : {
    type: String
  },
  beautyPromiseDate : {
    type : String
  },
  beautyService : {
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
//9
  pandit_JiReason : {
    type: String
  },
  pandit_JiStatus : {
    type: String
  },
  pandit_JiPromiseDate : {
    type : String
  },
  pandit_JiService : {
    type : String
  },
//10
  mehandiReason : {
    type: String
  },
  mehandiStatus : {
    type: String
  },
  mehandiPromiseDate : {
    type : String
  },
  mehandiService : {
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

})

const BabyShowerInfo = mongoose.model("BabyShowerInfo",babyshowerInfoSchema)
const BabyShowerForm = mongoose.model("BabyShowerForm", babyshowerSchema);

exports.BabyShowerForm = BabyShowerForm;
exports.BabyShowerInfo = BabyShowerInfo;