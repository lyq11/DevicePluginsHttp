// 绑定设备公司
const express = require("express")
const router = express.Router()
const check = require("express-validator/check").check
const checkToken = require("../../middleware/verify_mid")
const validationResult = require("express-validator/check").validationResult
const rpcIns = require("../../ins/DeviceAuthProcessIns").getInstance()
router.post("/device/auth/bindDevWithCo", [
    check("companyID")
        .notEmpty()
        .isNumeric()
        .withMessage("companyID can not be empty"),
    check("deviceClassID")
        .notEmpty()
        .isNumeric()
        .withMessage("deviceClassID can not be empty"),
    check("summarise")
        .notEmpty()
        .withMessage("summarise can not be empty"),checkToken
], function (req, res) {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.json({ errors: errors.mapped() })
    }
    rpcIns.bindDeviceCompany(req.body["companyID"], req.body["deviceClassID"], req.body["summarise"], (result) => {
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
