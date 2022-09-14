const express = require("express");
const router = express.Router();
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
const { v4: uuidv4 } = require('uuid');
app.use(cors());
app.use(express.static("files"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const { PreWeddingForm ,PreweddingInfo} = require("../model/preweddingmodel");
const auth = require("../middleware/auth");
const { EventName } = require("../model/eventName");
const { PaymentfullDhoom } = require("../model/paymentfullmodel");
const { InvoiceDhoom } = require("../model/invoicemodel");
router.post("/", auth, async (req, res) => {
  const data = req.body.data;
  const checkBoxValues = req.body.checkBoxValues;

  const eventName = "PreWedding Event"
  const userId = req.id;
  const orderId = uuidv4().slice(0,6)
  const ClientName = data.Client_Name;
  const BrideName = data.Bride_Name;
  const GroomName = data.Groom_Name;
  const Person = data.person;
  const date = data.date;
  const City = data.city?data.city:"-";
  const FromDate = data.fromDate;
  const ToData = data.ToDate;
  const BachelorsPartyDate = data.BachelorPartyDate;
  const ShootingDate = data.ShootingDate;
  const MinBudget = data.Estimate_Budget_Minimum;
  const MaxBudget = data.Estimate_Budget_Maximum;

  const BachelorsParty = {
    venues: {
      venue1: {
        name: data.Venue_1_Name?data.Venue_1_Name:"-",
        place: data.Venue_1_Place?data.Venue_1_Place:"-",
      },
      venue2: {
        name: data.Venue_2_Name?data.Venue_2_Name:"-",
        place: data.Venue_2_Place?data.Venue_2_Place:"-",
      },
      venue3: {
        name: data.Venue_3_Name?data.Venue_3_Name:"-",
        place: data.Venue_3_Place?data.Venue_3_Place:"-",
      },
    },
    musicvalues: checkBoxValues.musicvalue?checkBoxValues.musicvalue:"-",
    dancevalues: checkBoxValues.dancevalue? checkBoxValues.dancevalue:"-",
    noofguests: data.No_Of_Guests?data.No_Of_Guests:"-",
  };

  const Shooting = {
    Shooting: data.shooting?data.shooting:"-",
    Destination: data.destination_Place? data.destination_Place:"-",
  };

  const SpecialService = data.SpecialService?data.SpecialService:"-";

  const Food = {
    Foodtype: data.Food?data.Food:"-",
    items: checkBoxValues.foodvalue? checkBoxValues.foodvalue:"-",
  };

  var cancelrequest = false;
  var cancelstatus = "pending";
  var canceled = false
  var refund = 0;

  // var venueStatus = "pending"
  // var cateringStatus = "pending"
  // var shootingStatus = "pending"
  // // var decorationStatus = "pending"
  // var status = "pending"
  // var isVerified = false
  // var foodb = false
  //  var shootingb = true
  //  var venueb = false
  // //  var decorationb = false
  //  if (Food.Foodtype){
  //   foodb = true
  //  }
  //  if(OtherServiceValues.photography){
  //   photographyb= true
  //  }
  //  if(BachelorsParty.venues){
  //   venueb = true
  //  }
  //  if(Decoration.RegularDecoration || Decoration.ThemeDecoration){
  //     decorationb = true
  //  }

  const newPreWeddingForm = PreWeddingForm({

    eventName,
    userId,
    orderId,
    ClientName,
    BrideName,
    GroomName,
    Person,
    BachelorsPartyDate,
    ShootingDate,
    City,
    FromDate,
    ToData,
    date,
    MinBudget,
    MaxBudget,
    BachelorsParty,
    SpecialService,
    Shooting,
    Food,
    cancelrequest,
    cancelstatus,
    canceled,
    refund
    // foodb,
    // shootingb,
    // venueb,
    // // decorationb,
    // shootingStatus,
    // cateringStatus,
    // venueStatus,
    // isVerified,

  });

  console.log("def", req.body.name_Of_The_Event);


  let BachelorsPartyReason;
  let BachelorsPartyStatus;
  let BachelorsPartyPromiseDate;
  let BachelorsPartyService;

  let ShootingReason;
  let ShootingStatus;
  let ShootingPromiseDate;
  let ShootingService;

  let cateringReason;
  let cateringStatus;
  let cateringPromiseDate;
  let cateringService;

  let AdditionalReason;
  let AdditionalStatus;
  let AdditionalPromiseDate;
  let AdditionalService;


  if (data.Venue_1_Name ||
     checkBoxValues.musicvalue ||
     checkBoxValues.dancevalue ||
     data.No_Of_Guests    
    ) {
    BachelorsPartyStatus = "pending";
    BachelorsPartyReason = "-";
    BachelorsPartyPromiseDate = "";
    BachelorsPartyService = "Not Confirmed";
  } else {
    BachelorsPartyStatus = null;
    BachelorsPartyReason = null;
    BachelorsPartyPromiseDate = null;
    BachelorsPartyService = null;
  }
  if (data.shooting || data.destination_Place ) {
    ShootingStatus = "pending";
    ShootingReason = "-";
    ShootingPromiseDate = "";
    ShootingService = "Not Confirmed";
  } else {
    ShootingStatus = null;
    ShootingReason = null;
    ShootingPromiseDate = null;
    ShootingService = null;
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

  const newPreweddingInfo = PreweddingInfo({
    eventName,
    userId,
    orderId,
    AdditionalReason,
    AdditionalStatus,
    AdditionalPromiseDate,
    AdditionalService,

    ShootingReason,
    ShootingStatus,
    ShootingPromiseDate,
    ShootingService,

    BachelorsPartyReason,
    BachelorsPartyStatus,
    BachelorsPartyPromiseDate,
    BachelorsPartyService,
    
    cateringReason,
    cateringStatus,
    cateringPromiseDate,
    cateringService,
   
  });

  newPreweddingInfo.save().then(()=>console.log("successfully event name saved"))




  // const name_Of_The_Event = checkBoxValues.name_Of_The_Event;
  const name_Of_The_Event = req.body.name_Of_The_Event
  console.log(name_Of_The_Event);

  const newEventName = EventName({
    userId,
    name_Of_The_Event,
  });

PreWeddingForm.find({userId:req.id}).then((already)=>{
  if(already.length> 0){
    res.status(200).send("already")
   }
   else{
  newPreWeddingForm.save().then(() => {
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
    orderId,date,
    bachelorParty: 0,
    shooting: 0,
    addtional: 0,
    emergency: 0,
    premium: 0,
  });

  newInvoiceDhoom
    .save()
    .then(() => console.log("successfully invoice saved"));
});

  newEventName.save().then(() => console.log("successfully event name saved"));


});
}

  });
  console.log("completed!! saved");

  console.log(req.body);
});




router.get("/preweddingInfo/:orderIdp", (req, res) => {
  // console.log(req.params.orderIdp);
  PreweddingInfo.find({ orderId: req.params.orderIdp }, (err, doc) => {
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
  PreweddingInfo.findOneAndUpdate(
    { orderId: datass.orderId },
    {
      $set: {
        AdditionalReason: datass.additionalReas,
        AdditionalStatus: datass.additionalstats,
        AdditionalPromiseDate: datass.additionalPromiseDat,
        AdditionalService: datass.additionalConf,

        ShootingReason: datass.shootingReas,
      ShootingStatus: datass.shootingstats,
      ShootingPromiseDate: datass.shootingPromiseDat,
      ShootingService: datass.shootingConf,

        BachelorsPartyReason: datass.bachelorsPartyReas,
        BachelorsPartyStatus: datass.bachelorsPartystats,
        BachelorsPartyPromiseDate: datass.bachelorsPartyPromiseDat,
        BachelorsPartyService: datass.bachelorsPartyConf,

      
        cateringReason: datass.cateringReas,
        cateringStatus: datass.cateringstats,
        cateringPromiseDate: datass.cateringPromiseDat,
        cateringService: datass.cateringConf,
       
       
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
