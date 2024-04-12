var express = require('express');
var router = express.Router();
const { User }  = require("../db/user")

// /* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('POST request to the homepage')
});

// 创建账户
router.post('/create', async (req, res) => {
  try {
    const { username, password } = req.body;
    console.log()
    const user = new User({ username:username, password:password });
    await user.save();
    res.status(201).json(user);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// 删除账户
router.post('/del', async (req, res) => {
  try {
    const { userId } =req.body
    await  User.findByIdAndDelete(userId);;
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// 修改密码
router.post('/update', async (req, res) => {
  try {
    const { userId,newpwd } =req.body
    await User.findByIdAndUpdate(userId, { password:newpwd });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// 查看密码
router.post('/find', async (req, res) => {
  try {
    const { userId } =req.body
    const user  =  await User.findById(userId);
    // res.send(JSON.stringify())
    console.log('==>useruser',user)
    if (!user) {
      return res.status(404).send('User not found');
    }
    res.json(user)
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});



module.exports = router;
