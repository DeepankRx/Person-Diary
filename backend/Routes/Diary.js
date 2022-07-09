const express = require("express");
const router = express.Router();
const diaryController = require('../Controller/diaryController');

router.get('/getDiary', diaryController.getDiary);
router.post('/postDiary', diaryController.postDiary);
router.delete('/deleteDiary/:id', diaryController.deleteDiary);
router.put('/updateDiary/:id', diaryController.updateDiary);
module.exports = router;