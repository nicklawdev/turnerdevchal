const express = require('express');
const router = express.Router();

const Title = require('../../models/Title');

router.route('/')
    .get((req, res) => {
        Title.find({}, (err, titles) => {
            res.json(titles);
        })  
});

router.route('/:titleName')
    .get((req, res) => {
        Title.find({TitleName: req.params.titleName}, (err, titles) => {
            res.json(titles);
        })  
});

router.route('/id/:titleId')
    .get((req, res) => {
        Title.find({TitleId: req.params.titleId}, (err, titles) => {
            res.json(titles);
        })  
});

module.exports = router;
