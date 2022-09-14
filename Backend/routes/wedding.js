const express = require("express");
const router = express.Router();
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
const { v4: uuidv4 } = require("uuid");
const auth = require("../middleware/auth");
const { EventName } = require("../model/eventName");
const { WeddingForm, WeddingInfo } = require("../model/weddingmodel");
const { PaymentfullDhoom } = require("../model/paymentfullmodel");
const { InvoiceDhoom } = require("../model/invoicemodel");
app.use(cors());
app.use(express.static("files"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

router.post("/", auth, async (req, res) => {
  const data = req.body.data;
  const checkBoxValues = req.body.checkBoxValues;
console.log(req.body);
  const eventName = "Wedding Event";
  const userId = req.id;
  const orderId = uuidv4().slice(0, 6);
  const ClientName = data.Client_Name;
  const BrideName = data.Bride_Name;
  const GroomName = data.Groom_Name;
  const date = data.date;
  const City = data.city;
  const FromDate = data.fromDate;
  const ToData = data.ToDate;
  const MinBudget = data.Estimate_Budget_Minimum;
  const MaxBudget = data.Estimate_Budget_Maximum;
  const NoOfGuests = data.No_Of_Guests;
  const Services = data.service;
  const Servicevalue = {
    Mehandi: {
      DateMehandiShow: data.DateMehandiShow ? data.DateMehandiShow : "-",
      TimeMehandiShow: data.TimeMehandiShow ? data.TimeMehandiShow : "-",
    },
    Reception: {
      DateReception: data.DateReception ? data.DateReception : "-",
      TimeReception: data.TimeReception ? data.TimeReception : "-",
    },
    Phera: {
      DatePhera: data.DatePhera ? data.DatePhera : "-",
      TimePhera: data.TimePhera ? data.TimePhera : "-",
    },
    Sangeet: {
      DateSangeet: data.DateSangeet ? data.DateSangeet : "-",
      TimeSangeet: data.TimeSangeet ? data.TimeSangeet : "-",
    },
    Pooja: {
      DatePooja: data.DatePooja ? data.DatePooja : "-",
      TimePooja: data.TimePooja ? data.TimePooja : "-",
    },
    Baraat: {
      DateBaraat: data.DateBaraat ? data.DateBaraat : "-",
      TimeBaraat: data.TimeBaraat ? data.TimeBaraat : "-",
    },
    Haldi: {
      DateHaldi: data.DateHaldi ? data.DateHaldi : "-",
      TimeHaldi: data.TimeHaldi ? data.TimeHaldi : "-",
    },
    Tilak: {
      dateTilak: data.dateTilak ? data.dateTilak : "-",
      TimeTilak: data.TimeTilak ? data.TimeTilak : "-",
    },
  };
  const ConceptWedding = checkBoxValues.Conceptweddingvalue
    ? checkBoxValues.Conceptweddingvalue
    : "-";
  const ThemeWedding = checkBoxValues.Themeweddingvalue
    ? checkBoxValues.Themeweddingvalue
    : "-";
  const Decoration = {
    RegularDecoration: checkBoxValues.decorationvalue
      ? checkBoxValues.decorationvalue
      : "-",
    ThemeDecoration: data.ThemeDecoration ? data.ThemeDecoration : "-",
  };
  const Shows = {
    show: data.shows ? data.shows : "-",
    musicvalues: checkBoxValues.musicvalue ? checkBoxValues.musicvalue : "-",
    dancevalues: checkBoxValues.dancevalue ? checkBoxValues.dancevalue : "-",
    dj: data.Dj ? data.Dj : "-",
  };
  const Food = {
    Foodtype: data.Food ? data.Food : "-",
    items: checkBoxValues.foodvalue ? checkBoxValues.foodvalue : "-",
  };

  const SpecialService = data.SpecialService ? data.SpecialService : "-";
  const OtherServices = data.OtherServices ? data.OtherServices : "-";
  const OtherServiceValues = {
    invitation: checkBoxValues.invitationvalue
      ? checkBoxValues.invitationvalue
      : "-",
    photography: checkBoxValues.photovalue ? checkBoxValues.photovalue : "-",
    venues: {
      venue1: {
        name: data.venue_1_name ? data.venue_1_name : "-",
        place: data.venue_1_place ? data.venue_1_place : "-",
      },
      venue2: {
        name: data.venue_2_name ? data.venue_2_name : "-",
        place: data.venue_2_place ? data.venue_2_place : "-",
      },
      venue3: {
        name: data.venue_3_name ? data.venue_3_name : "-",
        place: data.venue_3_place ? data.venue_3_place : "-",
      },
    },
  };

  // var venueStatus = "pending";
  // var cateringStatus = "pending";
  // var photographyStatus = "pending";
  // var decorationStatus = "pending";
  // var isVerified = false;
  // var foodb = false;
  // var photographyb = false;
  // var venueb = false;
  // var decorationb = false;
  // if (Food.Foodtype) {
  //   foodb = true;
  // }
  // if (OtherServiceValues.photography) {
  //   photographyb = true;
  // }
  // if (OtherServiceValues.venues) {
  //   venueb = true;
  // }
  // if (Decoration.RegularDecoration || Decoration.ThemeDecoration) {
  //   decorationb = true;
  // }

  let invitationReason;
  let invitationStatus;
  let invitationPromiseDate;
  let invitationService;

  let beautyReason;
  let beautyStatus;
  let beautyPromiseDate;
  let beautyService;

  let venueReason;
  let venueStatus;
  let venuePromiseDate;
  let venueService;

  let photographyReason;
  let photographyStatus;
  let photographyPromiseDate;
  let photographyService;

  let weddingTypeReason;
  let weddingTypeStatus;
  let weddingTypePromiseDate;
  let weddingTypeService;

  let cateringReason;
  let cateringStatus;
  let cateringPromiseDate;
  let cateringService;

  let decorationReason;
  let decorationStatus;
  let decorationPromiseDate;
  let decorationService;

  let showsReason;
  let showsStatus;
  let showsPromiseDate;
  let showsService;

  let pandit_JiReason;
  let pandit_JiStatus;
  let pandit_JiPromiseDate;
  let pandit_JiService;

  let mehandiReason;
  let mehandiStatus;
  let mehandiPromiseDate;
  let mehandiService;

  let hostingReason;
  let hostingStatus;
  let hostingPromiseDate;
  let hostingService;

  let AdditionalReason;
  let AdditionalStatus;
  let AdditionalPromiseDate;
  let AdditionalService;

  var cancelrequest = false;
  var cancelstatus = "pending";
  var canceled = false
  var refund = 0;

  const newWeddingForm = WeddingForm({
    eventName,
    userId,
    orderId,
    ClientName,
    BrideName,
    GroomName,
    City,
    FromDate,
    ToData,
    date,
    NoOfGuests,
    MinBudget,
    MaxBudget,
    Services,
    ConceptWedding,
    ThemeWedding,
    Shows,
    Servicevalue,
    Decoration,
    SpecialService,
    OtherServices,
    OtherServiceValues,
    Food,
    cancelrequest,
    cancelstatus,
    canceled,
    refund
    // foodb,
    // photographyb,
    // venueb,
    // decorationb,
    // venueStatus,
    // photographyStatus,
    // decorationStatus,
    // cateringStatus,
    // isVerified,
  });
  if (data.OtherServices.length > 1) {
  if (data.service.includes("Mehandi")) {
    mehandiStatus = "pending";``
    mehandiReason = "-";
    mehandiPromiseDate = "";
    mehandiService = "Not Confirmed";
  } else {
    mehandiStatus = null;
    mehandiReason = null;
    mehandiPromiseDate = null;
    mehandiService = null;
  }
} else {
  mehandiStatus = null;
  mehandiReason = null;
  mehandiPromiseDate = null;
  mehandiService = null;
}
  if (data.SpecialService) {
    AdditionalStatus = "pending";
    AdditionalReason = "-";
    AdditionalPromiseDate = "";
    AdditionalService = "Not Confirmed";
  } else {
    AdditionalStatus = null;
    AdditionalReason = null;
    AdditionalPromiseDate = null;
    AdditionalService = null;
  }
  if (data.OtherServices.length > 1) {
  if (data.OtherServices.includes("venue")) {
    venueStatus = "pending";
    venueReason = "-";
    venuePromiseDate = "";
    venueService = "Not Confirmed";
  } else {
    venueStatus = null;
    venueReason = null;
    venuePromiseDate = null;
    venueService = null;
  }
} else {
  venueStatus = null;
  venueReason = null;
  venuePromiseDate = null;
  venueService = null;
}
  if (data.OtherServices.length > 1) {
  if (data.OtherServices.includes("photography")) {
    photographyStatus = "pending";
    photographyReason = "-";
    photographyPromiseDate = "";
    photographyService = "Not Confirmed";
  } else {
    photographyStatus = null;
    photographyReason = null;
    photographyPromiseDate = null;
    photographyService = null;
  }
} else {
  photographyStatus = null;
  photographyReason = null;
  photographyPromiseDate = null;
  photographyService = null;
}
  if (data.Food) {
    cateringStatus = "pending";
    cateringReason = "-";
    cateringPromiseDate = "";
    cateringService = "Not Confirmed";
  } else {
    cateringStatus = null;
    cateringReason = null;
    cateringPromiseDate = null;
    cateringService = null;
  }

  if (checkBoxValues.Conceptweddingvalue || checkBoxValues.Themeweddingvalue) {
    weddingTypeStatus = "pending";
    weddingTypeReason = "-";
    weddingTypePromiseDate = "";
    weddingTypeService = "Not Confirmed";
  } else {
    weddingTypeStatus = null;
    weddingTypeReason = null;
    weddingTypePromiseDate = null;
    weddingTypeService = null;
  }
  if (data.shows[0] != undefined) {
    showsStatus = "pending";
    showsReason = "-";
    showsPromiseDate = "";
    showsService = "Not Confirmed";
  } else {
    showsStatus = null;
    showsReason = null;
    showsPromiseDate = null;
    showsService = null;
  }
  if (data.OtherServices.length > 1) {
  if (data.OtherServices.includes("invitation")) {
    invitationStatus = "pending";
    invitationReason = "-";
    invitationPromiseDate = "";
    invitationService = "Not Confirmed";
  } else {
    invitationStatus = null;
    invitationReason = null;
    invitationPromiseDate = null;
    invitationService = null;
  }
} else {
  invitationStatus = null;
  invitationReason = null;
  invitationPromiseDate = null;
  invitationService = null;
}
  if (checkBoxValues.decorationvalue || data.ThemeDecoration) {
    decorationStatus = "pending";
    decorationReason = "-";
    decorationPromiseDate = "";
    decorationService = "Not Confirmed";
  } else {
    decorationStatus = null;
    decorationReason = null;
    decorationPromiseDate = null;
    decorationService = null;
  }
  if (data.OtherServices.length > 1) {
  if (!!data.OtherServices.includes("hosting")) {
    hostingStatus = "pending";
    hostingReason = "-";
    hostingPromiseDate = "";
    hostingService = "Not Confirmed";
  } else {
    hostingStatus = null;
    hostingReason = null;
    hostingPromiseDate = null;
    hostingService = null;
  }
} else {
  hostingStatus = null;
  hostingReason = null;
  hostingPromiseDate = null;
  hostingService = null;
}
  if (data.OtherServices.length > 1) {
  if (!!data.OtherServices.includes("pooja_pandit_Ji")) {
    pandit_JiStatus = "pending";
    pandit_JiReason = "-";
    pandit_JiPromiseDate = "";
    pandit_JiService = "Not Confirmed";
  } else {
    pandit_JiStatus = null;
    pandit_JiReason = null;
    pandit_JiPromiseDate = null;
    pandit_JiService = null;
  }
} else {
  pandit_JiStatus = null;
  pandit_JiReason = null;
  pandit_JiPromiseDate = null;
  pandit_JiService = null;
}
  if (data.OtherServices.length > 1) {
  if (!!data.OtherServices.includes("beauty")) {
    beautyStatus = "pending";
    beautyReason = "-";
    beautyPromiseDate = "";
    beautyService = "Not Confirmed";
  } else {
    beautyStatus = null;
    beautyReason = null;
    beautyPromiseDate = null;
    beautyService = null;
  }
} else {
  beautyStatus = null;
  beautyReason = null;
  beautyPromiseDate = null;
  beautyService = null;
}

  const newWeddingInfo = WeddingInfo({
    eventName,
    userId,
    orderId,
    invitationReason,
    invitationStatus,
    invitationPromiseDate,
    invitationService,
    beautyReason,
    beautyStatus,
    beautyPromiseDate,
    beautyService,
    venueReason,
    venueStatus,
    venuePromiseDate,
    venueService,
    photographyReason,
    photographyStatus,
    photographyPromiseDate,
    photographyService,
    weddingTypeReason,
    weddingTypeStatus,
    weddingTypePromiseDate,
    weddingTypeService,
    cateringReason,
    cateringStatus,
    cateringPromiseDate,
    cateringService,
    decorationReason,
    decorationStatus,
    decorationPromiseDate,
    decorationService,
    showsReason,
    showsStatus,
    showsPromiseDate,
    showsService,
    pandit_JiReason,
    pandit_JiStatus,
    pandit_JiPromiseDate,
    pandit_JiService,
    mehandiReason,
    mehandiStatus,
    mehandiPromiseDate,
    mehandiService,
    hostingReason,
    hostingStatus,
    hostingPromiseDate,
    hostingService,
    AdditionalReason,
    AdditionalStatus,
    AdditionalPromiseDate,
    AdditionalService,
  });

  const name_Of_The_Event = checkBoxValues.name_Of_The_Event;

  const newEventName = EventName({
    userId,
    name_Of_The_Event,
  });

 
WeddingForm.find({userId:req.id}).then((already)=>{
  if(already.length> 0){
    res.status(200).send("already")
   }
   else{
  newWeddingForm.save().then(() => {
    res.status(200).send("saved");
        
//payment Setting

const newPaymentfullDhoom = PaymentfullDhoom({
  eventName,
  userId,
  orderId,
  eventCharge: null,
  bookingCharge: null,
  confirmationCharge: null,
  pendingCharge: null,

  //booking
  booking: {
    booking_Amount: null,
    booking_paymentId: null,
    booking_signature: null,
    booking_isPaid: false,
  },

  //confirmation

  confirmation: {
    confirmation_Amount: null,
    confirmation_paymentId: null,
    confirmation_isPaid: false,
    confirmation_signature: null,
  },

  //pending
  pending: {
    pending_Amount: null,
    pending_paymentId: null,
    pending_isPaid: false,
    pending_signature: null,
  },
});
newPaymentfullDhoom.save().then(() => {
  console.log("successfully payment saved");

  const newInvoiceDhoom = InvoiceDhoom({
    userName: req.userName,
    eventName,
    userId,
    orderId,
    date,
    shows: 0,
    decoration: 0,
    catering: 0,
    invitaion: 0,
    beauty: 0,
    photography: 0,
    mehandi: 0,
    panditJi: 0,
    venue: 0,
    weddingType: 0,
    hosting: 0,
    addtional: 0,
    emergency: 0,
    premium: 0,
  });

  newInvoiceDhoom
    .save()
    .then(() => console.log("successfully invoice saved"));
});


  newEventName.save().then(() => console.log("successfully event name saved"));

  newWeddingInfo.save().then(() => console.log("success infowed saved"));
});
}

  });
});

router.get("/weddingInfo/:orderIdp", (req, res) => {
  // console.log(req.params.orderIdp);
  WeddingInfo.find({ orderId: req.params.orderIdp }, (err, doc) => {
    if (err) {
      console.log(err);
      res.status(400).send(err);
    } else {
      // console.log(doc);
      res.status(200).send(doc);
    }
  });
});

router.post("/updateInfos", (req, res) => {
  const datass = req.body.eventDatas;
  WeddingInfo.findOneAndUpdate(
    { orderId: datass.orderId },
    {
      $set: {
        invitationReason: datass.invitationReas,
        invitationStatus: datass.invitationstats,
        invitationPromiseDate: datass.invitationPromiseDat,
        invitationService: datass.invitationConf,
        beautyReason: datass.beautyReas,
        beautyStatus: datass.beautystats,
        beautyPromiseDate: datass.beautyPromiseDat,
        beautyService: datass.beautyConf,
        venueReason: datass.venueReas,
        venueStatus: datass.venuestats,
        venuePromiseDate: datass.venuePromiseDat,
        venueService: datass.venueConf,
        photographyReason: datass.photographyReas,
        photographyStatus: datass.photographystats,
        photographyPromiseDate: datass.photographyPromiseDat,
        photographyService: datass.photographyConf,
        weddingTypeReason: datass.weddingTypeReas,
        weddingTypeStatus: datass.weddingTypestats,
        weddingTypePromiseDate: datass.weddingTypePromiseDat,
        weddingTypeService: datass.weddingTypeConf,
        cateringReason: datass.cateringReas,
        cateringStatus: datass.cateringstats,
        cateringPromiseDate: datass.cateringPromiseDat,
        cateringService: datass.cateringConf,
        decorationReason: datass.decorationReas,
        decorationStatus: datass.decorationstats,
        decorationPromiseDate: datass.decorationPromiseDat,
        decorationService: datass.decorationConf,
        showsReason: datass.showsReas,
        showsStatus: datass.showsstats,
        showsPromiseDate: datass.showsPromiseDat,
        showsService: datass.showsConf,
        pandit_JiReason: datass.pandit_JiReas,
        pandit_JiStatus: datass.pandit_Jistats,
        pandit_JiPromiseDate: datass.pandit_JiPromiseDat,
        pandit_JiService: datass.pandit_JiConf,
        mehandiReason: datass.mehandiReas,
        mehandiStatus: datass.mehandistats,
        mehandiPromiseDate: datass.mehandiPromiseDat,
        mehandiService: datass.mehandiConf,
        hostingReason: datass.hostingReas,
        hostingStatus: datass.hostingstats,
        hostingPromiseDate: datass.hostingPromiseDat,
        hostingService: datass.hostingConf,
        AdditionalReason: datass.additionalReas,
        AdditionalStatus: datass.additionalstats,
        AdditionalPromiseDate: datass.additionalPromiseDat,
        AdditionalService: datass.additionalConf,
      },
    },
    (err, doc) => {
      if (err) {
        console.log(err);
        res.status(400).send(err);
      } else {
        // console.log(doc);
        res.status(200).send(doc);
      }
    }
  );
});


router.get("/paymentDetails/:orderIdp", (req, res) => {
  PaymentfullDhoom.find({ orderId: req.params.orderIdp }, (err, doc) => {
    if (err) {
      console.log(err);
    } else {
      res.status(200).send(doc);
    }
  });
});

//payment updation

router.post("/updatePaymentDetails", (req, res) => {
  // console.log(req.body.paymentUpdation);
  const paymentDataUpd = req.body.paymentUpdation;
  PaymentfullDhoom.findOneAndUpdate(
    { orderId: paymentDataUpd.orderId },
    {
      $set: {
        eventCharge: paymentDataUpd.eventCharge,
        bookingCharge: paymentDataUpd.bookingCharge,
        confirmationCharge: paymentDataUpd.confirmationCharge,
        pendingCharge: paymentDataUpd.pendingCharge,
      },
    },
    (err, doc) => {
      if (err) {
        console.log(err);
        res.status(400).send(err);
      } else {
        // console.log(doc);
        res.status(200).send("Succefully payment Details Updated");
      }
    }
  );
});
module.exports = router;
