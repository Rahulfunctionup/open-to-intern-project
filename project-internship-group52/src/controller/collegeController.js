const mongoose = require('mongoose');
const { create } = require('../models/collegemodel');
const collegeController = require('./controller/collegecontroller');

createcollege = async function (req, res) {
    try {
        let collegeCreate = await collegeModel.create(college)
        res.status(201).send({ status: true, data: collegeCreate })
    }
}



















module.exports = {}