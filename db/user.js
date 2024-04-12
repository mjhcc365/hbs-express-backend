const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

// // 定义数据模型
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: String,
  password: String,
});

const User = mongoose.model('User', userSchema);

// // 使用 bcrypt 对密码进行哈希加密
userSchema.pre('save', async function(next) {
  const user = this;
  if (!user.isModified('password')) return next();
  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(user.password, salt);
  user.password = hash;
  next();
});


module.exports ={
    User,
}



