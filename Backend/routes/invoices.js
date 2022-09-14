const express = require("express");
const router = express.Router();
const cors = require("cors");
const bodyParser = require("body-parser");
const config = require("config");
const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const auth = require("../middleware/auth");
const { InvoiceDhoom } = require("../model/invoicemodel");

router.get("/getDetails/:orderId", (req, res) => {
  // console.log(req.params.orderId);
  InvoiceDhoom.find({ orderId: req.params.orderId }, (err, doc) => {
    if (err) {
      console.log(err);
      res.status(400).send(err);
    } else {
      // console.log(doc);
      res.status(200).send(doc);
    }
  });
});

router.get("/getUserOrders",auth,(req,res)=>{
  // console.log(req.id);
  InvoiceDhoom.find({ userId: req.id }, (err, doc) => {
    if (err) {
      console.log(err);
      res.status(400).send(err);
    } else {
      // console.log(doc);
      res.status(200).send(doc);
    }
  });
})

// wedding invoice upadte

router.post("/wed/updateDetails", (req, res) => {
  console.log(req.body.sendUpdInvoice);
  let wedUpd = req.body.sendUpdInvoice;
  InvoiceDhoom.findOneAndUpdate(
    { orderId: req.body.sendUpdInvoice.orderId },
    {
      $set: {
        shows: wedUpd.shows,
        decoration: wedUpd.decoration,
        catering: wedUpd.catering,
        invitaion: wedUpd.invitaion,
        beauty: wedUpd.beauty,
        photography: wedUpd.photography,
        mehandi: wedUpd.mehandi,
        panditJi: wedUpd.panditJi,
        venue: wedUpd.venue,
        weddingType: wedUpd.weddingType,
        hosting: wedUpd.hosting,
        addtional: wedUpd.addtional,
        emergency: wedUpd.emergency,
        premium: wedUpd.premium,
      },
    },
    (err, doc) => {
      if (err) {
        console.log(err);
        res.status(400).send(err);
      } else {
        // console.log(doc);
        res.status(200).send("Succefully Invoice Details Updated");
      }
    }
  );
});

// prewed invoice upadte

router.post("/wed/updateDetails", (req, res) => {
  console.log(req.body.sendUpdInvoice);
  let wedUpd = req.body.sendUpdInvoice;
  InvoiceDhoom.findOneAndUpdate(
    { orderId: req.body.sendUpdInvoice.orderId },
    {
      $set: {
        bachelorParty: wedUpd.bachelorParty,
        shooting: wedUpd.shooting,
        addtional: wedUpd.addtional,
        emergency: wedUpd.emergency,
        premium: wedUpd.premium,
      },
    },
    (err, doc) => {
      if (err) {
        console.log(err);
        res.status(400).send(err);
      } else {
        // console.log(doc);
        res.status(200).send("Succefully Invoice Details Updated");
      }
    }
  );
});

// postwedding invoice upadte

router.post("/postwed/updateDetails", (req, res) => {
  console.log(req.body.sendUpdInvoice);
  let wedUpd = req.body.sendUpdInvoice;
  InvoiceDhoom.findOneAndUpdate(
    { orderId: req.body.sendUpdInvoice.orderId },
    {
      $set: {
        muhDikhai: wedUpd.muhDikhai,
        honeymoon: wedUpd.honeymoon,
        subharambh: wedUpd.subharambh,
        addtional: wedUpd.addtional,
        emergency: wedUpd.emergency,
        premium: wedUpd.premium,
      },
    },
    (err, doc) => {
      if (err) {
        console.log(err);
        res.status(400).send(err);
      } else {
        // console.log(doc);
        res.status(200).send("Succefully Invoice Details Updated");
      }
    }
  );
});

// engagement invoice upadte

router.post("/eng/updateDetails", (req, res) => {
  console.log(req.body.sendUpdInvoice);
  let wedUpd = req.body.sendUpdInvoice;
  InvoiceDhoom.findOneAndUpdate(
    { orderId: req.body.sendUpdInvoice.orderId },
    {
      $set: {
        shows: wedUpd.shows,
        decoration: wedUpd.decoration,
        catering: wedUpd.catering,
        invitaion: wedUpd.invitaion,
        beauty: wedUpd.beauty,
        photography: wedUpd.photography,
        mehandi: wedUpd.mehandi,
        panditJi: wedUpd.panditJi,
        venue: wedUpd.venue,
        hosting: wedUpd.hosting,
        addtional: wedUpd.addtional,
        emergency: wedUpd.emergency,
        premium: wedUpd.premium,
      },
    },
    (err, doc) => {
      if (err) {
        console.log(err);
        res.status(400).send(err);
      } else {
        // console.log(doc);
        res.status(200).send("Succefully Invoice Details Updated");
      }
    }
  );
});

// babyShower invoice upadte

router.post("/bby/updateDetails", (req, res) => {
  console.log(req.body.sendUpdInvoice);
  let wedUpd = req.body.sendUpdInvoice;
  InvoiceDhoom.findOneAndUpdate(
    { orderId: req.body.sendUpdInvoice.orderId },
    {
      $set: {
        shows: wedUpd.shows,
        decoration: wedUpd.decoration,
        catering: wedUpd.catering,
        invitaion: wedUpd.invitaion,
        beauty: wedUpd.beauty,
        photography: wedUpd.photography,
        mehandi: wedUpd.mehandi,
        panditJi: wedUpd.panditJi,
        venue: wedUpd.venue,
        hosting: wedUpd.hosting,
        addtional: wedUpd.addtional,
        emergency: wedUpd.emergency,
        premium: wedUpd.premium,
      },
    },
    (err, doc) => {
      if (err) {
        console.log(err);
        res.status(400).send(err);
      } else {
        // console.log(doc);
        res.status(200).send("Succefully Invoice Details Updated");
      }
    }
  );
});

// family function invoice upadte

router.post("/fam/updateDetails", (req, res) => {
  console.log(req.body.sendUpdInvoice);
  let wedUpd = req.body.sendUpdInvoice;
  InvoiceDhoom.findOneAndUpdate(
    { orderId: req.body.sendUpdInvoice.orderId },
    {
      $set: {
        shows: wedUpd.shows,
        decoration: wedUpd.decoration,
        catering: wedUpd.catering,
        invitaion: wedUpd.invitaion,
        beauty: wedUpd.beauty,
        photography: wedUpd.photography,
        mehandi: wedUpd.mehandi,
        panditJi: wedUpd.panditJi,
        venue: wedUpd.venue,
        hosting: wedUpd.hosting,
        addtional: wedUpd.addtional,
        emergency: wedUpd.emergency,
        premium: wedUpd.premium,
      },
    },
    (err, doc) => {
      if (err) {
        console.log(err);
        res.status(400).send(err);
      } else {
        // console.log(doc);
        res.status(200).send("Succefully Invoice Details Updated");
      }
    }
  );
});

// corp invoice upadte

router.post("/corp/updateDetails", (req, res) => {
  console.log(req.body.sendUpdInvoice);
  let wedUpd = req.body.sendUpdInvoice;
  InvoiceDhoom.findOneAndUpdate(
    { orderId: req.body.sendUpdInvoice.orderId },
    {
      $set: {
        shows: wedUpd.shows,
        decoration: wedUpd.decoration,
        catering: wedUpd.catering,
        invitaion: wedUpd.invitaion,
        photography: wedUpd.photography,
        venue: wedUpd.venue,
        hosting: wedUpd.hosting,
        addtional: wedUpd.addtional,
        emergency: wedUpd.emergency,
        premium: wedUpd.premium,
      },
    },
    (err, doc) => {
      if (err) {
        console.log(err);
        res.status(400).send(err);
      } else {
        // console.log(doc);
        res.status(200).send("Succefully Invoice Details Updated");
      }
    }
  );
});

// birday invoice upadte

router.post("/bdy/updateDetails", (req, res) => {
  console.log(req.body.sendUpdInvoice);
  let wedUpd = req.body.sendUpdInvoice;
  InvoiceDhoom.findOneAndUpdate(
    { orderId: req.body.sendUpdInvoice.orderId },
    {
      $set: {
        shows: wedUpd.shows,
        decoration: wedUpd.decoration,
        catering: wedUpd.catering,
        invitaion: wedUpd.invitaion,
        beauty: wedUpd.beauty,
        photography: wedUpd.photography,
        venue: wedUpd.venue,
        addtional: wedUpd.addtional,
        emergency: wedUpd.emergency,
        premium: wedUpd.premium,
      },
    },
    (err, doc) => {
      if (err) {
        console.log(err);
        res.status(400).send(err);
      } else {
        // console.log(doc);
        res.status(200).send("Succefully Invoice Details Updated");
      }
    }
  );
});
module.exports = router;