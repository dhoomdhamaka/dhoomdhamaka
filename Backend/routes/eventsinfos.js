const express = require("express");
const router = express.Router();
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const auth = require("../middleware/auth");
const { EventForm } = require("../model/eventModel");
const { PreWeddingForm,PreweddingInfo } = require("../model/preweddingmodel");
const { EngagementForm ,EngagementInfo} = require("../model/engagementmodel");
const { BirthdayForm ,BirthdayInfo} = require("../model/birthdaymodel");
const { PostWeddingForm ,PostWeddinngInfo} = require("../model/postweddingmodel");
const { CorporateEventForm ,CorporateInfo} = require("../model/corporateEvent");
const { FamilyFunctionForm ,FamilyFunctionInfo} = require("../model/familyFunction");
const { WeddingForm,WeddingInfo } = require("../model/weddingmodel");
const { EventName } = require("../model/eventName");
const { BabyShowerForm ,BabyShowerInfo} = require("../model/babyshowermodel");
const {User} = require("../model/user")
// const {EventName} = require("../model/eventName")
router.get("/prewedding", auth, (req, res) => {
  PreWeddingForm.find({ userId: req.id },(err, doc) => {
    if (doc) {
      res.json(doc)
    }
  })
})

router.get("/babyshower", auth, (req, res) => {
  console.log("req rec eventinfo");
  BabyShowerForm.find({ userId: req.id }, (err, doc) => {
    if (doc) {
      res.json(doc)
    }
  })
})
router.get("/wedding", auth, (req, res) => {
  console.log("req rec eventinfo");
  WeddingForm.find({ userId: req.id }, (err, doc) => {
    if (doc) {
      res.json(doc)
    }
  })
})
router.get("/engagement", auth, (req, res) => {
  console.log("req rec eventinfo");
  EngagementForm.find({ userId: req.id }, (err, doc) => {
    if (doc) {
      res.json(doc)
    }
  })
})
router.get("/postwedding", auth, (req, res) => {
  console.log("req rec eventinfo");
  PostWeddingForm.find({ userId: req.id }, (err, doc) => {
    if (doc) {
      res.json(doc)
    }
  })
})
router.get("/birthday", auth, (req, res) => {
  console.log("req rec eventinfo");
  BirthdayForm.find({ userId: req.id }, (err, doc) => {
    if (doc) {
      res.json(doc)
    }
  })
})
router.get("/corporate", auth, (req, res) => {
  console.log("req rec eventinfo");
  CorporateEventForm.find({ userId: req.id }, (err, doc) => {
    if (doc) {
      res.json(doc)
    }
  })
})
router.get("/familyfunction", auth, (req, res) => {
  console.log("req rec eventinfo");
  FamilyFunctionForm.find({ userId: req.id }, (err, doc) => {
    if (doc) {
      res.json(doc)
    }
  })
})




//points:

//post wedding 
router.get("/postweddingpoints", async  (req, res) => {
  const value = await User.find( { _id: req.id }, { points: 1,voucher:1 } )
  res.status(200).send(value)
  //  console.log("successfully completed!!!");
  })

//pre wedding 
router.get("/preweddingpoints", async  (req, res) => {
  const value = await User.find( { _id: req.id}, { points: 1,voucher:1 } )
  res.status(200).send(value)
  //  console.log("successfully completed!!!");
  })

// wedding
router.get("/weddingpoints", async  (req, res) => {
  const value = await User.find( { _id: req.id}, { points: 1,voucher:1 } )
  res.status(200).send(value)
  //  console.log("successfully completed!!!");
  })

//baby shower
router.get("/babyshowerpoints", async  (req, res) => {
  const value = await User.find( { _id: req.id}, { points: 1,voucher:1 } )
  res.status(200).send(value)
  //  console.log("successfully completed!!!");
  })


//birthday
router.get("/birthdaypoints", async  (req, res) => {
  const value = await User.find( { _id: req.id}, { points: 1,voucher:1 } )
  res.status(200).send(value)
  //  console.log("successfully completed!!!");
  })

// family function
router.get("/familyfunctionpoints", async  (req, res) => {
  const value = await User.find( { _id: req.id}, { points: 1,voucher:1 } )
  res.status(200).send(value)
  //  console.log("successfully completed!!!");
  })

// corporate 

router.get("/corporatepoints", async  (req, res) => {
  const value = await User.find( { _id: req.id}, { points: 1,voucher:1 } )
  res.status(200).send(value)
  //  console.log("successfully completed!!!");
  })

// engagement
router.get("/engagementpoints", async  (req, res) => {
  const value = await User.find( { _id: req.id}, { points: 1,voucher:1 } )
  res.status(200).send(value)
  //  console.log("successfully completed!!!");
  })







  //EVent info

  router.get("/getname", async  (req, res) => {
    const value = await User.find( { _id: req.id}, { username: 1,_id:1 } )
    res.status(200).send(value)
    //  console.log("successfully completed!!!");
    })

  router.get("/getorderId", async  (req, res) => {
    const value = await EventName.find( { userId: req.id}, { userId: 1 } )
    res.status(200).send(value)
    })





// event info 

router.get("/babyshowerInfo/:userId", (req, res) => {
  // console.log(req.params.orderIdp);
  BabyShowerInfo.find({ userId: req.params.userId }, (err, doc) => {
    if (err) {
      console.log(err);
      res.status(400).send(err);
    } else {
      // console.log(doc);
      res.status(200).send(doc);
    }
  });
});


router.get("/birthdayInfo/:userId", (req, res) => {
  // console.log(req.params.orderIdp);
  BirthdayInfo.find({userId: req.params.userId }, (err, doc) => {
    if (err) {
      console.log(err);
      res.status(400).send(err);
    } else {
      // console.log(doc);
      res.status(200).send(doc);
    }
  });
});

router.get("/corporateInfo/:userId", (req, res) => {
  CorporateInfo.find({ userId: req.params.userId }, (err, doc) => {
    if (err) {
      console.log(err);
      res.status(400).send(err);
    } else {
      res.status(200).send(doc);
    }
  });
});

router.get("/engagementInfo/:userId", (req, res) => {
  // console.log(req.params.orderIdp);
  EngagementInfo.find({ userId: req.params.userId }, (err, doc) => {
    if (err) {
      console.log(err);
      res.status(400).send(err);
    } else {
      // console.log(doc);
      res.status(200).send(doc);
    }
  });
});

router.get("/familyfunctionInfo/:userId", (req, res) => {
  FamilyFunctionInfo.find({ userId: req.params.userId }, (err, doc) => {
    if (err) {
      console.log(err);
      res.status(400).send(err);
    } else {
      res.status(200).send(doc);
    }
  });
});

router.get("/preweddingInfo/:userId", (req, res) => {
  PreweddingInfo.find({ userId: req.params.userId }, (err, doc) => {
    if (err) {
      console.log(err);
      res.status(400).send(err);
    } else {
      res.status(200).send(doc);
    }
  });
});

router.get("/weddingInfo/:userId", (req, res) => {
  // console.log(req.params.orderIdp);
  WeddingInfo.find({ userId: req.params.userId }, (err, doc) => {
    if (err) {
      console.log(err);
      res.status(400).send(err);
    } else {
      // console.log(doc);
      res.status(200).send(doc);
    }
  });
});

router.get("/postweddingInfo/:userId", (req, res) => {
  // console.log(req.params.orderIdp);
  PostWeddinngInfo.find({ userId: req.params.userId }, (err, doc) => {
    if (err) {
      console.log(err);
      res.status(400).send(err);
    } else {
      // console.log(doc);
      res.status(200).send(doc);
    }
  });
});





//baby shower

router.post("/babyshowercancel/:userId", (req, res) => {
   BabyShowerForm.findOneAndUpdate({ orderId: req.params.userId },{$set:{"cancelrequest":true}} ,(err, doc) => {
    if (err) {
      console.log(err);
      res.status(400).send(err);
    } else {
      res.status(200).send(doc);
    }
  });
});
router.post("/babydeclined/:userId", (req, res) => {
  BabyShowerForm.findOneAndUpdate({ orderId: req.params.userId },{$set:{"cancelstatus":"Declined"}} ,(err, doc) => {
   if (err) {
     console.log(err);
     res.status(400).send(err);
   } else {
     res.status(200).send(doc);
   }
 });
});

router.post("/babyaccepted/:userId", (req, res) => {
  BabyShowerForm.findOneAndUpdate({ orderId: req.params.userId },
    {$set:{"cancelstatus":"Accepted", "canceled":true}} ,(err, doc) => {
   if (err) {
     console.log(err);
     res.status(400).send(err);
   } else {
     res.status(200).send(doc);
   }
 });
});

router.post("/babyrefund/:userId", (req, res) => {
  const amount = req.body.refundamount
  BabyShowerForm.findOneAndUpdate({ orderId: req.params.userId },{$set:{"refund":amount}} ,(err, doc) => {
   if (err) {
     console.log(err);
     res.status(400).send(err);
   } else {
     res.status(200).send(doc);
   }
 });
});



//birthday


router.post("/birthdaycancel/:userId", (req, res) => {
  BirthdayForm.findOneAndUpdate({ orderId: req.params.userId },{$set:{"cancelrequest":true}} ,(err, doc) => {
   if (err) {
     console.log(err);
     res.status(400).send(err);
   } else {
     res.status(200).send(doc);
   }
 });
});
router.post("/birthdaydeclined/:userId", (req, res) => {
  BirthdayForm.findOneAndUpdate({ orderId: req.params.userId },{$set:{"cancelstatus":"Declined"}} ,(err, doc) => {
  if (err) {
    console.log(err);
    res.status(400).send(err);
  } else {
    res.status(200).send(doc);
  }
});
});

router.post("/birthdayaccepted/:userId", (req, res) => {
  BirthdayForm.findOneAndUpdate({ orderId: req.params.userId },
    {$set:{"cancelstatus":"Accepted" ,"canceled":true}} ,(err, doc) => {
  if (err) {
    console.log(err);
    res.status(400).send(err);
  } else {
    res.status(200).send("hmmm");
  }
});
});

router.post("/birthdayrefund/:userId", (req, res) => {
 const amount = req.body.refundamount
 BirthdayForm.findOneAndUpdate({ orderId: req.params.userId },{$set:{"refund":amount}} ,(err, doc) => {
  if (err) {
    console.log(err);
    res.status(400).send(err);
  } else {
    res.status(200).send(doc);
  }
});
});


//corporate


router.post("/corporatecancel/:userId", (req, res) => {
  CorporateEventForm.findOneAndUpdate({ orderId: req.params.userId },{$set:{"cancelrequest":true}} ,(err, doc) => {
   if (err) {
     console.log(err);
     res.status(400).send(err);
   } else {
     res.status(200).send(doc);
   }
 });
});
router.post("/corporatedeclined/:userId", (req, res) => {
  CorporateEventForm.findOneAndUpdate({ orderId: req.params.userId },{$set:{"cancelstatus":"Declined"}} ,(err, doc) => {
  if (err) {
    console.log(err);
    res.status(400).send(err);
  } else {
    res.status(200).send(doc);
  }
});
});

router.post("/corporateaccepted/:userId", (req, res) => {
  CorporateEventForm.findOneAndUpdate({ orderId: req.params.userId },
    {$set:{"cancelstatus":"Accepted","canceled":true}} ,(err, doc) => {
  if (err) {
    console.log(err);
    res.status(400).send(err);
  } else {
    res.status(200).send(doc);
  }
});
});

router.post("/corporaterefund/:userId", (req, res) => {
 const amount = req.body.refundamount
 CorporateEventForm.findOneAndUpdate({ orderId: req.params.userId },{$set:{"refund":amount}} ,(err, doc) => {
  if (err) {
    console.log(err);
    res.status(400).send(err);
  } else {
    res.status(200).send(doc);
  }
});
});


//engagement

router.post("/engagementcancel/:userId", (req, res) => {
  EngagementForm.findOneAndUpdate({ orderId: req.params.userId },{$set:{"cancelrequest":true}} ,(err, doc) => {
   if (err) {
     console.log(err);
     res.status(400).send(err);
   } else {
     res.status(200).send(doc);
   }
 });
});
router.post("/engagementdeclined/:userId", (req, res) => {
  EngagementForm.findOneAndUpdate({ orderId: req.params.userId },{$set:{"cancelstatus":"Declined"}} ,(err, doc) => {
  if (err) {
    console.log(err);
    res.status(400).send(err);
  } else {
    res.status(200).send(doc);
  }
});
});

router.post("/engagementaccepted/:userId", (req, res) => {
  EngagementForm.findOneAndUpdate({ orderId: req.params.userId },
    {$set:{"cancelstatus":"Accepted","canceled":true}} ,(err, doc) => {
  if (err) {
    console.log(err);
    res.status(400).send(err);
  } else {
    res.status(200).send(doc);
  }
});
});

router.post("/engagementrefund/:userId", (req, res) => {
 const amount = req.body.refundamount
 EngagementForm.findOneAndUpdate({ orderId: req.params.userId },{$set:{"refund":amount}} ,(err, doc) => {
  if (err) {
    console.log(err);
    res.status(400).send(err);
  } else {
    res.status(200).send(doc);
  }
});
});


//family function 

router.post("/familyfunctioncancel/:userId", (req, res) => {
  FamilyFunctionForm.findOneAndUpdate({ orderId: req.params.userId },{$set:{"cancelrequest":true}} ,(err, doc) => {
   if (err) {
     console.log(err);
     res.status(400).send(err);
   } else {
     res.status(200).send(doc);
   }
 });
});
router.post("/familyfunctiondeclined/:userId", (req, res) => {
  FamilyFunctionForm.findOneAndUpdate({ orderId: req.params.userId },{$set:{"cancelstatus":"Declined"}} ,(err, doc) => {
  if (err) {
    console.log(err);
    res.status(400).send(err);
  } else {
    res.status(200).send(doc);
  }
});
});

router.post("/familyfunctionaccepted/:userId", (req, res) => {
  FamilyFunctionForm.findOneAndUpdate({ orderId: req.params.userId },
    {$set:{"cancelstatus":"Accepted","canceled":true}} ,(err, doc) => {
  if (err) {
    console.log(err);
    res.status(400).send(err);
  } else {
    res.status(200).send(doc);
  }
});
});

router.post("/familyfunctionrefund/:userId", (req, res) => {
 const amount = req.body.refundamount
 FamilyFunctionForm.findOneAndUpdate({ orderId: req.params.userId },{$set:{"refund":amount}} ,(err, doc) => {
  if (err) {
    console.log(err);
    res.status(400).send(err);
  } else {
    res.status(200).send(doc);
  }
});
});


//postwedding

router.post("/postweddingcancel/:userId", (req, res) => {
  PostWeddingForm.findOneAndUpdate({ orderId: req.params.userId },
    {$set:{"cancelrequest":true}} ,(err, doc) => {
   if (err) {
     console.log(err);
     res.status(400).send(err);
   } else {
     res.status(200).send(doc);
   }
 });
});
router.post("/postweddingdeclined/:userId", (req, res) => {
  PostWeddingForm.findOneAndUpdate({ orderId: req.params.userId },
    {$set:{"cancelstatus":"Declined"}} ,(err, doc) => {
  if (err) {
    console.log(err);
    res.status(400).send(err);
  } else {
    res.status(200).send(doc);
  }
});
});

router.post("/postweddingaccepted/:userId", (req, res) => {
  PostWeddingForm.findOneAndUpdate({ orderId: req.params.userId },
    {$set:{"cancelstatus":"Accepted","canceled":true}} ,(err, doc) => {
  if (err) {
    console.log(err);
    res.status(400).send(err);
  } else {
    res.status(200).send(doc);
  }
});
});

router.post("/postweddingrefund/:userId", (req, res) => {
 const amount = req.body.refundamount
 PostWeddingForm.findOneAndUpdate({ orderId: req.params.userId },{$set:{"refund":amount}} ,(err, doc) => {
  if (err) {
    console.log(err);
    res.status(400).send(err);
  } else {
    res.status(200).send(doc);
  }
});
});

//pre wedding

router.post("/preweddingcancel/:userId", (req, res) => {
  PreWeddingForm.findOneAndUpdate({ orderId: req.params.userId },{$set:{"cancelrequest":true}} ,(err, doc) => {
   if (err) {
     console.log(err);
     res.status(400).send(err);
   } else {
     res.status(200).send(doc);
   }
 });
});
router.post("/preweddingdeclined/:userId", (req, res) => {
  PreWeddingForm.findOneAndUpdate({ orderId: req.params.userId },{$set:{"cancelstatus":"Declined"}} ,(err, doc) => {
  if (err) {
    console.log(err);
    res.status(400).send(err);
  } else {
    res.status(200).send(doc);
  }
});
});

router.post("/preweddingaccepted/:userId", (req, res) => {
  PreWeddingForm.findOneAndUpdate({ orderId: req.params.userId },
    {$set:{"cancelstatus":"Accepted","canceled":true}} ,(err, doc) => {
  if (err) {
    console.log(err);
    res.status(400).send(err);
  } else {
    res.status(200).send(doc);
  }
});
});

router.post("/preweddingrefund/:userId", (req, res) => {
 const amount = req.body.refundamount
 PreWeddingForm.findOneAndUpdate({ orderId: req.params.userId },{$set:{"refund":amount}} ,(err, doc) => {
  if (err) {
    console.log(err);
    res.status(400).send(err);
  } else {
    res.status(200).send(doc);
  }
});
});


//wedding
router.post("/weddingcancel/:userId", (req, res) => {
  WeddingForm.findOneAndUpdate({ orderId: req.params.userId },{$set:{"cancelrequest":true}} ,(err, doc) => {
   if (err) {
     console.log(err);
     res.status(400).send(err);
   } else {
     res.status(200).send(doc);
   }
 });
});
router.post("/weddingdeclined/:userId", (req, res) => {
  WeddingForm.findOneAndUpdate({ orderId: req.params.userId },{$set:{"cancelstatus":"Declined"}} ,(err, doc) => {
  if (err) {
    console.log(err);
    res.status(400).send(err);
  } else {
    res.status(200).send(doc);
  }
});
});

router.post("/weddingaccepted/:userId", (req, res) => {
  WeddingForm.findOneAndUpdate({ orderId: req.params.userId },
    {$set:{"cancelstatus":"Accepted","canceled":true}} ,(err, doc) => {
  if (err) {
    console.log(err);
    res.status(400).send(err);
  } else {
    res.status(200).send(doc);
  }
});
});

router.post("/weddingrefund/:userId", (req, res) => {
 const amount = req.body.refundamount
 WeddingForm.findOneAndUpdate({ orderId: req.params.userId },{$set:{"refund":amount}} ,(err, doc) => {
  if (err) {
    console.log(err);
    res.status(400).send(err);
  } else {
    res.status(200).send(doc);
  }
});
});




//delete
//babyshower
router.delete("/babydlt/:orderId", (req, res) => {
  BabyShowerInfo.remove({orderId:req.params.orderId},(err, doc) => {
    if (err) {
      console.log(err);
      res.status(400).send(err);
    } 
  });
  BabyShowerForm.remove({ orderId: req.params.orderId } ,(err, doc) => {
   if (err) {
     console.log(err);
     res.status(400).send(err);
   } else {
     res.status(200).send(doc);
   }
 });
 });



 //birthday
 router.delete("/birthdaydlt/:orderId", (req, res) => {
  BirthdayInfo.remove({orderId:req.params.orderId},(err, doc) => {
    if (err) {
      console.log(err);
      res.status(400).send(err);
    } 
  });
  BirthdayForm.remove({ orderId: req.params.orderId } ,(err, doc) => {
   if (err) {
     console.log(err);
     res.status(400).send(err);
   } else {
     res.status(200).send(doc);
   }
 });
 });

//corporate:
router.delete("/corporatedlt/:orderId", (req, res) => {
  CorporateInfo.remove({orderId:req.params.orderId},(err, doc) => {
    if (err) {
      console.log(err);
      res.status(400).send(err);
    } 
  });
  CorporateEventForm.remove({ orderId: req.params.orderId } ,(err, doc) => {
   if (err) {
     console.log(err);
     res.status(400).send(err);
   } else {
     res.status(200).send(doc);
   }
 });
 });

//engagement :

router.delete("/engagementdlt/:orderId", (req, res) => {
  EngagementInfo.remove({orderId:req.params.orderId},(err, doc) => {
    if (err) {
      console.log(err);
      res.status(400).send(err);
    } 
  });
  EngagementForm.remove({ orderId: req.params.orderId } ,(err, doc) => {
   if (err) {
     console.log(err);
     res.status(400).send(err);
   } else {
     res.status(200).send(doc);
   }
 });
 });

//familyfunction 

router.delete("/familyfunctiondlt/:orderId", (req, res) => {
  FamilyFunctionInfo.remove({orderId:req.params.orderId},(err, doc) => {
    if (err) {
      console.log(err);
      res.status(400).send(err);
    } 
  });
  FamilyFunctionForm.remove({ orderId: req.params.orderId } ,(err, doc) => {
   if (err) {
     console.log(err);
     res.status(400).send(err);
   } else {
     res.status(200).send(doc);
   }
 });
 });


//postwedding:

router.delete("/postweddingdlt/:orderId", (req, res) => {
  PostWeddinngInfo.remove({orderId:req.params.orderId},(err, doc) => {
    if (err) {
      console.log(err);
      res.status(400).send(err);
    } 
  });
  PostWeddingForm.remove({ orderId: req.params.orderId } ,(err, doc) => {
   if (err) {
     console.log(err);
     res.status(400).send(err);
   } else {
     res.status(200).send(doc);
   }
 });
 });

//prewedding

router.delete("/preweddingdlt/:orderId", (req, res) => {
  PreweddingInfo.remove({orderId:req.params.orderId},(err, doc) => {
    if (err) {
      console.log(err);
      res.status(400).send(err);
    } 
  });
  PreWeddingForm.remove({ orderId: req.params.orderId } ,(err, doc) => {
   if (err) {
     console.log(err);
     res.status(400).send(err);
   } else {
     res.status(200).send(doc);
   }
 });
 });

//wedding

router.delete("/weddingdlt/:orderId", (req, res) => {
  WeddingInfo.remove({orderId:req.params.orderId},(err, doc) => {
    if (err) {
      console.log(err);
      res.status(400).send(err);
    } 
  });
  WeddingForm.remove({ orderId: req.params.orderId } ,(err, doc) => {
   if (err) {
     console.log(err);
     res.status(400).send(err);
   } else {
     res.status(200).send(doc);
   }
 });
 });






module.exports = router;
