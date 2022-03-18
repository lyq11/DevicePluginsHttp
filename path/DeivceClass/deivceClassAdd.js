const express = require("express")
const router = express.Router()
const check = require("express-validator/check").check
const checktoken = require("../../middleware/verify_mid")
const validationResult = require("express-validator/check").validationResult
const rpcIns = require("../../ins/DeviceClassProcessIns").getInstance()
router.post("/deviceClass/add", [
    check("tag")
        .notEmpty()
        .withMessage("tag can not be empty"),
    check("name")
        .notEmpty()
        .withMessage("name can not be empty"),
    check("router")
        .notEmpty()
        .withMessage("router can not be empty"),
    check("permission")
        .notEmpty()
        .withMessage("permission can not be empty"),
    checktoken
], function (req, res) {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.json({ errors: errors.mapped() })
    }
    rpcIns.CreateDevClass(req.body["tag"], req.body["name"],req.body["router"],req.body["permission"],(result) => {
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
