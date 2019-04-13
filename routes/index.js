var express = require('express');
var router = express.Router();
var msgModel = require('./../models/MsgMod');

// const msg1 = new msgModel({
//   from: "5ca8b9539bec602d4445d056",
//   to: "5ca8b9539bec602d4445d055",
//   text: "um leave now"
// });
// msg1.save().then(() => console.log("msg for user"));



//get all msgs
router.get('/', async (req, res, next) => {
  const msgs = await msgModel.find({}).exec();
  res.send(msgs.map(m => m.text));
});

//add new msg
router.post('/', async (req, res, next) => {
  const currentMsg = new msgModel({
    from: req.body.from,
    to: req.body.to,
    text: req.body.text
  });
  const msg = await currentMsg.save();
  res.redirect('/');
});

//update msg by id
router.patch('/:id', async (req, res, next) => {
  const msgs = await msgModel.find({}).exec();
  const userMsg = msgs.find(u => String(u.from) === String(req.params.id));
  console.log(userMsg);
  console.log(req.body.text);
  userMsg.text = req.body.text;
  res.redirect('/');
});

//delete msg by id
router.delete('/:id', async (req, res, next) => {
  const msgs = await msgModel.find({}).exec();
  const index = msgs.findIndex(a => a.from === req.params.id);
  console.log(index);
  msgs.splice(index, 1);
  console.log("in delete");
  res.redirect('/');
});



module.exports = router;
