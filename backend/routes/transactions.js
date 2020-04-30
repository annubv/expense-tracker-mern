const express = require("express");
const transactions_ctrl = require("../controllers/transactions");

const router = express.Router();

router
  .route("/")
  .get(transactions_ctrl.getTransactions)
  .post(transactions_ctrl.addTransactions);

router.route("/:id").delete(transactions_ctrl.deleteTransactions);

module.exports = router;
