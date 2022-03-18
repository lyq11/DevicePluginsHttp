// 查询
const express = require("express")
const router = express.Router()
const check = require("express-validator/check").check
const checkToken = require("../../middleware/verify_mid")
const validationResult = require("express-validator/check").validationResult
const rpcIns = require("../../ins/ProductProcessIns").getInstance()
router.post("/product/query", [
    check("offset")
        .notEmpty()
        .withMessage("product can not be empty"),
    check("limit")
        .notEmpty()
        .withMessage("product can not be empty"),checkToken
], function (req, res) {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.json({ errors: errors.mapped() })
    }

    rpcIns.QueryProduct(req.body["offset"], req.body["limit"], (result,data,count) => {
        console.log(result)
        if (result === 1) {
            res.json({ status: 1, message: data ,count:count})
        } else {
            res.json({ status: -1, message: "query fail" })
        }
    }, (error) => {
        res.json({ status: -1, message: error })
    })
})
module.exports = router
