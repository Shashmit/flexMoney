const router = require("express").Router();
const { z } = require("zod");
const User = require("../model/User");

const paymentFormSchema = z.object({
  name: z.string(),
  age: z.number().int(),
  selectedBatch: z.string(),
});

router.post("/", async (req, res) => {
  try {
    const inputData = paymentFormSchema.parse(req.body);
    if (inputData.age < 18 || inputData.age > 65) {
      throw new Error("Age is not applicable for this course");
    }
    const user = new User(inputData);
    await user.save();

    const paymentResponse = completePayment({ user, amount: 500 });
    res.status(200).json({
      success: true,
      message: paymentResponse.message,
      name: user.name,
      selectedBatch: user.selectedBatch,
      id: user._id,
    });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
});

function completePayment({ user, amount }) {
  // payment logic
  console.log("payment done");
  return { message: "Payment successful!" };
}

module.exports = router;
