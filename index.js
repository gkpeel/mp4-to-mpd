const express = require('express');
const multer = require('multer');
const ffmpeg = require('ffmpeg');
const path = require('path');
const fs = require('fs');

const app = express();

// Set up the storage for the uploaded files
const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function(req, file, cb) {
    cb(null, file.originalname);
  }
});

const upload = multer({ storage });

// Set up the route to display the file upload form
app.get('/', (req, res) => res.send('Hello world!'));

// Set up the route to handle the file upload and conversion
app.post('/convert', upload.single('file'), (req, res) => {
  // Get the uploaded file
  const filePath = req.file.path;

  // Convert the file to MOV format using FFmpeg
  const outputFilePath = path.join('uploads', 'output.mov');
  try {
    const command = new ffmpeg(filePath);
    command.output(outputFilePath)
      .on('end', function() {
        // Return the converted file to the user as a download
        res.download(outputFilePath, (err) => {
          // Delete the uploaded and converted files from the server
          fs.unlinkSync(filePath);
          fs.unlinkSync(outputFilePath);
        });
      })
      .run();
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
