const express = require("express")
const router = express.Router()
const check = require("express-validator/check").check
const checkToken = require("../../middleware/verify_mid")
const validationResult = require("express-validator/check").validationResult
const rpcIns = require("../../ins/ManProcessIns").getInstance()
router.post("/plugins/bind/bind", [
    check("product_id")
        .notEmpty()
        .withMessage(" can not be empty"),
    check("plugin_id")
        .isNumeric()
        .notEmpty()
        .withMessage(" can not be empty"),
    check("summarise")
        .notEmpty()
        .withMessage(" can not be empty"),checkToken
], function (req, res) {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.json({ errors: errors.mapped() })
    }

    rpcIns.bindPlugProduct(req.body["product_id"], req.body["plugin_id"],req.body["summarise"],(result) => {
            console.log(result)
            if (result === 1) {
                res.json({ status: 1, message: "bind success" })
            } else {
                res.json({ status: -1, message: "bind fail" })
            }
        }, (error) => {
            res.json({ status: -1, message: error })
        })
})
module.exports = router
