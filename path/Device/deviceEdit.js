const express = require("express")
const router = express.Router()
const check = require("express-validator/check").check
const checkToken = require("../../middleware/verify_mid")
const validationResult = require("express-validator/check").validationResult
const rpcIns = require("../../ins/DeviceProcessIns").getInstance()
router.post("/device/edit", [
    check("id")
        .notEmpty()
        .isNumeric()
        .withMessage("Password can not be empty"),checkToken
], function (req, res) {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.json({errors: errors.mapped()})
    }
    console.log(req.header("x-token"))
    if (req.header("x-token") === undefined || req.header("x-token") === "") {
        res.json({status: -1, message: "Query fail"})
    } else {
        let data = {}
        if ("id" in req.body){
            data.ID  = req.body["id"]
        }
        if ("product_id" in req.body){
            data.ProductID  = req.body["product_id"]
        }
        if ("deivceClassID" in req.body){
            data.DeivceClassID = req.body["deivceClassID"]
        }
        if ("deivceID" in req.body){
            data.DeivceID =req.body["deivceID"]
        }
        if ("online" in req.body){
            data.Online =req.body["online"]
        }
        rpcIns.deviceUpdate(data,"id",req.body["id"],(result) => {
            if (result === 1) {
                res.json({status: 1, message: "edit success"})
            } else {
                res.json({status: -1, message: "edit fail"})
            }
        }, (error) => {
            res.json({status: -1, message: error})
        })
    }

})
module.exports = router
