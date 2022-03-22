/* eslint-disable max-params */
const Tars = require("@tars/rpc").client
const TarsRPC = require("../proxy/ProductProcessProxy").CivetDevicePluginCenter

class ProductProcessIns {
    proxy = null

    constructor() {
        // Tars.setProperty("locator", "tars.tarsregistry.QueryObj@tcp -h 172.25.0.3 -t 60000 -p 17890")
        this.proxy = Tars.stringToProxy(TarsRPC.ProductProcessProxy, "CivetDevicePluginCenter.ProductManagerServer.ProductProcessObj")
    }

    static getInstance() {
        if (!ProductProcessIns.instance) {
            ProductProcessIns.instance = new ProductProcessIns()
        }
        return ProductProcessIns.instance
    }

    QueryProduct(offset,limit,success,fail){
        this.proxy.QueryAllProduct(offset,limit).then((data) => {
            console.log("baohande", data.response.arguments)
            console.log("调用耗时", data.response.costtime)
            console.log("STRING:", data.response.arguments.res)
            success(data.response.arguments.res,data.response.arguments.result.value,data.response.arguments.count)
        }).catch((e) => {
            console.log("框架错误码：", e.response.error.code)
            console.log("框架错误信息：", e.response.error.message)
            console.log("调用耗时", e.response.costtime)
            fail(e.response.error.message)
        })

    }

    RemoveProduct(productID,success,fail){
        this.proxy.DeleteProduct(productID).then((data) => {
            console.log("baohande", data.response.arguments)
            console.log("调用耗时", data.response.costtime)
            console.log("STRING:", data.response.arguments.res)
            success(data.response.arguments.res)
        }).catch((e) => {
            console.log("框架错误码：", e.response.error.code)
            console.log("框架错误信息：", e.response.error.message)
            console.log("调用耗时", e.response.costtime)
            fail(e.response.error.message)
        })
    }

    UpdateProduct(product,key,value,success,fail){
        let newProduct = new TarsRPC.Product()
        product.UpdateTime = new Date().getTime().toString()
        newProduct.readFromObject(product
        )
        console.log(newProduct)
        this.proxy.EditProduct(newProduct,key,value).then((data) => {
            console.log("baohande", data.response.arguments)
            console.log("调用耗时", data.response.costtime)
            console.log("STRING:", data.response.arguments.res)
            success(data.response.arguments.res)
        }).catch((e) => {
            console.log("框架错误码：", e.response.error.code)
            console.log("框架错误信息：", e.response.error.message)
            console.log("调用耗时", e.response.costtime)
            fail(e.response.error.message)
        })
    }

    CreateProduct(productID,productName,platform,success,fail){
        let newProduct = new TarsRPC.Product()
        newProduct.readFromObject({
            ProductID : productID,
            ProductName : productName,
            Platform : platform,
            CreateTime :new Date().getTime().toString(),
            }
        )

        this.proxy.CreateProduct(newProduct).then((data) => {
            console.log("baohande", data.response.arguments)
            console.log("调用耗时", data.response.costtime)
            console.log("STRING:", data.response.arguments.res)
            success(data.response.arguments.res)
        }).catch((e) => {
            console.log("框架错误码：", e.response.error.code)
            console.log("框架错误信息：", e.response.error.message)
            console.log("调用耗时", e.response.costtime)
            fail(e.response.error.message)
        })
    }
}

exports = module.exports = ProductProcessIns
