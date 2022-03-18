const Tars = require("@tars/rpc").client
const TarsRPC = require("../proxy/DeviceProcessProxy").CivetDevicePluginCenter

class DeviceProcessIns {
    proxy = null

    constructor() {
        // Tars.setProperty("locator", "tars.tarsregistry.QueryObj@tcp -h 172.25.0.3 -t 60000 -p 17890")
        this.proxy = Tars.stringToProxy(TarsRPC.DeviceProcessProxy, "CivetDevicePluginCenter.DeviceManagerServer.DeviceProcessObj")
    }

    static getInstance() {
        if (!DeviceProcessIns.instance) {
            DeviceProcessIns.instance = new DeviceProcessIns()
        }
        return DeviceProcessIns.instance
    }
    deviceUpdate(device,key,value,success,fail){
        let newProduct = new TarsRPC.Device()
        newProduct.readFromObject(device)
        this.proxy.EditDevice(newProduct,key,value).then((data) => {
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
    deviceQuery(offset,limit,success,fail){
        this.proxy.QueryAllDevice(offset,limit).then((data) => {
            console.log("baohande", data.response.arguments)
            console.log("调用耗时", data.response.costtime)
            console.log("STRING:", data.response.arguments.res)
            success(data.response.arguments.res,data.response.arguments.devicelist.value,data.response.arguments.count)
        }).catch((e) => {
            console.log("框架错误码：", e.response.error.code)
            console.log("框架错误信息：", e.response.error.message)
            console.log("调用耗时", e.response.costtime)
            fail(e.response.error.message)
        })
    }
    deviceRemove(ID,success,fail){
        this.proxy.RemoveDevice(ID).then((data) => {
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
    deviceCreate(productID,productName,DeviceID,success,fail){
        let newProduct = new TarsRPC.Device()
        newProduct.readFromObject({
            ProductID : productID,
            DeivceClassID : productName,
            DeivceID : DeviceID,
            online : 0,
            }
        )
        this.proxy.CreateDevice(newProduct).then((data) => {
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

exports = module.exports = DeviceProcessIns
