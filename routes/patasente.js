require("dotenv").config();
const axios = require("axios");
const express = require("express");
const router = express.Router();

// const BASE_URL = "https://patasente.me/pay-me/M000309"

const { PATASENTE_APIKEY, PATASENTE_GATEWAY_KEY, BASE_URL } = process.env;

// const URL = `${BASE_URL}/send-transaction-token/${PATASENTE_APIKEY}/${PATASENTE_GATEWAY_KEY}`

const URL = `https://patasente.me/phantom-api/send-transaction-token/9128Tn4oz/143c4960da1456606a5e0f7e0c71e716?phone=256770559691&mobile_money_company_id=1`;

router.post("/send-token", async function (req, res, next) {
  try {
    const results = await axios.post(
      `https://patasente.me/phantom-api/send-transaction-token/${PATASENTE_APIKEY}/${PATASENTE_GATEWAY_KEY}?phone=${req.body.phone}&mobile_money_company_id=${req.body.mobile_money_company_id}`,
      req.body
    );
    res.json({
      "status": "Success",
      "message": results.data
    });
  } catch {
    res.json({
      result: "Failed",
    });
  }
});

router.post("/make-payment", async function (req, res, next) {
  try {
    const results = await axios.post(
      `https://patasente.me/phantom-api/pay-with-patasente/${PATASENTE_APIKEY}/${PATASENTE_GATEWAY_KEY}?email=charleskasasira01@gmail.com&amount=2000&phone=${req.body.phone}
      &secret_code=${req.body.secret_code}&mobile_money_company_id=${req.body.mobile_money_company_id}&reason=${req.body.reason}&metadata=${req.body.metadata}`,
      req.body
    );
    res.json({
      "status": "Success",
      "message": results.data
    });
  } catch {
    res.json({
      result: "Failed",
    });
  }
});

router.get("/trial", async function (req, res, next) {
    res.json({
      result: "We are good to go",
    });
});

router.post("/make-payment", async function (req, res, next) {
  try {
    const results = await axios.post(
      `https://patasente.me/phantom-api/pay-with-patasente/${PATASENTE_APIKEY}/${PATASENTE_GATEWAY_KEY}?email=charleskasasira01@gmail.com&amount=2000&phone=${req.body.phone}
      &secret_code=${req.body.secret_code}&mobile_money_company_id=${req.body.mobile_money_company_id}&reason=${req.body.reason}&metadata=${req.body.metadata}`,
      req.body
    );
    res.json({
      "status": "Success",
      "message": results.data
    });
  } catch {
    res.json({
      result: "Failed",
    });
  }
});



module.exports = router;
