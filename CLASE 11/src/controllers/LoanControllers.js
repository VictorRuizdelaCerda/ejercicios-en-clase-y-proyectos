import Loan from "../models/Loan.js";

export const getLoans = async (req, res) => {
  const loans = await Loan.findAll();
  res.json(loans);
};

export const getLoanById = async (req, res) => {
  const loan = await Loan.findByPk(req.params.id);
  if (!loan) return res.status(404).json({ error: "Loan not found" });
  res.json(loan);
};

export const createLoan = async (req, res) => {
  const { userId, bookId, startDate, endDate } = req.body;
  if (!userId)
    return res.status(400).json({ error: "The user for the loan is required" });
  if (!bookId)
    return res.status(400).json({ error: "The book for the loan is required" });
  if (!startDate)
    return res
      .status(400)
      .json({ error: "The start date for the loan is required" });
  if (!endDate)
    return res
      .status(400)
      .json({ error: "The end date for the loan is required" });

  const loan = await Loan.create({ userId, bookId, startDate, endDate });
  res.status(201).json({ message: "Loan created", loan });
};

export const updateLoan = async (req, res) => {
  const { userId, bookId, startDate, endDate } = req.body;
  const loan = await Loan.findByPk(req.params.id);
  if (!loan) return res.status(404).json({ error: "Loan not found" });

  loan.userId = userId || loan.userId;
  loan.bookId = bookId || loan.bookId;
  loan.startDate = startDate || loan.startDate;
  loan.endDate = endDate || loan.endDat;

  await loan.save();
  res.json({ message: "Updated loan", loan });
};

export const deleteLoan = async (req, res) => {
  const loan = await Loan.findByPk(req.params.id);
  if (!loan) return res.status(404).json({ error: "Loan not found" });

  await loan.destroy();
  res.json({ message: "Deleted loan" });
};