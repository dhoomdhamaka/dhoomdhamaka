const express = require("express");
const router = express.Router();
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
const { v4: uuidv4 } = require("uuid");
app.use(cors());
app.use(express.static("files"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const { EventForm } = require("../model/eventModel");
const auth = require("../middleware/auth");
const { EventName } = require("../model/eventName");
const { PaymentfullDhoom } = require("../model/paymentfullmodel");
const { InvoiceDhoom } = require("../model/invoicemodel");
const {
  PostWeddingForm,
  PostWeddinngInfo,
} = require("../model/postweddingmodel");
router.post("/", auth, async (req, res) => {
  const data = req.body.data;
  const checkBoxValues = req.body.checkBoxValues;

  const eventName = "PostWedding Event";
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
  const NoOfGuests = req.body.data.No_Of_Guests;

  const muhDikhal = data.muh_Dikhal ? data.muh_Dikhal : "-";
  const muhDikhalvalue = {
    musicvalues: checkBoxValues.musicvalue ? checkBoxValues.musicvalue : "-",
    dancevalues: checkBoxValues.dancevalue ? checkBoxValues.dancevalue : "-",
  };
  const SubaarambhYatra = data.subaarambh_Yatra ? data.subaarambh_Yatra : "-";
  const Honneymoon = {
    DestinationIndia: data.destination_India ? data.destination_India : "-",
    DestinationAbroad: data.destination_Abroad ? data.destination_Abroad : "-",
    HonneymoonDays: data.no_of_days_honneymoon
      ? data.no_of_days_honneymoon
      : "-",
  };
  const SpecialService = data.SpecialService ? data.SpecialService : "-";

  const Food = {
    Foodtype: data.Food ? data.Food : "-",
    items: checkBoxValues.foodvalue ? checkBoxValues.foodvalue : "-",
  };

  var cateringStatus = "pending";
  // var honeymoonStatus = "pending";
  var isVerified = false;
  var foodb = false;
  var Honneymoonb = false;
  if (Food.Foodtype) {
    foodb = true;
  }
  if (
    Honneymoon.DestinationIndia.length > 1 ||
    Honneymoon.DestinationAbroad.length > 1
  ) {
    Honneymoonb = true;
  }

  let muh_DikhaiReason;
  let muh_DikhaiPromiseDate;
  let muh_Dikhaistatus;
  let muh_DikhaiConfirmation;

  if (muhDikhal[0] != undefined) {
    if (muhDikhal[0].length > 1) {
      (muh_DikhaiReason = "-"), (muh_DikhaiConfirmation = "Not Confirmed");
      (muh_Dikhaistatus = "pending"), (muh_DikhaiPromiseDate = "");
    }
  } else {
    (muh_DikhaiReason = null), (muh_DikhaiConfirmation = null);
    (muh_Dikhaistatus = null), (muh_DikhaiPromiseDate = null);
  }
  let honeymoonReason;
  let honeymoonConfirmation;
  let honeymoonstatus;
  let honeymoonPromiseDate;

  if (
    Honneymoon.DestinationIndia.length > 1 ||
    Honneymoon.DestinationAbroad.length > 1
  ) {
    (honeymoonReason = "-"), (honeymoonConfirmation = "Not Confirmed");
    (honeymoonstatus = "pending"), (honeymoonPromiseDate = "");
  } else {
    (honeymoonReason = null), (honeymoonConfirmation = null);
    (honeymoonstatus = null), (honeymoonPromiseDate = null);
  }

  let subaarambhYatraReason;
  let subaarambhYatraConfirmation;
  let subaarambhYatrastatus;
  let subaarambhYatraPromiseDate;

  if (SubaarambhYatra[0] != undefined) {
    if (SubaarambhYatra[0].length > 1) {
      (subaarambhYatraReason = "-"), (subaarambhYatraConfirmation = "Not Confirmed");
      (subaarambhYatrastatus = "pending"), (subaarambhYatraPromiseDate = "");
    }
  } else {
    (subaarambhYatraReason = null), (subaarambhYatraConfirmation = null);
    (subaarambhYatrastatus = null), (subaarambhYatraPromiseDate = null);
  }

  let AdditionalReason;
  let AdditionalStatus;
  let AdditionalPromiseDate;
  let AdditionalService;
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
  var cancelrequest = false;
  var cancelstatus = "pending";
  var canceled = false
  var refund = 0;

  const newPostWeddingForm = PostWeddingForm({
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
    muhDikhal,
    muhDikhalvalue,
    SubaarambhYatra,
    Honneymoon,
    SpecialService,
    Food,
    foodb,
    Honneymoonb,
    cancelrequest,
    cancelstatus,
    canceled,
    refund,
    // honeymoonStatus,
    cateringStatus,

    isVerified,
  });

  const name_Of_The_Event = checkBoxValues.name_Of_The_Event;

  const newPostWeddingInfo = PostWeddinngInfo({
    userId,
    eventName,
    orderId,
    honeymoonReason,
    honeymoonConfirmation,
    honeymoonstatus,
    honeymoonPromiseDate,
    subaarambhYatraReason,
    subaarambhYatraConfirmation,
    subaarambhYatrastatus,
    subaarambhYatraPromiseDate,
    muh_DikhaiReason,
    muh_DikhaiPromiseDate,
    muh_Dikhaistatus,
    muh_DikhaiConfirmation,
    AdditionalReason,
    AdditionalStatus,
    AdditionalPromiseDate,
    AdditionalService,
  });

  const newEventName = EventName({
    userId,
    name_Of_The_Event,
  });

 
PostWeddingForm.find({userId:req.id}).then((already)=>{
  if(already.length> 0){
    res.status(200).send("already")
   }
   else{
  newPostWeddingForm.save().then(() => {
    // console.log(fffs);
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
    catering: 0,
    muhDikhai: 0,
    subharambh: 0,
    honeymoon: 0,
    addtional: 0,
    emergency: 0,
    premium: 0,
  });

  newInvoiceDhoom
    .save()
    .then(() => console.log("successfully invoice saved"));
});

  newPostWeddingInfo.save().then(() => console.log("saved..."));

  newEventName.save().then(() => console.log("successfully event name saved"));

});
}

  });

});

router.get("/postweddingInfo/:orderIdp", (req, res) => {
  // console.log(req.params.orderIdp);
  PostWeddinngInfo.find({ orderId: req.params.orderIdp }, (err, doc) => {
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
  PostWeddinngInfo.findOneAndUpdate(
    { orderId: datass.orderId },
    {
      $set: {
        honeymoonstatus: datass.honeymoonstats,
        honeymoonConfirmation: datass.honeymoonConf,
        honeymoonPromiseDate: datass.honeymoonPromiseDat,
        honeymoonReason: datass.honeymoonReas,
        muh_DikhaiConfirmation: datass.muh_DikhaiConf,
        muh_DikhaiPromiseDate: datass.muh_DikhaiPromiseDat,
        muh_Dikhaistatus: datass.muh_Dikhaistats,
        muh_DikhaiReason: datass.muh_DikhaiReas,
        subaarambhYatraConfirmation: datass.subaarambhYatraConf,
        subaarambhYatraPromiseDate: datass.subaarambhYatraPromiseDat,
        subaarambhYatraReason: datass.subaarambhYatraReas,
        subaarambhYatrastatus: datass.subaarambhYatrastats,
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
