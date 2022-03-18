// 查询公司绑定与产品ID
const express = require("express")
const router = express.Router()
const check = require("express-validator/check").check
const checkToken = require("../../middleware/verify_mid")
const validationResult = require("express-validator/check").validationResult
const rpcIns = require("../../ins/DeviceAuthProcessIns").getInstance()
router.post("/device/auth/queryBindCoWithProdID", [
    check("offset")
        .notEmpty()
        .withMessage("offset can not be empty"),
    check("limit")
        .notEmpty()
        .withMessage("limit can not be empty"),
    check("ProductID")
        .notEmpty()
        .withMessage("ProductID can not be empty"),checkToken
], function (req, res) {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.json({ errors: errors.mapped() })
    }

    rpcIns.queryCompanyBindWithProductID(req.body["offset"], req.body["limit"], req.body["ProductID"], (result,data) => {
        console.log(result)
        if (result === 1) {
            res.json({ status: 1, message: data })
        } else {
            res.json({ status: -1, message: data})
        }
    }, (error) => {
        res.json({ status: -1, message: error })
    })
})
module.exports = router
