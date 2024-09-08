const Tour = require("./tourLib");

// GET /tours
const getAllTours = (req, res) => {
  const tours = Tour.getAll();
  res.json(tours);
};

// POST /tours
const createTour = (req, res) => {
  const { name, info, image, price } = req.body;

  const newTour = Tour.addOne(name, info, image, price);

  if (newTour) {
    res.json(newTour);
  } else {
    res.status(400).json({ message: "Failed to create tour" });
  }
};

// GET /tours/:tourId
const getTourById = (req, res) => {
  const tourId = parseInt(req.params.tourId, 10); // Ensure it's a number
  const tour = Tour.findById(tourId);
  if (tour) {
    res.json(tour);
  } else {
    res.status(404).json({ message: "Tour not found" });
  }
};

// PUT /tours/:tourId
const updateTour = (req, res) => {
  const tourId = parseInt(req.params.tourId, 10); // Ensure it's a number

  const { name, info, image, price } = req.body;

  const updatedTour = Tour.updateOneById(tourId, { name, info, image, price });

  if (updatedTour) {
    res.json(updatedTour);
  } else {
    res.status(404).json({ message: "Tour not found" });
  }
};

// DELETE /tours/:tourId
const deleteTour = (req, res) => {
  const tourId = parseInt(req.params.tourId, 10); // Ensure it's a number

  const isDeleted = Tour.deleteOneById(tourId);

  if (isDeleted) {
    res.json({ message: "Tour deleted successfully" });
  } else {
    res.status(404).json({ message: "Tour not found" });
  }
};

module.exports = {
  getAllTours,
  getTourById,
  createTour,
  updateTour,
  deleteTour,
};
