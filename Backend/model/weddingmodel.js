const mongoose = require("mongoose");

const weddingSchema = new mongoose.Schema(
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
    ClientName: {
      type: String,
    },
    BrideName: {
      type: String,
    },
    GroomName: {
      type: String,
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
    City: {
      type: String,
    },
    Services: [
      {
        type: String,
      },
    ],

    Servicevalue: {
      Mehandi: {
        DateMehandiShow: {
          type: String,
        },
        TimeMehandiShow: {
          type: String,
        },
      },
      Reception: {
        DateReception: {
          type: String,
        },
        TimeReception: {
          type: String,
        },
      },
      Phera: {
        DatePhera: {
          type: String,
        },
        TimePhera: {
          type: String,
        },
      },
      Sangeet: {
        DateSangeet: {
          type: String,
        },
        TimeSangeet: {
          type: String,
        },
      },
      Pooja: {
        DatePooja: {
          type: String,
        },
        TimePooja: {
          type: String,
        },
      },
      Baraat: {
        DateBaraat: {
          type: String,
        },
        TimeBaraat: {
          type: String,
        },
      },
      Baraat: {
        DateBaraat: {
          type: String,
        },
        TimeBaraat: {
          type: String,
        },
      },
      Haldi: {
        DateHaldi: {
          type: String,
        },
        TimeHaldi: {
          type: String,
        },
      },
      Tilak: {
        dateTilak: {
          type: String,
        },
        TimeTilak: {
          type: String,
        },
      },
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
    ConceptWedding: {
      type: String,
    },
    ThemeWedding: {
      type: String,
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

const weddingInfoSchema = new mongoose.Schema({

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
//6
  weddingTypeReason : {
    type: String
  },
  weddingTypeStatus : {
    type: String
  },
  weddingTypePromiseDate : {
    type : String
  },
  weddingTypeService : {
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


const WeddingForm = mongoose.model("WeddingForm", weddingSchema);
const WeddingInfo = mongoose.model("WeddingInfo", weddingInfoSchema);

exports.WeddingForm = WeddingForm;
exports.WeddingInfo = WeddingInfo;
