const Tars = require("@tars/rpc").client
const TarsRPC = require("../proxy/ManProcessProxy").CivetDevicePluginCenter

class ManProcessIns {
    proxy = null

    constructor() {
        Tars.setProperty("locator", "tars.tarsregistry.QueryObj@tcp -h 172.25.0.3 -t 60000 -p 17890")
        this.proxy = Tars.stringToProxy(TarsRPC.ManProcessProxy, "CivetDevicePluginCenter.PluginsManagement.ManProcessObj")
    }

    static getInstance() {
        if (!ManProcessIns.instance) {
            ManProcessIns.instance = new ManProcessIns()
        }
        return ManProcessIns.instance
    }
    PluginCreate(name,path,success,fail){
        let newProduct = new TarsRPC.Plugin()
        newProduct.readFromObject({
            Name : name,
            Enable : false,
            Path : path,
                CreateTime :new Date().getTime().toString(),
            }
        )
        this.proxy.CreatePlugin(newProduct).then((data) => {
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
    PluginDelete(ID,success,fail){
        this.proxy.DeletePlugin(ID).then((data) => {
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
    PluginEdit(pluginID,key,value,success,fail){
        let newProduct = new TarsRPC.Plugin()
        pluginID.UpdateTime = new Date().getTime().toString()
        newProduct.readFromObject(
            pluginID
        )
        this.proxy.EditPlugin(newProduct,key,value).then((data) => {
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
    PluginsQuery(offset,limit,success,fail){
        this.proxy.QueryPlugins(offset,limit).then((data) => {
            console.log("baohande", data.response.arguments)
            console.log("调用耗时", data.response.costtime)
            console.log("STRING:", data.response.arguments.res)
            success(data.response.arguments.res,data.response.arguments.Pluginlist.value,data.response.arguments.count)
        }).catch((e) => {
            console.log("框架错误码：", e.response.error.code)
            console.log("框架错误信息：", e.response.error.message)
            console.log("调用耗时", e.response.costtime)
            fail(e.response.error.message)
        })
    }

    bindPlugProduct(productID,plugID,summarise,success,fail){
        let newBind = new TarsRPC.PluginBind()
        newBind.readFromObject({
            ProductID:productID,
            PluginID:plugID,
            Summarise :summarise,
            CreateTime : new Date().getTime().toString()
        })
        this.proxy.Bind(newBind).then((data) => {
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
    unBindBindPlugProduct(bind_id,success,fail){
        let newBind = new TarsRPC.PluginBind()
        newBind.readFromObject({
            ID:bind_id
        })
        console.log(newBind)
        this.proxy.UnBindWithID(newBind).then((data) => {
            console.log("接口返回字段：", data.response.arguments.res)
            console.log("baohande", data.response.arguments)
            console.log("调用耗时", data.response.costtime)
            success(data.response.arguments.res)
        }).catch((e) => {
            console.log("框架错误码：", e.response.error.code)
            console.log("框架错误信息：", e.response.error.message)
            console.log("调用耗时", e.response.costtime)
            fail(e.response.error.message)
        })
    }
    queryBindAll(offset,limit,success,fail){
        this.proxy.QueryBindAll(offset,limit).then((data) => {
            console.log("接口返回字段：", data.response.arguments.res)
            console.log("baohande", data.response.arguments)
            console.log("调用耗时", data.response.costtime)
            success(data.response.arguments.res,data.response.arguments.result.value,data.response.arguments.count)
        }).catch((e) => {
            console.log("框架错误码：", e.response.error.code)
            console.log("框架错误信息：", e.response.error.message)
            console.log("调用耗时", e.response.costtime)
            fail(e.response.error.message)
        })
    }
    queryBindWithProduct(offset,limit,ProductID,success,fail){
        console.log(ProductID)
        this.proxy.QueryBindWithProduct(offset,limit,ProductID).then((data) => {
            console.log("接口返回字段：", data.response.arguments.res)
            console.log("baohande", data.response.arguments)
            console.log("调用耗时", data.response.costtime)
            success(data.response.arguments.res,data.response.arguments.result.value,data.response.arguments.count)
        }).catch((e) => {
            console.log("框架错误码：", e.response.error.code)
            console.log("框架错误信息：", e.response.error.message)
            console.log("调用耗时", e.response.costtime)
            fail(e.response.error.message)
        })
    }
    queryBindWithPluginID(offset,limit,PluginID,success,fail){
        this.proxy.QueryBindWithPluginID(offset,limit,PluginID).then((data) => {
            console.log("接口返回字段：", data.response.arguments.res)
            console.log("baohande", data.response.arguments)
            console.log("调用耗时", data.response.costtime)
            success(data.response.arguments.res,data.response.arguments.result.value,data.response.arguments.count)
        }).catch((e) => {
            console.log("框架错误码：", e.response.error.code)
            console.log("框架错误信息：", e.response.error.message)
            console.log("调用耗时", e.response.costtime)
            fail(e.response.error.message)
        })
    }
}

exports = module.exports = ManProcessIns
