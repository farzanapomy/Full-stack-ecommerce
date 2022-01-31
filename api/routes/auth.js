const router = require("express").Router();
const User = require("../models/User");
const jwt = require("jsonwebtoken");

//REGISTER
router.post("/register", async (req, res) => {
  const newUser = new User({
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
  });

  try {
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (err) {
    res.status(500).json(err);
  }
});



//LOGIN

router.post("/login", async (req, res) => {
  try {

    const user = await User.findOne({ userName: req.body.userName })
    !user && res.status(401).json("Wrong User");


    // jwt 

    const accessToken = jwt.sign({
      id: user._id,
      isAdmin: user.isAdmin

    }, `${process.env.JWT_SEC}`,
      { expiresIn: "3d" }
    )

    if (user.passWord === req.body.passWord) {
      return res.status(200).json({ user, accessToken })
    }
    else {
      return res.status(404).json({ success: false, message: 'Your email or password invalid' })
    }

  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
