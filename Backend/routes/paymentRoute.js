const express = require("express");
const router = express.Router();
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
const Razorpay = require("razorpay");
const auth = require("../middleware/auth");
const dotenv = require("dotenv");
const { PaymentfullDhoom } = require("../model/paymentfullmodel");
dotenv.config();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

router.get("/details", (req, res) => {
  res.status(200).send("req receiveds");
});

router.get("/getPaymentLists", auth, (req, res) => {
  PaymentfullDhoom.find({ userId: req.id }, (err, doc) => {
    if (err) {
      res.status(400).send(err);
    } else {
      res.status(200).send(doc);
    }
  });
});

router.get("/getByOrderId/:orderIdIn", (req,res)=>{
  console.log(req.params.orderIdIn);
  PaymentfullDhoom.find({ orderId: req.params.orderIdIn }, (err, doc) => {
    if (err) {
      res.status(400).send(err);
    } else {
      console.log(doc);
      res.status(200).send(doc);
    }
  });
})

router.get("/get-razorpay-key", (req, res) => {
  res.send({ key: process.env.RAZORPAY_KEY_ID });
});

router.post("/create-order", async (req, res) => {
  // console.log(req.body.orderId);
  // console.log(process.env.RAZORPAY_KEY_ID);

  try {
    const instance = new Razorpay({
      key_id: process.env.RAZORPAY_KEY_ID,
      key_secret: process.env.RAZORPAY_SECRET,
    });
    const options = {
      amount: req.body.amount,
      currency: "INR",
    };
    const order = await instance.orders.create(options);
    if (!order) return res.status(500).send("Some error occured");
    res.send(order);
    // console.log(order);
  } catch (error) {
    res.status(500).send(error);
    // console.log(error);
  }
});

router.post("/pay-order", async (req, res) => {
  
  try {
  
    const {
      orderId,
      amount,
      razorpayPaymentId,
      // razorpayOrderId,
      razorpaySignature,
      description,
    } = req.body;

    if (description === "Booking Charge") {
      PaymentfullDhoom.updateMany(
        { orderId: orderId },
        {
          $set: {
          booking: {
              booking_Amount: amount,
              booking_paymentId: razorpayPaymentId,
              booking_signature: razorpaySignature,
              booking_isPaid: true,
            },
          },
        },
        (err, doc) => {
          if (err) {
            // console.log(err);
            // res.status(400).send(err);
          } else {
            // console.log(doc);
            res.status(200).send("payment Success");
          }
        }
      );
    } else if (description === "Confirmation Charge") {
      // console.log("ok2");
      PaymentfullDhoom.findOneAndUpdate(
        { orderId: orderId },
        {
          $set: {
            confirmation: {
              confirmation_isPaid: true,
              confirmation_Amount: amount,
              confirmation_paymentId: razorpayPaymentId,
              // confirmation_orderId: razorpayOrderId,
              confirmation_signature: razorpaySignature,
            },
          },
        },
        (err, doc) => {
          if (err) {
            // console.log(err);
            // res.status(400).send(err);
          } else {
            // console.log("ccdoc);
            res.status(200).send("payment Success");
          }
        }
      );
    } else if (description === "Pending Charge") {
      // console.log("ok3");
      PaymentfullDhoom.findOneAndUpdate(
        { orderId: orderId },
        {
          $set: {
            pending: {

            pending_isPaid: true,
            pending_Amount: amount,
            pending_paymentId: razorpayPaymentId,
            // pending_orderId: razorpayOrderId,
            pending_signature: razorpaySignature,
            }
          },
        },
        (err, doc) => {
          if (err) {
            // console.log(err);
            // res.status(400).send(err);
          } else {
            // console.log("ff",doc);
            res.status(200).send("payment Success");
          }
        },
      );
    } else {
      // res.status(400).send("something went wrong")
    }

    
  } catch (error) {
    // console.log(error);
    res.status(500).send(error);
  }
});

module.exports = router;