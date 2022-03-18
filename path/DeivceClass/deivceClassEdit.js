const express = require("express")
const checkToken = require("../../middleware/verify_mid")
const router = express.Router()
const check = require("express-validator/check").check
const validationResult = require("express-validator/check").validationResult
const rpcIns = require("../../ins/DeviceClassProcessIns").getInstance()
router.post("/deviceClass/edit", [
    check("devclass_id")
        .notEmpty()
        .isNumeric()
        .withMessage("Password can not be empty")
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
        if ("devclass_id" in req.body){
            data.ID = Number(req.body["devclass_id"])
        }
        if ("tag" in req.body){
            data.Tag = req.body["tag"]
        }
        if ("router" in req.body){
            data.Router =req.body["router"]
        }
        if ("permission" in req.body){
            data.Permission =req.body["permission"]
        }
        console.log(data)
        rpcIns.EditDevClass(data,"id",req.body["devclass_id"],(result) => {
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
