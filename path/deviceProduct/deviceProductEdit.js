// 编辑
const express = require("express")
const router = express.Router()
const check = require("express-validator/check").check
const checkToken = require("../../middleware/verify_mid")
const validationResult = require("express-validator/check").validationResult
const rpcIns = require("../../ins/ProductProcessIns").getInstance()
router.post("/product/edit", [
    check("id")
        .notEmpty()
        .withMessage("product can not be empty"),
    checkToken
], function (req, res) {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.json({ errors: errors.mapped() })
    }
    let data = {}
    if ("id" in req.body){
        data.ID  = req.body["id"]
    }
    if ("product_id" in req.body){
        data.ProductID  = req.body["product_id"]
    }
    if ("productName" in req.body){
        data.ProductName =req.body["productName"]
    }
    if ("platform" in req.body){
        data.Platform =req.body["platform"]
    }
    rpcIns.UpdateProduct(data, "id", req.body["id"], (result) => {
        console.log(result)
        if (result === 1) {
            res.json({ status: 1, message: "edit success" })
        } else {
            res.json({ status: -1, message: "edit fail" })
        }
    }, (error) => {
        res.json({ status: -1, message: error })
    })
})
module.exports = router
