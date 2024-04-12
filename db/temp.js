const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

// // 定义数据模型
const Schema = mongoose.Schema;

const tempsSchema = new Schema({
  tempstr: String,
  keyword: String,
});

const Temps = mongoose.model('Temps', tempsSchema);


module.exports ={
    Temps,
}



