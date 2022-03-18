const express = require("express")
const checkToken = require("../../middleware/verify_mid")
const router = express.Router()
const check = require("express-validator/check").check
const validationResult = require("express-validator/check").validationResult
const rpcIns = require("../../ins/ManProcessIns").getInstance()
router.post("/plugins/edit", [
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
        if ("Name" in req.body){
            data.Name  = req.body["Name"]
        }
        if ("Enable" in req.body){
            data.Enable = req.body["Enable"]
        }
        if ("Path" in req.body){
            data.Path =req.body["Path"]
        }
        rpcIns.PluginEdit(data,"id",req.body["id"],(result) => {
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
