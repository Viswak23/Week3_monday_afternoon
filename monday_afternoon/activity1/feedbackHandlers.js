const Feedback = require("./feedbackLib");

const getAllFeedbacks = (req, res) => {
  const feedback = Feedback.getAll();
  res.json(feedback);
};

const createFeedback = (req, res) => {
  const { sender, message, rating } = req.body;
  const newFeedback = Feedback.addOne(sender, message, rating);
  if (newFeedback) {
    res.json(newFeedback);
  } else {
    // Handle error (e.g., failed to create pet)
    res.status(500).json({ message: "Failed to create Feedback" });
  }
};

const getFeedbackById = (req, res) => {
  const feedbackID = req.params.feedbackId;
  const feedback = Feedback.findById(feedbackID);
  console.log(feedback);
  if (feedback) {
    res.json(feedback);
  } else {
    res.status(404).json({ message: "feedback not found" });
  }
};

const updateFeedback = (req, res) => {
  const feedbackID = req.params.feedbackId;
  const { sender, message, rating } = req.body;
  const updateFeedback = Feedback.updateOneById(feedbackID, {
    sender,
    message,
    rating,
  });
  if (updateFeedback) {
    res.json(updateFeedback);
  } else {
    // Handle update failure (e.g., pet not found)
    res.status(404).json({ message: "Pet not found" });
  }
};

const deleteFeedback = (req, res) => {
  const feedbackID = req.params.feedbackId;
  const isDeleted = Feedback.deleteOneById(feedbackID);
  if (isDeleted) {
    res.json({ message: "feedback deleted successfully" });
  } else {
    // Handle deletion failure (e.g., pet not found)
    res.status(404).json({ message: "feedback not found" });
  }
};

module.exports = {
  getAllFeedbacks,
  getFeedbackById,
  createFeedback,
  updateFeedback,
  deleteFeedback,
};
