const mongoose = require("mongoose");

const preweddingSchema = new mongoose.Schema(
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
    BachelorsPartyDate: {
      type: String,
    },
    ShootingDate: {
      type: String,
    },
    Person: {
      type: String,
    },
    City: {
      type: String,
    },
    SpecialService: {
      type: String,
    },
    Shooting: {
      Shooting: [
        {
          type: String,
        },
      ],
      Destination: {
        type: String,
      },
    },
    BachelorsParty: {
      musicvalues: {
        type: String,
      },
      dancevalues: {
        type: Object,
      },
      noofguests: {
        type: Number,
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
    shootingb: {
      type: Boolean,
    },
    // decorationb: {
    //   type: Boolean,
    // },
    isVerified: {
      type: Boolean,
    },
  },
  {
    timestamps: true,
  }
);

const PreWeddingInfoSchema = new mongoose.Schema({

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
  ShootingReason : {
    type: String
  },
  ShootingStatus : {
    type: String
  },
  ShootingPromiseDate : {
    type : String
  },
  ShootingService : {
    type : String
  },

  //2

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

  BachelorsPartyReason : {
    type: String
  },
  BachelorsPartyStatus : {
    type: String
  },
  BachelorsPartyPromiseDate : {
    type : String
  },
  BachelorsPartyService : {
    type : String
  },

})

const PreweddingInfo = mongoose.model("PreweddingInfo",PreWeddingInfoSchema)

const PreWeddingForm = mongoose.model("PreWeddingForm", preweddingSchema);

exports.PreWeddingForm = PreWeddingForm;
exports.PreweddingInfo = PreweddingInfo;
