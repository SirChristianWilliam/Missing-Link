const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const { rejectUnauthenticated } = require('../modules/authentication-middleware');
//------------------------------------------- for s3
const AWS = require('aws-sdk');
// AWS.config.update({region:'us-east-2'});

const {S3Client} = require('@aws-sdk/client-s3');
const app = express()

//------------------------------------------- for s3
const multer = require('multer');
const multerS3 = require('multer-s3');
//------------------------------------------- for s3
const bucketName = process.env.AWS_BUCKET_NAME;

//s3 client
const s3 = new S3Client({
  region: 'us-east-2'
});

const upload = multer({
  storage: multerS3({
    s3: s3,
    bucket: bucketName,
    acl: 'public-read',
        key: function (req,file, cb) {
          console.log('file is', file)
      cb(null, 'profilePic-' + req.user.id + file.originalname)
    }
    })
});

app.post('/upload', rejectUnauthenticated, upload.array('photos',3), 
function(req, res, next) {
  res.send('Successfully uploaded ' + req.files.length + ' files!')
  // console.log(req);
  console.log(req.file, 'is the req.file');
  if (req.file == null) {
      return res.status(400).json({ 'message': 'Please choose the file' })
   }

})
//------------------------------------------- for s3
const path = require('node:path');

//Multer stuff below

const storage = multer.diskStorage({
    destination: './public',
    filename: function (req,file,cb) {
        cb(null, 'profilePic-' + req.user.id + '.jpg');
    }
});


router.put('/', rejectUnauthenticated, upload.single("uploaded_file"), function(req,res) {
    console.log('in post router for multer');
    console.log('what is current users ID?: ',req.user.id)
    console.log('req.file is', req.file);
    console.log(`../public/${req.file.location}`);
    let pPic = `${req.file.location}`;
    let sqlText = 
        `UPDATE "user" 
         SET "profile_pic" = $1
         WHERE "user"."id" = $2;`
         const sqlParams = [
            pPic,
            req.user.id
         ];
         pool.query(sqlText, sqlParams)
         .then((dbRes) => {
           res.sendStatus(200);
         })
         .catch((err) => {
           console.log(`Error in image PUT `, err);
           res.sendStatus(500);
         })
});

module.exports = router;