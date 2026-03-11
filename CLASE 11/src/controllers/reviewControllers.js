import Review from "../models/review.js";

export const getReviews = async (req, res) => {
  const reviews = await Review.findAll();
  res.json(reviews);
};

export const getReviewById = async (req, res) => {
  const review = await Review.findByPk(req.params.id);
  if (!review) return res.status(404).json({ error: "Review not found" });
  res.json(review);
};

export const createReview = async (req, res) => {
  const { userId, bookId, comment } = req.body;
  if (!userId)
    return res
      .status(400)
      .json({ error: "The user for the review is required" });
  if (!bookId)
    return res
      .status(400)
      .json({ error: "The book for the review is required" });
  if (!comment)
    return res
      .status(400)
      .json({ error: "The comment for the review is required" });

  const review = await Review.create({ userId, bookId, comment });
  res.status(201).json({ message: "Review created", review });
};

export const updateReview = async (req, res) => {
  const { userId, bookId, comment } = req.body;
  const review = await Review.findByPk(req.params.id);
  if (!review) return res.status(404).json({ error: "Review not found" });

  review.userId = userId || review.userId;
  review.bookId = bookId || review.bookId;
  review.comment = comment || review.comment;

  await review.save();
  res.json({ message: "Updated review", review });
};

export const deleteReview = async (req, res) => {
  const review = await Review.findByPk(req.params.id);
  if (!review) return res.status(404).json({ error: "Review not found" });

  await review.destroy();
  res.json({ message: "Deleted review" });
};