const express = require('express');
const router = express.Router();
const multer = require('multer');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads');
  },
  filename: (req, file, cb) => {
    cb(null, file.fieldname + '-' + Date.now());
  }
});

const upload = multer({ storage: storage });

// User story 1 - I can submit a form object that includes a file upload
router.post('/api/fileanalyse', upload.single('upfile'), (req, res) => {
  let file = req.file;
  if(!file) {
    res.status(400).send('Please upload a file');
  } else {
// User story 3 - When I submit something, I will receive the file name, and size in bytes within the JSON response.
    res.json({filename: file.filename, size: file.size});
  }
});

module.exports = router;