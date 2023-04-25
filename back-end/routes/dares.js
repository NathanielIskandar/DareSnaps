const express = require("express")
const router = express.Router();
const { validationResult } = require('express-validator');
const User = require("../models/User");
const auth = require("../middleware/auth");
const axios = require('axios');
//const user = require("./routes/user");
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });
const Image = require("../models/Image");

//removed AUTH
router.get("/daily", auth, async (req, res) => {
  try {
    const response = await axios.get('https://api.truthordarebot.xyz/api/dare');
    const dare = response.data;
    const user = await User.findById(req.user.id);
    user.listOfDares.push(dare.question);
    await user.save();
    res.json({ dare });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to fetch daily dare.' });
  }
});

/**
 * @method - POST
 * @param - /upload
 * @description - upload image
 */
router.post('/upload', auth, upload.single('image'), async (req, res) => {
    try {
      const user = await User.findById(req.user.id);
      if (!user) {
        return res.status(400).json({ message: 'User not found' });
      }
  
      const newImage = new Image({
        user: user._id,
        url: req.file.path,
        caption: req.body.caption,
        uploadedAt: new Date()
      });
  
      await newImage.save();
      res.json({ message: 'Image uploaded successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server error' });
    }
  });


/**
 * @method - GET
 * @param - /images
 * @description - get user's images
 */
router.get('/images', auth, async (req, res) => {
    try {
      const user = await User.findById(req.user.id);
      if (!user) {
        return res.status(400).json({ message: 'User not found' });
      }
      res.json({ images: user.images });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server error' });
    }
  });
  module.exports = router;
