const express = require('express')
const cors = require('cors')
const multer = require('multer')
const ffmpeg = require('ffmpeg')
const path = require('path')
const fs = require('fs')

const app = express();

// cors
app.use(cors({ origin: true, credentials: true }));

// Init Middleware
app.use(express.json({ extended: false }));

// Set up the storage for the uploaded files
const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function(req, file, cb) {
    cb(null, file.originalname);
  }
});

// Set up multer to handle file uploads
const upload = multer({ storage: storage });

// Set up the route to display the file upload form
app.get('/', (req, res) => res.send('Hello world!'));

// Set up the route to handle the file upload and conversion
app.post('/convert', upload.single('file'), (req, res) => {
  // Get the uploaded file
  const filePath = req.file.path;

  console.log(filePath);

  // Convert the file to MOV format using FFmpeg
  const outputFilePath = path.join('uploads', 'output.mov');
  try {
    var process = new ffmpeg(filePath);
    process.then(function (video) {
      console.log('The video is ready to be processed');
    }, function (err) {
      console.log('Error: ' + err);
    });
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
});

const port = process.env.PORT || 3000;

// Start the server
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
