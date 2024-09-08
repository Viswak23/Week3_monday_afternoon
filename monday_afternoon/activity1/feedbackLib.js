/* {
    "sender": "John Smith",
    "message": "Great session on React components! I found the examples very helpful.",
    "rating": 5
  } */

let feedbackArray = [];

let nextID = 1;

function getAll() {
  return feedbackArray;
}

function addOne(sender, message, rating) {
  if (!sender || !message || !rating) {
    return false;
  }
  const newFeedback = {
    id: nextID++,
    sender,
    message,
    rating,
  };
  feedbackArray.push(newFeedback);
  return newFeedback;
}

function findById(id) {
  const feedback = feedbackArray.find((item) => item.id === id);
  if (feedback) {
    return feedback;
  } else {
    return false;
  }
}
function updateOneById(id, updatedData) {
  const feedback = findById(id);
  if (feedback) {
    if (updatedData.sender) {
      feedback.sender = updatedData.sender;
    }
    if (updatedData.message) {
      feedback.message = updatedData.message;
    }
    if (updatedData.rating) {
      feedback.rating = updatedData.rating;
    }
    return feedback;
  }
  return false;
}

function deleteOneById(id) {
  const feedback = findById(id);
  if (feedback) {
    const initialLength = feedbackArray.length;
    feedbackArray = feedbackArray.filter((item) => item.id != id);
    return feedbackArray.length < initialLength;
  }
  return false;
}

if (require.main === module) {
  let result = addOne(
    "John Smith",
    "Great session on React components! I found the examples very helpful.",
    4
  );
  console.log(result);
  console.log("getAll called:", getAll());

  console.log("findById called:", findById(1));

  console.log(
    "updateOne called:",
    updateOneById(1, { sender: "viswak", rating: 22 })
  );
  console.log("findById called after item updated:", findById(1));

  console.log("deleteOneById called:", deleteOneById(1));
  console.log("findById called after item deleted:", findById(1));
}
feedback = {
  getAll,
  addOne,
  findById,
  updateOneById,
  deleteOneById,
};

module.exports = feedback;
