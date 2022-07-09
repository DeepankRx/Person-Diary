const Diary = require("../Model/Diary");
exports.getDiary = (req, res) => {
  Diary.find({}, (err, diary) => {
    if (err) {
      res.status(404).send(err);
    }
    res.status(200).json(diary);
  }).sort({ date: -1 });
};
exports.postDiary = (req, res) => {
    console.log(req.body);
    console.log("In controllers")
  const diary = new Diary({
    date: req.body.date,
    title: req.body.title,
    description: req.body.description,
  });
  diary
    .save((err, diary) => {
      if (err) {
        res.status(400).send(err);
      }
      res.status(200).json(diary);
    })
};
exports.deleteDiary = (req, res) => {
  Diary.findByIdAndRemove(req.params.id, (err, diary) => {
    if (err) {
      res.status(400).send(err);
    }
    res.status(200).json(diary);
  })
};
exports.updateDiary = (req, res) => {
  Diary.findByIdAndUpdate(
    req.params.id,
    {
      $set: req.body,
    },
    {
      new: true,
    },
    (err, diary) => {
      if (err) {
        res.status(400).send(err);
      }
      res.status(200).json(diary);
    }
  ).sort({ date: -1 });
};
exports.getDiaryById = (req, res) => {
  Diary.findById(req.params.id, (err, diary) => {
    if (err) {
      res.status(400).send(err);
    }
    res.status(200).json(diary);
  }).sort({ date: -1 });
}
