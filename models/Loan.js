const mongoose = require('mongoose');

const loanSchema = new mongoose.Schema({
  userId: mongoose.Schema.Types.ObjectId,
  category: String,
  subcategory: String,
  amount: Number,
  guarantors: [
    {
      name: String,
      email: String,
      cnic: String,
    },
  ],
  status: { type: String, default: 'Pending' },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Loan', loanSchema);
