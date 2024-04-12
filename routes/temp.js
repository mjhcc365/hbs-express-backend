// const fs = require('fs');
// const path = require('path');
var express = require('express');
var router = express.Router();

const { Temps } =  require("../db/temp")

// 上传单个模板
router.post("/",async(req, res)=>{
  try{
    const { tempstr ,keyword} = req.body;
    const newtemp = new Temps({tempstr,keyword})
    await newtemp.save();
    res.status(201).json(newtemp);
  }catch(err){
    res.status(400).json({ message: err.message });
  }
 }
)

router.get('/alltemps',async(req, res)=>{
  try{
    const newtemp = await Temps.find();
    res.status(200).json(newtemp);
  }catch(err){
    res.status(400).json({ message: err.message });
  }
 }
)

module.exports = router 
