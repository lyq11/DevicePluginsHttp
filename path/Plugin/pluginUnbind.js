const express = require("express")
const router = express.Router()
const check = require("express-validator/check").check
const checkToken = require("../../middleware/verify_mid")
const validationResult = require("express-validator/check").validationResult
const rpcIns = require("../../ins/ManProcessIns").getInstance()
router.post("/plugins/bind/unbind", [
    check("bind_id")
        .notEmpty()
        .isNumeric()
        .withMessage("number can not be empty"),checkToken
], function (req, res) {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.json({ errors: errors.mapped() })
    }
    rpcIns.unBindBindPlugProduct(req.body["bind_id"],(result) => {
        if (result === 1) {
            res.json({ status: 1, message: "unbind success" })
        } else {
            res.json({ status: -1, message: "unbind fail"})
        }
    }, (error) => {
        res.json({ status: -1, message: error })
    })
})

module.exports = router
