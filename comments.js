// Create web server
// Created: 6/17/2018 7:58 PM - VS (IN)
// Edited:  6/17/2018 7:58 PM - VS (IN)
// Edited:  6/17/2018 7:58 PM - VS (IN)

var express = require('express');
var router = express.Router();
var db = require('../db');

/* GET all comments */
router.get('/', function (req, res, next) {
    db('comments').select().then(function (comments) {
        res.json(comments);
    });
});

/* GET comments by id */
router.get('/:id', function (req, res, next) {
    db('comments').where('id', req.params.id).first().then(function (comment) {
        res.json(comment);
    });
});

/* POST comments */
router.post('/', function (req, res, next) {
    db('comments').insert(req.body).then(function (id) {
        db('comments').where('id', id).first().then(function (comment) {
            res.json(comment);
        });
    });
});

/* PUT comments */
router.put('/:id', function (req, res, next) {
    db('comments').where('id', req.params.id).update(req.body).then(function () {
        db('comments').where('id', req.params.id).first().then(function (comment) {
            res.json(comment);
        });
    });
});

/* DELETE comments */
router.delete('/:id', function (req, res, next) {
    db('comments').where('id', req.params.id).del().then(function () {
        res.json({deleted: true});
    });
});

module.exports = router;git add comments.js