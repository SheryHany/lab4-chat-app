const userModel = require('./../models/UserMod');
var msgModel = require('./../models/MsgMod');
var express = require('express');
var router = express.Router();


// const user1 = new userModel({
//   name: "test",
//   email: "test@gmail.com",
//   age: 20,
//   gender: 'male',
//   city: "giza"
// });
// user1.save().then(() => console.log("user name"));



//get all users
router.get('/', async (req, res, next) => {
  const users = await userModel.find({}).exec();
  res.send(users.map(u => u._id));
});

//add user
router.post('/', async (req, res, next) => {
  const currentUser = new userModel({
    name: req.body.name,
    email: req.body.email,
    age: req.body.age,
    gender: req.body.gender,
    city: req.body.city,
  });
  const user = await currentUser.save();
  res.redirect('/users');
});

//get user by id
router.get('/:id', async (req, res, next) => {
  const users = await userModel.find({}).exec();
  const theUserIs = users.find(u => { if (String(u._id) === String(req.params.id)) { return u } });
  res.send(theUserIs);
});

//get sent msgs by id
router.get('/:id/from', async (req, res, next) => {
  const msgs = await msgModel.find({}).exec();
  res.send(msgs.map(a => {
    if (a.from === req.params.id)
      return a.text
  }));
});

//get msgs sent to this id
router.get('/:id/to', async (req, res, next) => {
  const msgs = await msgModel.find({}).exec();
  res.send(msgs.map(a => {
    if (a.to === req.params.id)
      return a.text
  }));
});


module.exports = router;

