const Loan = require('../models/Loan');

exports.submitLoanRequest = async (req, res) => {
  try {
    const loan = new Loan(req.body);
    await loan.save();
    res.status(201).json({ message: 'Loan request submitted successfully.' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getLoans = async (req, res) => {
  try {
    const loans = await Loan.find();
    res.status(200).json(loans);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
