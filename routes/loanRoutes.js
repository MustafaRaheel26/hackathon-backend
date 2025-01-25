const express = require('express');
const { submitLoanRequest, getLoans } = require('../controllers/loanController');

const router = express.Router();

router.post('/submit', submitLoanRequest);
router.get('/', getLoans);

module.exports = router;
