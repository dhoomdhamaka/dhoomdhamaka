const express = require("express");
const router = express.Router();
const cors = require("cors");
const bodyParser = require("body-parser");
const config = require("config");
const { v4: uuidv4 } = require('uuid');
const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const auth = require("../middleware/auth");
const { EventForm } = require("../model/eventModel");
const { PreWeddingForm } = require("../model/preweddingmodel");
const { EngagementForm } = require("../model/engagementmodel");
const { BirthdayForm } = require("../model/birthdaymodel");
const { PostWeddingForm } = require("../model/postweddingmodel");
const { CorporateEventForm } = require("../model/corporateEvent");
const { FamilyFunctionForm } = require("../model/familyFunction");
const { WeddingForm } = require("../model/weddingmodel");
const { EventName } = require("../model/eventName");
const db = config.get("db");


router.get("/", auth, async (req, res) => {
  console.log("req rec eventinfo");

  const functions23 = ["preWeddingForm", "postWeddingForm"];

  const newArr = []
  let newVar = false

  EventName.find({ userId: req.id }, (err, doc) => {
    if (err) {
      res.status(400).send(err);
      console.log(err);
    } else {
      const modelName = [];
      doc.map((item) => {
        modelName.push(item.name_Of_The_Event);
      });
      // console.log(modelName);

      async function pushFunc(cv){
         newArr.push(cv[0])
      }

      async function getData(docs){
        // async function(err, doc){
          if (docs) {
            //   console.log(doc);
            // datas.push(doc);
            console.log("doc");
            await newArr.push("docs")
             newVar = true
            
            
          }else{
            // await newArr.push("doc")
            console.log("dogtgc");

          }
        // }
      }

      async function forthFunc(item) {
        let newrt 
        let queryById = { userId: req.id }
        let xcv = PreWeddingForm.find(queryById, async function (err,docs)  {
          newVar = true
        // newrt =  await newArr.push("dertyu")
        await getData(docs)
        // return docs
      })
      // console.log(xcv);
        // newrt = await xcv
        // console.log("newrt: ",newrt);

        // let xcv = PreWeddingForm.findOne({userId: req.id})
          // (err,doc)=>{
          // console.log("dfd",xcv);
          // newArr.push(xcv)
          console.log("4th func");
          // if(!err){
            // console.log("doc");
          // }
        // })
        //  async(err,doc) => {
        //   console.log("forth func ins");
        //   if (doc) {
        //     console.log("doc");
        //     // datas1.push(doc);
        //     return doc;
        //   }
        // });
        // let derp = await pushFunc(cv) 
        // console.log("fr",cv);
        // console.log(derp);
      }

      const datas = [];

      async function thirdFunc(item) {
        // {
        if ("preWeddingForm" === item) {
          console.log("3rd func");
          await forthFunc(item);
          // console.log("res33",res33);
        } else if ("EngagementForm" === item) {
          EngagementForm.find({ userId: req.id }, (err, doc) => {
            if (doc) {
              //   console.log(doc);
              datas.push(doc);
            }
          });
        } else if ("PostWeddingForm" === item) {
          PostWeddingForm.find({ userId: req.id }, (err, doc) => {
            if (doc) {
              //   console.log(doc);
              datas.push(doc);
            }
          });
        } else if ("WeddingForm" === item) {
          WeddingForm.find({ userId: req.id }, (err, doc) => {
            if (doc) {
              //   console.log(doc);
              datas.push(doc);
            }
          });
        }
        // else if("BabyShowerForm" === item){
        //     BabyShowerForm.find({ userId: req.id }, (err, doc) => {
        //         if (doc) {
        //           console.log(doc);
        //         }
        //     })
        // }
        else if ("BirthdayForm" === item) {
          BirthdayForm.find({ userId: req.id }, (err, doc) => {
            if (doc) {
              //   console.log(doc);
              datas.push(doc);
            }
          });
        } else if ("CorporateEventForm" === item) {
          CorporateEventForm.find({ userId: req.id }, (err, doc) => {
            if (doc) {
              //   console.log(doc);
              datas.push(doc);
            }
          });
        } else if ("FamilyFunctionForm" === item) {
          FamilyFunctionForm.find({ userId: req.id }, (err, doc) => {
            if (doc) {
              //   console.log(doc);
              datas.push(doc);
            }
          });
        }
        // })
      }

      async function secondFunc() {
        let datas1 = [];
        let res1 = await modelName.map((item) => {
          thirdFunc(item);
        });
      }

      const firstFunc = async () => {
        const result = await secondFunc();
        console.log("res",result);
        if(newVar){

          console.log("ddd",newArr);
        }
      };

      firstFunc();

      // console.log(awsait datas);
      // for (const item of functions) {
      //     for (const item1 of modelName) {
      //         if(item == item1){
      //             console.log("finder",item);
      //         }
      //     }
      // }

      // modelName.map(item => {
      // PreWeddingForm.find({userId: req.id}, (err,doc)=>{
      // if(doc){
      // datas.push(doc)
      // console.log(doc);
      // }
      // })
      // })

      //   console.log(datas);
      // res.send("got it")
    }
    if(newVar){

      console.log("ddd",newArr);
    }
  });

  // EventForm.find({userId : req.id}, (err,doc) => {
  //     if(err){
  //         res.status(400).send(err)
  //         console.log(err);
  //     }else{
  //         console.log(doc);
  //         res.send("got it")
  //     }
  // })
  if(newVar){

    console.log("ddd",newArr);
  }
});

module.exports = router;