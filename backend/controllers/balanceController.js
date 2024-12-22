const Balance = require('../models/balanceModel');

const getBalance = async (req, res) => {
  const todos = await Balance.find();
  res.status(200).json(todos)
  }

  const updateBalance = async (req, res) => {
    const {...updateData } = req.body; // Extract the id and other update data
    const balance = await Balance.findById(req.params.id);
  
    if (!balance) {
      res.status(400);
      throw new Error('Balance not found');
    }
  
    const updatedBalance = await Balance.findByIdAndUpdate(req.params.id, updateData, {
      new: true,
    });
  
    res.status(200).json(updatedBalance);
  };
  
  const deleteBalance = async (req, res) => {
    const balance = await Balance.findById(req.params.id);
    if (!balance) {
      res.status(400);
      throw new Error('Balance not found');
    }
    const updatedBalance = await Balance.findByIdAndDelete(req.params.id);
    res.status(200).json(updatedBalance);
  }

  const setBalance = async (req, res) => {
    if (!req.body.text) {
      res.status(400);
      throw new Error('Please add text field');
    }
    const todo = await Balance.create({
      text: req.body.text,
    });
    res.status(200).json(todo);
  }
  
  module.exports = {
    getBalance,
    setBalance,
    updateBalance,
    deleteBalance
  }
  