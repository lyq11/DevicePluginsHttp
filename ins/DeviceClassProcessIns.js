const Tars = require("@tars/rpc").client
const TarsRPC = require("../proxy/DeviceClassProcessProxy").CivetDevicePluginCenter

class DeviceClassProcessIns {
    proxy = null

    constructor() {
        // Tars.setProperty("locator", "tars.tarsregistry.QueryObj@tcp -h 172.25.0.3 -t 60000 -p 17890")
        this.proxy = Tars.stringToProxy(TarsRPC.DeviceClassProcessProxy, "CivetDevicePluginCenter.DeviceClassManagerServer.DeviceClassProcessObj")
    }
    static getInstance() {
        if (!DeviceClassProcessIns.instance) {
            DeviceClassProcessIns.instance = new DeviceClassProcessIns()
        }
        return DeviceClassProcessIns.instance
    }
    CreateDevClass(tag,name,router,permission,success,fail){
        let newProduct = new TarsRPC.DeviceClass()
        newProduct.readFromObject({
            Tag:tag,
            Name:name,
            Router:router,
            Permission:permission
            }
        )
        this.proxy.CreateDeviceClass(newProduct).then((data) => {
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
    RemoveDevClass(devclass_id,success,fail){
        this.proxy.RemoveDeviceClass(devclass_id).then((data) => {
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
    EditDevClass(info,key,value,success,fail){
        let editProduct = new TarsRPC.DeviceClass()
        editProduct.readFromObject(info)
        console.log(editProduct)
        this.proxy.EditDeviceClass(editProduct,key,value).then((data) => {
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
    QueryAllDevice(offset,limit,success,fail){
        this.proxy.QueryAllDevice(offset,limit).then((data) => {
            console.log("baohande", data.response.arguments)
            console.log("调用耗时", data.response.costtime)
            console.log("STRING:", data.response.arguments.res)
            success(data.response.arguments.res,data.response.arguments.deviceClasslist.value,data.response.arguments.count)
        }).catch((e) => {
            console.log("框架错误码：", e.response.error.code)
            console.log("框架错误信息：", e.response.error.message)
            console.log("调用耗时", e.response.costtime)
            fail(e.response.error.message)
        })
    }
}

exports = module.exports = DeviceClassProcessIns
