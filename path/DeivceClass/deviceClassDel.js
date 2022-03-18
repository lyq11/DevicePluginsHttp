const express = require("express")
const router = express.Router()
const check = require("express-validator/check").check
const checktoken = require("../../middleware/verify_mid")
const validationResult = require("express-validator/check").validationResult
const rpcIns = require("../../ins/DeviceClassProcessIns").getInstance()
router.post("/deviceClass/del", [
    check("devclass_id")
        .notEmpty()
        .withMessage("devclass_id can not be empty"),
    checktoken
], function (req, res) {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.json({ errors: errors.mapped() })
    }

    rpcIns.RemoveDevClass(req.body["devclass_id"],(result) => {
            console.log(result)
            if (result === 1) {
                res.json({ status: 1, message: "del success" })
            } else {
                res.json({ status: -1, message: "del fail" })
            }
        }, (error) => {
            res.json({ status: -1, message: error })
        })
})
module.exports = router

