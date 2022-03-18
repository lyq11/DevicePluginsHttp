const express = require("express")
const router = express.Router()
const check = require("express-validator/check").check
const checkToken = require("../../middleware/verify_mid")
const validationResult = require("express-validator/check").validationResult
const rpcIns = require("../../ins/ManProcessIns").getInstance()
router.post("/plugins/bind/query/productid", [
    check("number")
        .notEmpty()
        .isNumeric()
        .withMessage("number can not be empty"),
    check("pages")
        .notEmpty()
        .isNumeric()
        .withMessage("pages can not be empty"),
    check("product_id")
        .notEmpty()
        .withMessage("pages can not be empty"),checkToken
], function (req, res) {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.json({ errors: errors.mapped() })
    }

    rpcIns.queryBindWithProduct(req.body["number"], req.body["pages"],req.body["product_id"],(result,data,count) => {
        console.log(result)
        if (result === 1) {
            res.json({ status: 1, message: data ,count:count})
        } else {
            res.json({ status: -1, message: data ,count:count})
        }
    }, (error) => {
        res.json({ status: -1, message: error })
    })
})

module.exports = router
