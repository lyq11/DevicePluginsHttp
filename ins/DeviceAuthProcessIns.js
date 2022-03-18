const Tars = require("@tars/rpc").client
const TarsRPC = require("../proxy/DeviceAuthProcessProxy").CivetDevicePluginCenter

class DeviceAuthProcessIns {
    proxy = null

    constructor() {
        // Tars.setProperty("locator", "tars.tarsregistry.QueryObj@tcp -h 172.25.0.3 -t 60000 -p 17890")
        this.proxy = Tars.stringToProxy(TarsRPC.DeviceAuthProcessProxy, "CivetDevicePluginCenter.DeviceAuthServer.DeviceAuthProcessObj")
    }

    static getInstance() {
        if (!DeviceAuthProcessIns.instance) {
            DeviceAuthProcessIns.instance = new DeviceAuthProcessIns()
        }
        return DeviceAuthProcessIns.instance
    }
    bindProductCompany(companyID,deviceClassID,summarise,success,fail){
        let newBind = new TarsRPC.CompanyProductBind()
        newBind.readFromObject({
                CompanyID : companyID,
                ProductID : deviceClassID,
                Summarise : summarise,
                CreateTime: new Date().getTime().toString()
            }
        )
        console.log(newBind)
        this.proxy.BindProductCompany(newBind).then((data) => {
            console.log("接口返回字段：", data.response.arguments.res)
            console.log("调用耗时", data.response.costtime)
            success(data.response.arguments.res)
        }).catch((e) => {
            console.log("框架错误码：", e.response.error.code)
            console.log("框架错误信息：", e.response.error.message)
            console.log("调用耗时", e.response.costtime)
            fail(e.response.error.message)
        })
    }
    bindDeviceCompany(companyID,deviceClassID,summarise,success,fail) {
        let newBind = new TarsRPC.CompanyDeivceBind()
        newBind.readFromObject({
            CompanyID : companyID,
            DeivceClassID : deviceClassID,
            Summarise : summarise,
            CreateTime:new Date().getTime().toString()
            }
        )
        console.log(newBind)
        this.proxy.BindDeviceCompany(newBind).then((data) => {
            console.log("接口返回字段：", data.response.arguments.res)
            console.log("调用耗时", data.response.costtime)
            success(data.response.arguments.res)
        }).catch((e) => {
            console.log("框架错误码：", e.response.error.code)
            console.log("框架错误信息：", e.response.error.message)
            console.log("调用耗时", e.response.costtime)
            fail(e.response.error.message)
        })
    }
    unBindProductCompany(bind_id,success,fail) {
        let bind = new TarsRPC.CompanyProductBind()
        bind.readFromObject(
            {ID: bind_id}
        )
        this.proxy.UnBindProductCompany(bind).then((data) => {
            console.log("接口返回字段：", data.response.arguments.res)
              console.log("调用耗时", data.response.costtime)
            success(data.response.arguments.res)
        }).catch((e) => {
            console.log("框架错误码：", e.response.error.code)
            console.log("框架错误信息：", e.response.error.message)
            console.log("调用耗时", e.response.costtime)
            fail(e.response.error.message)
        })
    }
    unBindDeviceCompany(bind_id,success,fail) {
        let bind = new TarsRPC.CompanyDeivceBind()
        bind.readFromObject(
            {ID: bind_id}
        )
        this.proxy.UnBindDeviceCompany(bind).then((data) => {
            console.log("接口返回字段：", data.response.arguments.res)
            console.log("调用耗时", data.response.costtime)
            success(data.response.arguments.res)
        }).catch((e) => {
            console.log("框架错误码：", e.response.error.code)
            console.log("框架错误信息：", e.response.error.message)
            console.log("调用耗时", e.response.costtime)
            fail(e.response.error.message)
        })
    }

    queryCompanyDeviceCBindAll(offset,limit,success,fail) {
        this.proxy.QueryCompanyDeviceCBindAll(offset,limit).then((data) => {
            console.log("接口返回字段：", data.response.arguments.res)
            console.log("调用耗时", data.response.costtime)
            success(data.response.arguments.res,data.response.arguments.result.value,data.response.arguments.count)
        }).catch((e) => {
            console.log("框架错误码：", e.response.error.code)
            console.log("框架错误信息：", e.response.error.message)
            console.log("调用耗时", e.response.costtime)
            fail(e.response.error.message)
        })
    }
    queryProductCompanyBindAll(offset,limit,success,fail) {
        this.proxy.QueryProductCompanyBindAll(offset,limit).then((data) => {
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
    queryCompanyBindWithProductID(offset,limit,ProductID,success,fail){
        this.proxy.QueryCompanyBindWithProductID(offset,limit,ProductID).then((data) => {
            console.log("接口返回字段：", data.response.arguments.result)
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
    queryCompanyBindWithDeviceC(offset,limit,DeviceClassID,success,fail) {
        this.proxy.QueryCompanyBindWithDeviceC(offset,limit,DeviceClassID).then((data) => {
            console.log("接口返回字段：", data.response.arguments.result)
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

    queryDeviceCBindWithCompanyID(offset,limit,CompanyID,success,fail) {
        this.proxy.QueryDeviceCBindWithCompanyID(offset,limit,CompanyID).then((data) => {
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
    queryProductBindWithCompanyID(offset,limit,CompanyID,success,fail) {
        this.proxy.QueryProductBindWithCompanyID(offset,limit,CompanyID).then((data) => {
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

exports = module.exports = DeviceAuthProcessIns
