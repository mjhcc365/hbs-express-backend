const fs = require('fs');
const path = require('path');
var express = require('express');
var router = express.Router();


// 上传单个文件
router.post("/",(req, res)=>{
    let fileObj = null;
    let filePath = '';

    console.log("==>req",req.files.files)

    if (!req.files || Object.keys(req?.files).length === 0) {
        res.status(400).send({
          code: 1,
          msg: 'Bad Request.'
        });
        return;
   }


   fileObj = req?.files?.files;
   filePath = './public/images/' + fileObj.name;

  //  const uploadFolder = path.join(__dirname, '../upload');
  //  if (!fs.existsSync(uploadFolder)) {
  //   fs.mkdirSync(uploadFolder);
  //  }

  fileObj.mv(filePath, (err) => {
    if (err) {
      return res.status(500).send({
        code: 1,
        msg: 'System error'
      });
    }
    res.send({
        code: 0,
        data: 'Upload Successfully'
      });
   }
  )
}
)

module.exports = router 
