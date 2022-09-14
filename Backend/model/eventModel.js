const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema(
  {
    eventName: {
      type: String,
    },
    userId: {
      type: String,
    },
    BirthdayPersonName: {
      type: String,
    },
    MomName: {
      type: String,
    },
    DadName: {
      type: String,
    },
    NameOfFunction: {
      type: String,
    },
    TypeOfFunction: {
      type: String,
    },
    NameOfEvent: {
      type: String,
    },
    NameOfConcern: {
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
    Age: {
      type: Number,
    },
    Gender: {
      type: String,
    },
    City: {
      type: String,
    },
    NoOfDays: {
      type: Number,
    },
    FromTime: {
      type: String,
    },
    ToTime: {
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
    BachelorsPartyDate: {
      type: String,
    },
    ShootingDate: {
      type: String,
    },
    NoOfGuests: {
      type: Number,
    },
    MinBudget: {
      type: String,
    },
    MaxBudget: {
      type: String,
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
        DateMehandiShow: {
          type: String,
        },
        TimeMehandiShow: {
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
    BachelorsParty: {
      musicvalues: {
        type: String,
      },
      dancevalues: {
        type: Object,
      },
      OtherServices: [
        {
          type: String,
        },
      ],
      invitation: {
          type: String,
        },
      OtherServiceValues: {
        
        Photography: {
          type: Object,
        },
        mehandi: {
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
    },
  },
  {
    timestamps: true,
  }
);

const EventForm = mongoose.model("EventForm", eventSchema);

exports.EventForm = EventForm;
