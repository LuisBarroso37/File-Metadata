const express = require('express');
const router = express.Router();
const multer = require('multer');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads');
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now());
  }
});

const upload = multer({ storage: storage });

router.post('/api/fileanalyse', upload.single('upfile'), (req, res) => {
  let file = req.file;
  if(!file) {
    res.status(400).send('Please upload a file');
  } else {
    res.send({filename: file.filename, size: file.size});
  }
});

module.exports = router;