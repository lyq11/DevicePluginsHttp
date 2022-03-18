// 解绑设备公司
const express = require("express")
const router = express.Router()
const check = require("express-validator/check").check
const checkToken = require("../../middleware/verify_mid")
const validationResult = require("express-validator/check").validationResult
const rpcIns = require("../../ins/DeviceAuthProcessIns").getInstance()
router.post("/device/auth/unBindDevWithCo", [
    check("bind_id")
        .notEmpty()
        .isNumeric()
        .withMessage("bind_id can not be empty"),checkToken
], function (req, res) {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.json({ errors: errors.mapped() })
    }

    rpcIns.unBindDeviceCompany(req.body["bind_id"], (result) => {
        console.log(result)
        if (result === 1) {
            res.json({ status: 1, message: "unbind success" })
        } else {
            res.json({ status: -1, message: "ubind fail" })
        }
    }, (error) => {
        res.json({ status: -1, message: error })
    })
})
module.exports = router
