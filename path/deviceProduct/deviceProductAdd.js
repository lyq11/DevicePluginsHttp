const express = require("express")
const router = express.Router()
const check = require("express-validator/check").check
const checkToken = require("../../middleware/verify_mid")
const validationResult = require("express-validator/check").validationResult
const rpcIns = require("../../ins/ProductProcessIns").getInstance()
router.post("/product/add", [
    check("productID")
        .notEmpty()
        .withMessage("product can not be empty"),
    check("productName")
        .notEmpty()
        .withMessage(" can not be empty"),
    check("platform")
        .notEmpty()
        .withMessage(" can not be empty"),checkToken
], function (req, res) {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.json({ errors: errors.mapped() })
    }

    rpcIns.CreateProduct(req.body["productID"],req.body["productName"],req.body["platform"], (result) => {
        console.log(result)
        if (result === 1) {
            res.json({ status: 1, message: "add success" })
        } else {
            res.json({ status: -1, message: "add fail" })
        }
    }, (error) => {
        res.json({ status: -1, message: error })
    })
})
module.exports = router
