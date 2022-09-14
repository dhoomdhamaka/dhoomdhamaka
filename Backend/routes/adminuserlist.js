const express = require("express");
const router = express.Router();
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
const {adminauth} = require("./adminauth")
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const {User} = require("../model/user")
const {BirthdayForm} = require("../model/birthdaymodel")
const {EngagementForm} = require("../model/engagementmodel")
const {PreWeddingForm} = require("../model/preweddingmodel")
const {PostWeddingForm} = require("../model/postweddingmodel")
const {WeddingForm} = require("../model/weddingmodel")
const {BabyShowerForm} = require("../model/babyshowermodel")
const {FamilyFunctionForm} = require("../model/familyFunction")
const {CorporateEventForm} = require("../model/corporateEvent")

// const {User} = require("../model/user")
async function gettingdata(res,formdata){
  var list = []
  await Promise.all(formdata.map(async (user)=>{
    var users = await User.find({_id:user.userId})
    list.push([users[0],user.orderId, user.createdAt])
  
  }))
  res.status(200).send(list)
  
}

//birthday
router.get("/birthdayorder", async (req, res) => {
const formdata = await BirthdayForm.aggregate([
    { $project :{userId:1, orderId:1,createdAt :1} }
  ])
 await  gettingdata(res,formdata)
  
})

//engagement
router.get("/engagementorder", async (req, res) => {
  const formdata = await EngagementForm.aggregate([
      { $project :{userId:1, orderId:1,createdAt :1} }
    ])
   await  gettingdata(res,formdata)
    
  })

//pre wedding
router.get("/preweddingorder", async (req, res) => {
    const formdata = await PreWeddingForm.aggregate([
        { $project :{userId:1, orderId:1,createdAt :1} }
      ])
      await gettingdata(res,formdata)
      
    })

//post wedding
router.get("/postweddingorder", async (req, res) => {
      const formdata = await PostWeddingForm.aggregate([
          { $project :{userId:1, orderId:1,createdAt :1} }
        ])
        await gettingdata(res,formdata)
        
 })

//wedding
router.get("/weddingorder", async (req, res) => {
  const formdata = await WeddingForm.aggregate([
      { $project :{userId:1, orderId:1,createdAt :1} }
    ])
    await gettingdata(res,formdata)
    
})

//Baby shower
router.get("/babyshowerorder", async (req, res) => {
  const formdata = await BabyShowerForm.aggregate([
      { $project :{userId:1, orderId:1,createdAt :1} }
    ])
    await gettingdata(res,formdata)
    
})

//Corporate
router.get("/corporateorder", async (req, res) => {
  const formdata = await CorporateEventForm.aggregate([
      { $project :{userId:1, orderId:1,createdAt :1} }
    ])
    await gettingdata(res,formdata)
    
})

//afmily function
router.get("/familyfunctionorder", async (req, res) => {
  const formdata = await FamilyFunctionForm.aggregate([
      { $project :{userId:1, orderId:1,createdAt :1} }
    ])
    await gettingdata(res,formdata)
    
})

router.get("/", async (req, res) => {
//    const users = await User.find()
//    console.log(users);
const users = await User.aggregate([
    { $project :{username:1 ,email :1,phone:1} }
  ])
  res.status(200).send(users)

})

//lists

router.get("/birthdayorder/orderId/:orderId", async (req, res) => {
  const formdata = await BirthdayForm.find({orderId:req.params.orderId})
  res.status(200).send(formdata)
  console.log(formdata);
    
})

router.get("/engagementorder/orderId/:orderId", async (req, res) => {
  const formdata = await EngagementForm.find({orderId:req.params.orderId})
  res.status(200).send(formdata)
  console.log("engagement",formdata);
    
})

router.get("/preweddingorder/orderId/:orderId", async (req, res) => {
  const formdata = await PreWeddingForm.find({orderId:req.params.orderId})
  res.status(200).send(formdata)
  console.log(formdata);
    
})

router.get("/postweddingorder/orderId/:orderId", async (req, res) => {
  const formdata = await PostWeddingForm.find({orderId:req.params.orderId})
  res.status(200).send(formdata)
  console.log(formdata);
    
})

router.get("/weddingorder/orderId/:orderId", async (req, res) => {
  const formdata = await WeddingForm.find({orderId:req.params.orderId})
  res.status(200).send(formdata)
  console.log(formdata);
    
})

router.get("/babyshowerorder/orderId/:orderId", async (req, res) => {
  const formdata = await BabyShowerForm.find({orderId:req.params.orderId})
  res.status(200).send(formdata)
  console.log(formdata);
    
})

router.get("/corporateorder/orderId/:orderId", async (req, res) => {
  const formdata = await CorporateEventForm.find({orderId:req.params.orderId})
  res.status(200).send(formdata)
  console.log(formdata);
    
})

router.get("/familyfunctionorder/orderId/:orderId", async (req, res) => {
  const formdata = await FamilyFunctionForm.find({orderId:req.params.orderId})
  res.status(200).send(formdata)
  console.log(formdata);
    
})


//change birthday statuus
router.post("/babyshowerchangevenue/:orderId", async (req, res) => {
  await BabyShowerForm.findOneAndUpdate({orderId:req.params.orderId}, {$set: {venueStatus: "Completed"}})
  res.status(200).send("successfully completed!!!")
  // console.log("successfully completed!!!");
    
})
router.post("/babyshowerchangedecoration/:orderId", async (req, res) => {
  await BabyShowerForm.findOneAndUpdate({orderId:req.params.orderId}, {$set: {decorationStatus: "Completed"}})
  res.status(200).send("successfully completed!!!")
  // console.log("successfully completed!!!");
    
})
router.post("/babyshowerchangephotography/:orderId", async (req, res) => {
 await BabyShowerForm.findOneAndUpdate({orderId:req.params.orderId}, {$set: {photographyStatus: "Completed"}})
  res.status(200).send("successfully completed!!!")
  // console.log("successfully completed!!!");
    
})
router.post("/babyshowerchangecatering/:orderId", async (req, res) => {
  await BabyShowerForm.findOneAndUpdate({orderId:req.params.orderId}, {$set: {cateringStatus: "Completed"}})
  res.status(200).send("successfully completed!!!")
  // console.log("successfully completed!!!");
    
})

router.post("/babyshowerchangevenue/:orderId", async (req, res) => {
  const formdata = await BabyShowerForm.findOneAndUpdate({orderId:req.params.orderId}, {$set: {venueStatus: "Completed"}})
  res.status(200).send("successfully completed!!!")
  // console.log("successfully completed!!!");
    
})


//


//change birthday status

router.post("/birthdaychangevenue/:orderId", async (req, res) => {
  await BirthdayForm.findOneAndUpdate({orderId:req.params.orderId}, {$set: {venueStatus: "Completed"}})
  res.status(200).send("successfully completed!!!")
  // console.log("successfully completed!!!");
    
})
router.post("/birthdaychangedecoration/:orderId", async (req, res) => {
 await BirthdayForm.findOneAndUpdate({orderId:req.params.orderId}, {$set: {decorationStatus: "Completed"}})
  res.status(200).send("successfully completed!!!")
  // console.log("successfully completed!!!");
    
})
router.post("/birthdaychangephotography/:orderId", async (req, res) => {
  await BirthdayForm.findOneAndUpdate({orderId:req.params.orderId}, {$set: {photographyStatus: "Completed"}})
  res.status(200).send("successfully completed!!!")
  // console.log("successfully completed!!!");
    
})
router.post("/birthdaychangecatering/:orderId", async (req, res) => {
  await BirthdayForm.findOneAndUpdate({orderId:req.params.orderId}, {$set: {cateringStatus: "Completed"}})
  res.status(200).send("successfully completed!!!")
  // console.log("successfully completed!!!");
    
})

//

//change corporate status


router.post("/corporatechangevenue/:orderId", async (req, res) => {
  await CorporateEventForm.findOneAndUpdate({orderId:req.params.orderId}, {$set: {venueStatus: "Completed"}})
  res.status(200).send("successfully completed!!!")
  // console.log("successfully completed!!!");
    
})
router.post("/corporatechangedecoration/:orderId", async (req, res) => {
  await CorporateEventForm.findOneAndUpdate({orderId:req.params.orderId}, {$set: {decorationStatus: "Completed"}})
  res.status(200).send("successfully completed!!!")
  // console.log("successfully completed!!!");
    
})
router.post("/corporatechangephotography/:orderId", async (req, res) => {
  await CorporateEventForm.findOneAndUpdate({orderId:req.params.orderId}, {$set: {photographyStatus: "Completed"}})
  res.status(200).send("successfully completed!!!")
  // console.log("successfully completed!!!");
    
})
router.post("/corporatechangecatering/:orderId", async (req, res) => {
 await CorporateEventForm.findOneAndUpdate({orderId:req.params.orderId}, {$set: {cateringStatus: "Completed"}})
  res.status(200).send("successfully completed!!!")
  // console.log("successfully completed!!!");
    
})

//


// change family status





router.post("/familyfunctionchangevenue/:orderId", async (req, res) => {
   await FamilyFunctionForm.findOneAndUpdate({orderId:req.params.orderId}, {$set: {venueStatus: "Completed"}})
  res.status(200).send("successfully completed!!!")
  console.log("success");
    
})
router.post("/familyfunctionchangedecoration/:orderId", async (req, res) => {
  await FamilyFunctionForm.findOneAndUpdate({orderId:req.params.orderId}, {$set: {decorationStatus: "Completed"}})
  res.status(200).send("successfully completed!!!")
  // console.log("successfully completed!!!");
    
})
router.post("/familyfunctionchangephotography/:orderId", async (req, res) => {
  await FamilyFunctionForm.findOneAndUpdate({orderId:req.params.orderId}, {$set: {photographyStatus: "Completed"}})
  res.status(200).send("successfully completed!!!")
  // console.log("successfully completed!!!");
    
})
router.post("/familyfunctionchangecatering/:orderId", async (req, res) => {
  await FamilyFunctionForm.findOneAndUpdate({orderId:req.params.orderId}, {$set: {cateringStatus: "Completed"}})
  res.status(200).send("successfully completed!!!")
  // console.log("successfully completed!!!");
    
})

//

// change wedding status

router.post("/weddingchangevenue/:orderId", async (req, res) => {
  await WeddingForm.findOneAndUpdate({orderId:req.params.orderId}, {$set: {venueStatus: "Completed"}})
 res.status(200).send("successfully completed!!!")
 console.log("success");
   
})
router.post("/weddingchangedecoration/:orderId", async (req, res) => {
 await WeddingForm.findOneAndUpdate({orderId:req.params.orderId}, {$set: {decorationStatus: "Completed"}})
 res.status(200).send("successfully completed!!!")
//  console.log("successfully completed!!!");
   
})
router.post("/weddingchangephotography/:orderId", async (req, res) => {
 await WeddingForm.findOneAndUpdate({orderId:req.params.orderId}, {$set: {photographyStatus: "Completed"}})
 res.status(200).send("successfully completed!!!")
//  console.log("successfully completed!!!");
   
})
router.post("/weddingchangecatering/:orderId", async (req, res) => {
 await WeddingForm.findOneAndUpdate({orderId:req.params.orderId}, {$set: {cateringStatus: "Completed"}})
 res.status(200).send("successfully completed!!!")
//  console.log("successfully completed!!!");
   
})
//


// change engagement status

router.post("/engagementchangevenue/:orderId", async (req, res) => {
  await EngagementForm.findOneAndUpdate({orderId:req.params.orderId}, {$set: {venueStatus: "Completed"}})
 res.status(200).send("successfully completed!!!")
 console.log("success");
   
})
router.post("/engagementchangedecoration/:orderId", async (req, res) => {
 await EngagementForm.findOneAndUpdate({orderId:req.params.orderId}, {$set: {decorationStatus: "Completed"}})
 res.status(200).send("successfully completed!!!")
//  console.log("successfully completed!!!");
   
})
router.post("/engagementchangephotography/:orderId", async (req, res) => {
 await EngagementForm.findOneAndUpdate({orderId:req.params.orderId}, {$set: {photographyStatus: "Completed"}})
 res.status(200).send("successfully completed!!!")
//  console.log("successfully completed!!!");
   
})
router.post("/engagementchangecatering/:orderId", async (req, res) => {
 await EngagementForm.findOneAndUpdate({orderId:req.params.orderId}, {$set: {cateringStatus: "Completed"}})
 res.status(200).send("successfully completed!!!")
//  console.log("successfully completed!!!");
   
})

//

// change prewedding status

router.post("/preweddingchangevenue/:orderId", async (req, res) => {
  await PreWeddingForm.findOneAndUpdate({orderId:req.params.orderId}, {$set: {venueStatus: "Completed"}})
  res.status(200).send("successfully completed!!!")
  // console.log("successfully completed!!!");
    
 })
 router.post("/preweddingchangecatering/:orderId", async (req, res) => {
  await PreWeddingForm.findOneAndUpdate({orderId:req.params.orderId}, {$set: {cateringStatus: "Completed"}})
  res.status(200).send("successfully completed!!!")
  // console.log("successfully completed!!!");
    
 })
//


// change post wedding status

router.post("/postweddingchangehonneymoon/:orderId", async (req, res) => {
  await PostWeddingForm.findOneAndUpdate({orderId:req.params.orderId}, {$set: {honeymoonStatus: "Completed"}})
  res.status(200).send("successfully completed!!!")
  // console.log("successfully completed!!!");
    
 })
 router.post("/postweddingchangecatering/:orderId", async (req, res) => {
  await PostWeddingForm.findOneAndUpdate({orderId:req.params.orderId}, {$set: {cateringStatus: "Completed"}})
  res.status(200).send("successfully completed!!!")
  // console.log("successfully completed!!!");
    
 })
//




//points and vouchers
//post wedding
//points
router.post("/postweddingpoints/:userId", async (req, res) => {
  const point = req.body.val
  if(point === 0){
    User.findOneAndUpdate({_id:req.params.userId}, {$set: {"points": point}},(err,doc)=>{
      if(!doc){
        console.log(err);
      }else{
        res.status(200).send("successfully completed!!!")
      }
    })
  }else{
    User.findOneAndUpdate({_id:req.params.userId}, {$inc: {"points": point}},(err,doc)=>{
      if(!doc){
        console.log(err);
      }else{
        res.status(200).send("successfully completed!!!")
      }
    })
  }
  // console.log("successfully completed!!!");
 })
 //voucher
router.post("/postweddingvoucher/:userId", async (req, res) => {
  const voucher = req.body.val
  if(voucher === 0){
    User.findOneAndUpdate({_id:req.params.userId}, {$set: {"voucher": voucher}},(err,doc)=>{
      if(!doc){
        console.log(err);
      }else{
        res.status(200).send("successfully completed!!!")
      }
    })
  }else{
    User.findOneAndUpdate({_id:req.params.userId}, {$inc: {"voucher": voucher}},(err,doc)=>{
      if(!doc){
        console.log(err);
      }else{
        res.status(200).send("successfully completed!!!")
      }
    })
  }
  // console.log("successfully completed!!!");
 })




//prewedding
//points
router.post("/preweddingpoints/:userId", async (req, res) => {
  const point = req.body.val
  if(point === 0){
    User.findOneAndUpdate({_id:req.params.userId}, {$set: {"points": point}},(err,doc)=>{
      if(!doc){
        console.log(err);
      }else{
        res.status(200).send("successfully completed!!!")
      }
    })
  }else{
    User.findOneAndUpdate({_id:req.params.userId}, {$inc: {"points": point}},(err,doc)=>{
      if(!doc){
        console.log(err);
      }else{
        res.status(200).send("successfully completed!!!")
      }
    })
  }
  // console.log("successfully completed!!!");
 })
//voucher
router.post("/preweddingvoucher/:userId", async (req, res) => {
  const voucher = req.body.val
  if(voucher === 0){
    User.findOneAndUpdate({_id:req.params.userId}, {$set: {"voucher": voucher}},(err,doc)=>{
      if(!doc){
        console.log(err);
      }else{
        res.status(200).send("successfully completed!!!")
      }
    })
  }else{
    User.findOneAndUpdate({_id:req.params.userId}, {$inc: {"voucher": voucher}},(err,doc)=>{
      if(!doc){
        console.log(err);
      }else{
        res.status(200).send("successfully completed!!!")
      }
    })
  }
  // console.log("successfully completed!!!");
 })





//engagement
//points
router.post("/engagementpoints/:userId", async (req, res) => {
  const point = req.body.val
  if(point === 0){
    User.findOneAndUpdate({_id:req.params.userId}, {$set: {"points": point}},(err,doc)=>{
      if(!doc){
        console.log(err);
      }else{
        res.status(200).send("successfully completed!!!")
      }
    })
  }else{
    User.findOneAndUpdate({_id:req.params.userId}, {$inc: {"points": point}},(err,doc)=>{
      if(!doc){
        console.log(err);
      }else{
        res.status(200).send("successfully completed!!!")
      }
    })
  }
  // console.log("successfully completed!!!");
 })

//voucher
router.post("/engagementvoucher/:userId", async (req, res) => {
  const voucher = req.body.val
  if(voucher === 0){
    User.findOneAndUpdate({_id:req.params.userId}, {$set: {"voucher": voucher}},(err,doc)=>{
      if(!doc){
        console.log(err);
      }else{
        res.status(200).send("successfully completed!!!")
      }
    })
  }else{
    User.findOneAndUpdate({_id:req.params.userId}, {$inc: {"voucher": voucher}},(err,doc)=>{
      if(!doc){
        console.log(err);
      }else{
        res.status(200).send("successfully completed!!!")
      }
    })
  }
  // console.log("successfully completed!!!");
 })





//wedding
//points
router.post("/weddingpoints/:userId", async (req, res) => {
  const point = req.body.val
  if(point === 0){
    User.findOneAndUpdate({_id:req.params.userId}, {$set: {"points": point}},(err,doc)=>{
      if(!doc){
        console.log(err);
      }else{
        res.status(200).send("successfully completed!!!")
      }
    })
  }else{
    User.findOneAndUpdate({_id:req.params.userId}, {$inc: {"points": point}},(err,doc)=>{
      if(!doc){
        console.log(err);
      }else{
        res.status(200).send("successfully completed!!!")
      }
    })
  }
  // console.log("successfully completed!!!");
 })
 //voucher
 router.post("/weddingvoucher/:userId", async (req, res) => {
  const voucher = req.body.val
  if(voucher === 0){
    User.findOneAndUpdate({_id:req.params.userId}, {$set: {"voucher": voucher}},(err,doc)=>{
      if(!doc){
        console.log(err);
      }else{
        res.status(200).send("successfully completed!!!")
      }
    })
  }else{
    User.findOneAndUpdate({_id:req.params.userId}, {$inc: {"voucher": voucher}},(err,doc)=>{
      if(!doc){
        console.log(err);
      }else{
        res.status(200).send("successfully completed!!!")
      }
    })
  }
  // console.log("successfully completed!!!");
 })




//babyshower
router.post("/babyshowerpoints/:userId", async (req, res) => {
  const point = req.body.val
  if(point === 0){
    User.findOneAndUpdate({_id:req.params.userId}, {$set: {"points": point}},(err,doc)=>{
      if(!doc){
        console.log(err);
      }else{
        res.status(200).send("successfully completed!!!")
      }
    })
  }else{
    User.findOneAndUpdate({_id:req.params.userId}, {$inc: {"points": point}},(err,doc)=>{
      if(!doc){
        console.log(err);
      }else{
        res.status(200).send("successfully completed!!!")
      }
    })
  }
  // console.log("successfully completed!!!");
 })

//voucher
 router.post("/babyshowervoucher/:userId", async (req, res) => {
  const voucher = req.body.val
  if(voucher === 0){
    User.findOneAndUpdate({_id:req.params.userId}, {$set: {"voucher": voucher}},(err,doc)=>{
      if(!doc){
        console.log(err);
      }else{
        res.status(200).send("successfully completed!!!")
      }
    })
  }else{
    User.findOneAndUpdate({_id:req.params.userId}, {$inc: {"voucher": voucher}},(err,doc)=>{
      if(!doc){
        console.log(err);
      }else{
        res.status(200).send("successfully completed!!!")
      }
    })
  }
  // console.log("successfully completed!!!");
 })



 //family function

//points
 router.post("/familyfunctionpoints/:userId", async (req, res) => {
  const point = req.body.val
  if(point === 0){
    User.findOneAndUpdate({_id:req.params.userId}, {$set: {"points": point}},(err,doc)=>{
      if(!doc){
        console.log(err);
      }else{
        res.status(200).send("successfully completed!!!")
      }
    })
  }else{
    User.findOneAndUpdate({_id:req.params.userId}, {$inc: {"points": point}},(err,doc)=>{
      if(!doc){
        console.log(err);
      }else{
        res.status(200).send("successfully completed!!!")
      }
    })
  }
  // console.log("successfully completed!!!");
 })
 //vouchers
 router.post("/familyfunctionvoucher/:userId", async (req, res) => {
  const voucher = req.body.val
  if(voucher === 0){
    User.findOneAndUpdate({_id:req.params.userId}, {$set: {"voucher": voucher}},(err,doc)=>{
      if(!doc){
        console.log(err);
      }else{
        res.status(200).send("successfully completed!!!")
      }
    })
  }else{
    User.findOneAndUpdate({_id:req.params.userId}, {$inc: {"voucher": voucher}},(err,doc)=>{
      if(!doc){
        console.log(err);
      }else{
        res.status(200).send("successfully completed!!!")
      }
    })
  }
  // console.log("successfully completed!!!");
 })





 //corporate function
 //points 
 router.post("/corporatepoints/:userId", async (req, res) => {
  const point = req.body.val
  if(point === 0){
    User.findOneAndUpdate({_id:req.params.userId}, {$set: {"points": point}},(err,doc)=>{
      if(!doc){
        console.log(err);
      }else{
        res.status(200).send("successfully completed!!!")
      }
    })
  }else{
    User.findOneAndUpdate({_id:req.params.userId}, {$inc: {"points": point}},(err,doc)=>{
      if(!doc){
        console.log(err);
      }else{
        res.status(200).send("successfully completed!!!")
      }
    })
  }
  // console.log("successfully completed!!!");
 })
//vouchers
router.post("/corporatevoucher/:userId", async (req, res) => {
  const voucher = req.body.val
  if(voucher === 0){
    User.findOneAndUpdate({_id:req.params.userId}, {$set: {"voucher": voucher}},(err,doc)=>{
      if(!doc){
        console.log(err);
      }else{
        res.status(200).send("successfully completed!!!")
      }
    })
  }else{
    User.findOneAndUpdate({_id:req.params.userId}, {$inc: {"voucher": voucher}},(err,doc)=>{
      if(!doc){
        console.log(err);
      }else{
        res.status(200).send("successfully completed!!!")
      }
    })
  }
  // console.log("successfully completed!!!");
 })






//birthday
//points
router.post("/birthdaypoints/:userId", async (req, res) => {
  const point = req.body.val
  if(point === 0){
    User.findOneAndUpdate({_id:req.params.userId}, {$set: {"points": point}},(err,doc)=>{
      if(!doc){
        console.log(err);
      }else{
        res.status(200).send("successfully completed!!!")
      }
    })
  }else{
    User.findOneAndUpdate({_id:req.params.userId}, {$inc: {"points": point}},(err,doc)=>{
      if(!doc){
        console.log(err);
      }else{
        res.status(200).send("successfully completed!!!")
      }
    })
  }
  // console.log("successfully completed!!!");
 })

 //vouchers
 router.post("/birthdayvoucher/:userId", async (req, res) => {
  const voucher = req.body.val
  if(voucher === 0){
    User.findOneAndUpdate({_id:req.params.userId}, {$set: {"voucher": voucher}},(err,doc)=>{
      if(!doc){
        console.log(err);
      }else{
        res.status(200).send("successfully completed!!!")
      }
    })
  }else{
    User.findOneAndUpdate({_id:req.params.userId}, {$inc: {"voucher": voucher}},(err,doc)=>{
      if(!doc){
        console.log(err);
      }else{
        res.status(200).send("successfully completed!!!")
      }
    })
  }
  // console.log("successfully completed!!!");
 })







 router.get("/babyshowerpointsvoucher/:userId", async (req, res) => {   
    const value = await User.find( { _id: req.params.userId }, { points: 1,voucher:1 } )
    res.status(200).send(value)
 })
 router.get("/familyfunctionpointsvoucher/:userId", async (req, res) => {   
  const value = await User.find( { _id: req.params.userId }, { points: 1,voucher:1 } )
  res.status(200).send(value)
})
router.get("/corporatepointsvoucher/:userId", async (req, res) => {   
  const value = await User.find( { _id: req.params.userId }, { points: 1,voucher:1 } )
  res.status(200).send(value)
})
router.get("/weddingpointsvoucher/:userId", async (req, res) => {   
  const value = await User.find( { _id: req.params.userId }, { points: 1,voucher:1 } )
  res.status(200).send(value)
})
router.get("/postweddingpointsvoucher/:userId", async (req, res) => {   
  const value = await User.find( { _id: req.params.userId }, { points: 1,voucher:1 } )
  res.status(200).send(value)
})
router.get("/preweddingpointsvoucher/:userId", async (req, res) => {   
  const value = await User.find( { _id: req.params.userId }, { points: 1,voucher:1 } )
  res.status(200).send(value)
})
router.get("/birthdaypointsvoucher/:userId", async (req, res) => {   
  const value = await User.find( { _id: req.params.userId }, { points: 1,voucher:1 } )
  res.status(200).send(value)
})
router.get("/engagementpointsvoucher/:userId", async (req, res) => {   
  const value = await User.find( { _id: req.params.userId }, { points: 1,voucher:1 } )
  res.status(200).send(value)
})




module.exports = router