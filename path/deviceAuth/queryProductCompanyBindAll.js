// 查询产品公司全部绑定
const express = require("express")
const router = express.Router()
const check = require("express-validator/check").check
const checkToken = require("../../middleware/verify_mid")
const validationResult = require("express-validator/check").validationResult
const rpcIns = require("../../ins/DeviceAuthProcessIns").getInstance()
router.post("/device/auth/queryBindProdWithCoAll", [
    check("offset")
        .notEmpty()
        .isNumeric()
        .withMessage("offset can not be empty"),
    check("limit")
        .notEmpty()
        .isNumeric()
        .withMessage("limit can not be empty"),checkToken
], function (req, res) {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.json({ errors: errors.mapped() })
    }

    rpcIns.queryProductCompanyBindAll(req.body["offset"], req.body["limit"], (result,data) => {
        console.log(result)
        if (result === 1) {
            res.json({ status: 1, message: data })
        } else {
            res.json({ status: -1, message: data })
        }
    }, (error) => {
        res.json({ status: -1, message: error })
    })
})
module.exports = router
