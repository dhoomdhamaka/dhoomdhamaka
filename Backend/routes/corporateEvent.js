const express = require("express");
const router = express.Router();
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express()
const { v4: uuidv4 } = require('uuid');;
app.use(cors());
// app.use(express.static("files"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const { EventForm } = require("../model/eventModel");
const auth = require("../middleware/auth");
const { EventName } = require("../model/eventName");
const {CorporateEventForm, CorporateInfo} = require("../model/corporateEvent")
const { PaymentfullDhoom } = require("../model/paymentfullmodel");
const { InvoiceDhoom } = require("../model/invoicemodel");



router.post("/", auth, async (req, res) => {
  const data = req.body.data;
  const checkBoxValues = req.body.checkboxValue;

  const eventName = "Corporate Event"
  const orderId = uuidv4().slice(0,6)
  const userId = req.id;
  const TypeOfFunction = data.type_Of_Function?data.type_Of_Function:"-";
  const NameOfEvent = data.name_Of_Event?data.name_Of_Event:"-";
  const NameOfConcern = data.name_Of_Concern?data.name_Of_Concern:"-";
  const date = data.date;
  const FromTime = data.fromTime;
  const ToTime = data.ToTime;
  const MinBudget = data.Estimate_Budget_Minimum;
  const MaxBudget = data.Estimate_Budget_Maximum;
  const NoOfGuests = data.No_Of_Guests?data.No_Of_Guests:"-";

  // const shows = data.shows;
  
  const Shows = {
    show: data.shows? data.shows:"-",
    musicvalues: checkBoxValues.musicvalue?checkBoxValues.musicvalue:"-",
    dancevalues: checkBoxValues.dancevalue?checkBoxValues.dancevalue:"-",
    dj: data.Dj?data.Dj:"-",
  };
  // const ShowsValue = {
  //   show: data.shows,
  //   musicvalues: checkBoxValues.musicvalue,
  //   dancevalues: checkBoxValues.dancevalue,
  //   dj: data.dj,
  // };
  const Decoration = {
    RegularDecoration: checkBoxValues.decorationvalue?checkBoxValues.decorationvalue:"-",
    ThemeDecoration: data.DecorationType?data.DecorationType:"-",
  };
  const SpecialService = data.SpecialService?data.SpecialService:"-";
console.log(req.body);
  const Food = {
    Foodtype: data.Food? data.Food:"-",
    items: checkBoxValues.foodvalue?checkBoxValues.foodvalue:"-",
  };
  const OtherServices = data.OtherServices?data.OtherServices:"-";
  const OtherServiceValues = {
    invitation: checkBoxValues.invitationvalue?checkBoxValues.invitationvalue:"-",
    photography: checkBoxValues.photovalue?checkBoxValues.photovalue:"-",
    venues: {
      venue1: {
        name: data.venue_1_name?data.venue_1_name:"-",
        place: data.venue_1_place?data.venue_1_place:"-",
      },
      venue2: {
        name: data.venue_2_name?data.venue_2_name:"-",
        place: data.venue_2_place?data.venue_2_place:"-",
      },
      venue3: {
        name: data.venue_3_name? data.venue_3_name:"-",
        place: data.venue_3_place?data.venue_3_place:"-",
      },
    },
  };
  var cancelrequest = false;
  var cancelstatus = "pending";
  var canceled = false
  var refund = 0;

  // var venueStatus = "pending"
  // var cateringStatus = "pending"
  // var photographyStatus = "pending"
  // var decorationStatus = "pending"
  // var isVerified = false
  // var foodb = false
  //  var photographyb = false
  //  var venueb = false
  //  var decorationb = false
  //  if (Food.Foodtype){
  //   foodb = true
  //  }
  //  if(OtherServiceValues.photography){
  //   photographyb= true
  //  }
  //  if(OtherServiceValues.venues){
  //   venueb = true
  //  }
  //  if(Decoration.RegularDecoration || Decoration.ThemeDecoration){
  //     decorationb = true
  //  }





  const newcorporateeventform = CorporateEventForm({
    eventName,
    orderId,
    userId,
    TypeOfFunction,
    NameOfEvent,
    NameOfConcern,
    date,
    FromTime,
    ToTime,
    NoOfGuests,
    MinBudget,
    MaxBudget,
    SpecialService,
    Shows,
    Decoration,
    OtherServices,
    OtherServiceValues,
    Food,
    cancelrequest,
    cancelstatus,
    canceled,
    refund
  
  });



    
  let showsReason;
  let showsStatus;
  let showsPromiseDate;
  let showsService;

  let decorationReason;
  let decorationStatus;
  let decorationPromiseDate;
  let decorationService;

  let cateringReason;
  let cateringStatus;
  let cateringPromiseDate;
  let cateringService;

  let invitationReason;
  let invitationStatus;
  let invitationPromiseDate;
  let invitationService;

  let venueReason;
  let venueStatus;
  let venuePromiseDate;
  let venueService;

  let photographyReason;
  let photographyStatus;
  let photographyPromiseDate;
  let photographyService;

  let hostingReason;
  let hostingStatus;
  let hostingPromiseDate;
  let hostingService;

  let AdditionalReason;
  let AdditionalStatus;
  let AdditionalPromiseDate;
  let AdditionalService;


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

  const newCorporateInfo = CorporateInfo({
    eventName,
    userId,
    orderId,
    invitationReason,
    invitationStatus,
    invitationPromiseDate,
    invitationService,
   
    venueReason,
    venueStatus,
    venuePromiseDate,
    venueService,

    photographyReason,
    photographyStatus,
    photographyPromiseDate,
    photographyService,
   
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
 
  CorporateEventForm.find({userId:req.id}).then((already)=>{
    console.log("alr",already);
    if(already.length> 0){
     res.status(200).send("already")
    }
    else{

  newcorporateeventform.save().then(() => {
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
    photography: 0,
    venue: 0,
    hosting: 0,
    addtional: 0,
    emergency: 0,
    premium: 0,
  });

  newInvoiceDhoom
    .save()
    .then(() => console.log("successfully invoice saved"));
});


  newCorporateInfo.save().then(()=>console.log("success infowed saved"))
  newEventName.save().then(() => console.log("successfully event name saved"));

});
}
  });
  console.log("completed!! saved");

});



router.get("/corporateInfo/:orderIdp", (req, res) => {
  CorporateInfo.find({ orderId: req.params.orderIdp }, (err, doc) => {
    if (err) {
      console.log(err);
      res.status(400).send(err);
    } else {
      res.status(200).send(doc);
    }
  });
});

router.post("/updateInfos", (req, res) => {
  const datass = req.body.eventDatas;
  CorporateInfo.findOneAndUpdate(
    { orderId: datass.orderId },
    {
      $set: {
        invitationReason: datass.invitationReas,
        invitationStatus: datass.invitationstats,
        invitationPromiseDate: datass.invitationPromiseDat,
        invitationService: datass.invitationConf,
       
        venueReason: datass.venueReas,
        venueStatus: datass.venuestats,
        venuePromiseDate: datass.venuePromiseDat,
        venueService: datass.venueConf,

        photographyReason: datass.photographyReas,
        photographyStatus: datass.photographystats,
        photographyPromiseDate: datass.photographyPromiseDat,
        photographyService: datass.photographyConf,

        AdditionalReason: datass.additionalReas,
        AdditionalStatus: datass.additionalstats,
        AdditionalPromiseDate: datass.additionalPromiseDat,
        AdditionalService: datass.additionalConf,

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

        hostingReason: datass.hostingReas,
        hostingStatus: datass.hostingstats,
        hostingPromiseDate: datass.hostingPromiseDat,
        hostingService: datass.hostingConf,
      },
    },
    (err, doc) => {
      if (err) {
        console.log(err);
        res.status(400).send(err);
      } else {
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
