const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const { rejectUnauthenticated } = require('../modules/authentication-middleware');
const multer = require('multer');
const path = require('node:path');
const storage = multer.diskStorage({
    destination: './public',
    filename: function (req,file,cb) {
        cb(null, 'profilePic-' + req.user.id + '.jpg');
    }
});
const upload = multer({
    storage: storage,
});

router.put('/', rejectUnauthenticated, upload.single("uploaded_file"), function(req,res) {
    console.log('in post router for multer');
    console.log('what is current users ID?: ',req.user.id)
    console.log('req.file is', req.file);
    console.log(`../public/${req.file.filename}`);
    let pPic = `${req.file.filename}`;
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