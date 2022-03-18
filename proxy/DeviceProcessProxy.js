// **********************************************************************
// Parsed By TarsParser(2.4.5), Generated By tars2node(20200707)
// TarsParser Maintained By <TARS> and tars2node Maintained By <superzheng>
// Generated from "DeviceProcess.tars" by Client Mode
// **********************************************************************

/* eslint-disable */

"use strict";

var assert    = require("assert");
var TarsStream = require("@tars/stream");
var TarsError  = require("@tars/rpc").error;

var _hasOwnProperty = Object.prototype.hasOwnProperty;
var _makeError = function (data, message, type) {
    var error = new Error(message || "");
    error.request = data.request;
    error.response = {
        "costtime" : data.request.costtime
    };
    if (type === TarsError.CLIENT.DECODE_ERROR) {
        error.name = "DECODE_ERROR";
        error.response.error = {
            "code" : type,
            "message" : message
        };
    } else {
        error.name = "RPC_ERROR";
        error.response.error = data.error;
    }
    return error;
};

var CivetDevicePluginCenter = CivetDevicePluginCenter || {};
module.exports.CivetDevicePluginCenter = CivetDevicePluginCenter;

CivetDevicePluginCenter.DeviceProcessProxy = function () {
    this._name    = undefined;
    this._worker  = undefined;
};

CivetDevicePluginCenter.DeviceProcessProxy.prototype.setTimeout = function (iTimeout) {
    this._worker.timeout = iTimeout;
};

CivetDevicePluginCenter.DeviceProcessProxy.prototype.getTimeout = function () {
    return this._worker.timeout;
};

CivetDevicePluginCenter.DeviceProcessProxy.prototype.setVersion = function (iVersion) {
    this._worker.version = iVersion;
};

CivetDevicePluginCenter.DeviceProcessProxy.prototype.getVersion = function () {
    return this._worker.version;
};

CivetDevicePluginCenter.Device = function() {
    this.ID = 0;
    this.ProductID = 0;
    this.DeivceClassID = 0;
    this.DeivceID = "";
    this.online = 0;
    this._classname = "CivetDevicePluginCenter.Device";
};
CivetDevicePluginCenter.Device._classname = "CivetDevicePluginCenter.Device";
CivetDevicePluginCenter.Device._write = function (os, tag, value) { os.writeStruct(tag, value); };
CivetDevicePluginCenter.Device._read  = function (is, tag, def) { return is.readStruct(tag, true, def); };
CivetDevicePluginCenter.Device._readFrom = function (is) {
    var tmp = new CivetDevicePluginCenter.Device;
    tmp.ID = is.readInt32(0, false, 0);
    tmp.ProductID = is.readInt32(1, false, 0);
    tmp.DeivceClassID = is.readInt32(2, false, 0);
    tmp.DeivceID = is.readString(3, false, "");
    tmp.online = is.readInt32(4, false, 0);
    return tmp;
};
CivetDevicePluginCenter.Device.prototype._writeTo = function (os) {
    os.writeInt32(0, this.ID);
    os.writeInt32(1, this.ProductID);
    os.writeInt32(2, this.DeivceClassID);
    os.writeString(3, this.DeivceID);
    os.writeInt32(4, this.online);
};
CivetDevicePluginCenter.Device.prototype._equal = function () {
    assert.fail("this structure not define key operation");
};
CivetDevicePluginCenter.Device.prototype._genKey = function () {
    if (!this._proto_struct_name_) {
        this._proto_struct_name_ = "STRUCT" + Math.random();
    }
    return this._proto_struct_name_;
};
CivetDevicePluginCenter.Device.prototype.toObject = function() { 
    return {
        "ID" : this.ID,
        "ProductID" : this.ProductID,
        "DeivceClassID" : this.DeivceClassID,
        "DeivceID" : this.DeivceID,
        "online" : this.online
    };
};
CivetDevicePluginCenter.Device.prototype.readFromObject = function(json) { 
    _hasOwnProperty.call(json, "ID") && (this.ID = json.ID);
    _hasOwnProperty.call(json, "ProductID") && (this.ProductID = json.ProductID);
    _hasOwnProperty.call(json, "DeivceClassID") && (this.DeivceClassID = json.DeivceClassID);
    _hasOwnProperty.call(json, "DeivceID") && (this.DeivceID = json.DeivceID);
    _hasOwnProperty.call(json, "online") && (this.online = json.online);
    return this;
};
CivetDevicePluginCenter.Device.prototype.toBinBuffer = function () {
    var os = new TarsStream.TarsOutputStream();
    this._writeTo(os);
    return os.getBinBuffer();
};
CivetDevicePluginCenter.Device.new = function () {
    return new CivetDevicePluginCenter.Device();
};
CivetDevicePluginCenter.Device.create = function (is) {
    return CivetDevicePluginCenter.Device._readFrom(is);
};

var __CivetDevicePluginCenter_DeviceProcess$CreateDevice$IF = {
    "name" : "CreateDevice",
    "return" : "int32",
    "arguments" : [{
        "name" : "device",
        "class" : "CivetDevicePluginCenter.Device",
        "direction" : "in"
    }, {
        "name" : "res",
        "class" : "int32",
        "direction" : "out"
    }]
};

var __CivetDevicePluginCenter_DeviceProcess$CreateDevice$IE = function (device) {
    var os = new TarsStream.TarsOutputStream();
    os.writeStruct(1, device);
    return os.getBinBuffer();
};

var __CivetDevicePluginCenter_DeviceProcess$CreateDevice$ID = function (data) {
    try {
        var is = new TarsStream.TarsInputStream(data.response.sBuffer);
        return {
            "request" : data.request,
            "response" : {
                "costtime" : data.request.costtime,
                "return" : is.readInt32(0, true, 0),
                "arguments" : {
                    "res" : is.readInt32(2, true, 0)
                }
            }
        };
    } catch (e) {
        throw _makeError(data, e.message, TarsError.CLIENT.DECODE_ERROR);
    }
};

var __CivetDevicePluginCenter_DeviceProcess$CreateDevice$PE = function (device, __$PROTOCOL$VERSION) {
    var tup = new TarsStream.UniAttribute();
    tup.tupVersion = __$PROTOCOL$VERSION;
    tup.writeStruct("device", device);
    return tup;
};

var __CivetDevicePluginCenter_DeviceProcess$CreateDevice$PD = function (data) {
    try {
        var tup = data.response.tup;
        return {
            "request" : data.request,
            "response" : {
                "costtime" : data.request.costtime,
                "return" : tup.readInt32("", 0),
                "arguments" : {
                    "res" : tup.readInt32("res")
                }
            }
        };
    } catch (e) {
        throw _makeError(data, e.message, TarsError.CLIENT.DECODE_ERROR);
    }
};

var __CivetDevicePluginCenter_DeviceProcess$CreateDevice$ER = function (data) {
    throw _makeError(data, "Call DeviceProcess::CreateDevice failed");
};

CivetDevicePluginCenter.DeviceProcessProxy.prototype.CreateDevice = function (device) {
    var version = this._worker.version;
    if (version === TarsStream.Tup.TUP_SIMPLE || version === TarsStream.Tup.TUP_COMPLEX) {
        return this._worker.tup_invoke("CreateDevice", __CivetDevicePluginCenter_DeviceProcess$CreateDevice$PE(device, version), arguments[arguments.length - 1], __CivetDevicePluginCenter_DeviceProcess$CreateDevice$IF).then(__CivetDevicePluginCenter_DeviceProcess$CreateDevice$PD, __CivetDevicePluginCenter_DeviceProcess$CreateDevice$ER);
    } else {
        return this._worker.tars_invoke("CreateDevice", __CivetDevicePluginCenter_DeviceProcess$CreateDevice$IE(device), arguments[arguments.length - 1], __CivetDevicePluginCenter_DeviceProcess$CreateDevice$IF).then(__CivetDevicePluginCenter_DeviceProcess$CreateDevice$ID, __CivetDevicePluginCenter_DeviceProcess$CreateDevice$ER);
    }
};
CivetDevicePluginCenter.DeviceProcessProxy.CreateDevice = __CivetDevicePluginCenter_DeviceProcess$CreateDevice$IF;

var __CivetDevicePluginCenter_DeviceProcess$EditDevice$IF = {
    "name" : "EditDevice",
    "return" : "int32",
    "arguments" : [{
        "name" : "info",
        "class" : "CivetDevicePluginCenter.Device",
        "direction" : "in"
    }, {
        "name" : "searchKey",
        "class" : "string",
        "direction" : "in"
    }, {
        "name" : "searchValue",
        "class" : "string",
        "direction" : "in"
    }, {
        "name" : "res",
        "class" : "int32",
        "direction" : "out"
    }]
};

var __CivetDevicePluginCenter_DeviceProcess$EditDevice$IE = function (info, searchKey, searchValue) {
    var os = new TarsStream.TarsOutputStream();
    os.writeStruct(1, info);
    os.writeString(2, searchKey);
    os.writeString(3, searchValue);
    return os.getBinBuffer();
};

var __CivetDevicePluginCenter_DeviceProcess$EditDevice$ID = function (data) {
    try {
        var is = new TarsStream.TarsInputStream(data.response.sBuffer);
        return {
            "request" : data.request,
            "response" : {
                "costtime" : data.request.costtime,
                "return" : is.readInt32(0, true, 0),
                "arguments" : {
                    "res" : is.readInt32(4, true, 0)
                }
            }
        };
    } catch (e) {
        throw _makeError(data, e.message, TarsError.CLIENT.DECODE_ERROR);
    }
};

var __CivetDevicePluginCenter_DeviceProcess$EditDevice$PE = function (info, searchKey, searchValue, __$PROTOCOL$VERSION) {
    var tup = new TarsStream.UniAttribute();
    tup.tupVersion = __$PROTOCOL$VERSION;
    tup.writeStruct("info", info);
    tup.writeString("searchKey", searchKey);
    tup.writeString("searchValue", searchValue);
    return tup;
};

var __CivetDevicePluginCenter_DeviceProcess$EditDevice$PD = function (data) {
    try {
        var tup = data.response.tup;
        return {
            "request" : data.request,
            "response" : {
                "costtime" : data.request.costtime,
                "return" : tup.readInt32("", 0),
                "arguments" : {
                    "res" : tup.readInt32("res")
                }
            }
        };
    } catch (e) {
        throw _makeError(data, e.message, TarsError.CLIENT.DECODE_ERROR);
    }
};

var __CivetDevicePluginCenter_DeviceProcess$EditDevice$ER = function (data) {
    throw _makeError(data, "Call DeviceProcess::EditDevice failed");
};

CivetDevicePluginCenter.DeviceProcessProxy.prototype.EditDevice = function (info, searchKey, searchValue) {
    var version = this._worker.version;
    if (version === TarsStream.Tup.TUP_SIMPLE || version === TarsStream.Tup.TUP_COMPLEX) {
        return this._worker.tup_invoke("EditDevice", __CivetDevicePluginCenter_DeviceProcess$EditDevice$PE(info, searchKey, searchValue, version), arguments[arguments.length - 1], __CivetDevicePluginCenter_DeviceProcess$EditDevice$IF).then(__CivetDevicePluginCenter_DeviceProcess$EditDevice$PD, __CivetDevicePluginCenter_DeviceProcess$EditDevice$ER);
    } else {
        return this._worker.tars_invoke("EditDevice", __CivetDevicePluginCenter_DeviceProcess$EditDevice$IE(info, searchKey, searchValue), arguments[arguments.length - 1], __CivetDevicePluginCenter_DeviceProcess$EditDevice$IF).then(__CivetDevicePluginCenter_DeviceProcess$EditDevice$ID, __CivetDevicePluginCenter_DeviceProcess$EditDevice$ER);
    }
};
CivetDevicePluginCenter.DeviceProcessProxy.EditDevice = __CivetDevicePluginCenter_DeviceProcess$EditDevice$IF;

var __CivetDevicePluginCenter_DeviceProcess$QueryAllDevice$IF = {
    "name" : "QueryAllDevice",
    "return" : "int32",
    "arguments" : [{
        "name" : "offset",
        "class" : "int32",
        "direction" : "in"
    }, {
        "name" : "limit",
        "class" : "int32",
        "direction" : "in"
    }, {
        "name" : "devicelist",
        "class" : "list(CivetDevicePluginCenter.Device)",
        "direction" : "out"
    }, {
        "name" : "count",
        "class" : "int32",
        "direction" : "out"
    }, {
        "name" : "res",
        "class" : "int32",
        "direction" : "out"
    }]
};

var __CivetDevicePluginCenter_DeviceProcess$QueryAllDevice$IE = function (offset, limit) {
    var os = new TarsStream.TarsOutputStream();
    os.writeInt32(1, offset);
    os.writeInt32(2, limit);
    return os.getBinBuffer();
};

var __CivetDevicePluginCenter_DeviceProcess$QueryAllDevice$ID = function (data) {
    try {
        var is = new TarsStream.TarsInputStream(data.response.sBuffer);
        return {
            "request" : data.request,
            "response" : {
                "costtime" : data.request.costtime,
                "return" : is.readInt32(0, true, 0),
                "arguments" : {
                    "devicelist" : is.readList(3, true, TarsStream.List(CivetDevicePluginCenter.Device)),
                    "count" : is.readInt32(4, true, 0),
                    "res" : is.readInt32(5, true, 0)
                }
            }
        };
    } catch (e) {
        throw _makeError(data, e.message, TarsError.CLIENT.DECODE_ERROR);
    }
};

var __CivetDevicePluginCenter_DeviceProcess$QueryAllDevice$PE = function (offset, limit, __$PROTOCOL$VERSION) {
    var tup = new TarsStream.UniAttribute();
    tup.tupVersion = __$PROTOCOL$VERSION;
    tup.writeInt32("offset", offset);
    tup.writeInt32("limit", limit);
    return tup;
};

var __CivetDevicePluginCenter_DeviceProcess$QueryAllDevice$PD = function (data) {
    try {
        var tup = data.response.tup;
        return {
            "request" : data.request,
            "response" : {
                "costtime" : data.request.costtime,
                "return" : tup.readInt32("", 0),
                "arguments" : {
                    "devicelist" : tup.readList("devicelist", TarsStream.List(CivetDevicePluginCenter.Device)),
                    "count" : tup.readInt32("count"),
                    "res" : tup.readInt32("res")
                }
            }
        };
    } catch (e) {
        throw _makeError(data, e.message, TarsError.CLIENT.DECODE_ERROR);
    }
};

var __CivetDevicePluginCenter_DeviceProcess$QueryAllDevice$ER = function (data) {
    throw _makeError(data, "Call DeviceProcess::QueryAllDevice failed");
};

CivetDevicePluginCenter.DeviceProcessProxy.prototype.QueryAllDevice = function (offset, limit) {
    var version = this._worker.version;
    if (version === TarsStream.Tup.TUP_SIMPLE || version === TarsStream.Tup.TUP_COMPLEX) {
        return this._worker.tup_invoke("QueryAllDevice", __CivetDevicePluginCenter_DeviceProcess$QueryAllDevice$PE(offset, limit, version), arguments[arguments.length - 1], __CivetDevicePluginCenter_DeviceProcess$QueryAllDevice$IF).then(__CivetDevicePluginCenter_DeviceProcess$QueryAllDevice$PD, __CivetDevicePluginCenter_DeviceProcess$QueryAllDevice$ER);
    } else {
        return this._worker.tars_invoke("QueryAllDevice", __CivetDevicePluginCenter_DeviceProcess$QueryAllDevice$IE(offset, limit), arguments[arguments.length - 1], __CivetDevicePluginCenter_DeviceProcess$QueryAllDevice$IF).then(__CivetDevicePluginCenter_DeviceProcess$QueryAllDevice$ID, __CivetDevicePluginCenter_DeviceProcess$QueryAllDevice$ER);
    }
};
CivetDevicePluginCenter.DeviceProcessProxy.QueryAllDevice = __CivetDevicePluginCenter_DeviceProcess$QueryAllDevice$IF;

var __CivetDevicePluginCenter_DeviceProcess$RemoveDevice$IF = {
    "name" : "RemoveDevice",
    "return" : "int32",
    "arguments" : [{
        "name" : "DeviceID",
        "class" : "int32",
        "direction" : "in"
    }, {
        "name" : "res",
        "class" : "int32",
        "direction" : "out"
    }]
};

var __CivetDevicePluginCenter_DeviceProcess$RemoveDevice$IE = function (DeviceID) {
    var os = new TarsStream.TarsOutputStream();
    os.writeInt32(1, DeviceID);
    return os.getBinBuffer();
};

var __CivetDevicePluginCenter_DeviceProcess$RemoveDevice$ID = function (data) {
    try {
        var is = new TarsStream.TarsInputStream(data.response.sBuffer);
        return {
            "request" : data.request,
            "response" : {
                "costtime" : data.request.costtime,
                "return" : is.readInt32(0, true, 0),
                "arguments" : {
                    "res" : is.readInt32(2, true, 0)
                }
            }
        };
    } catch (e) {
        throw _makeError(data, e.message, TarsError.CLIENT.DECODE_ERROR);
    }
};

var __CivetDevicePluginCenter_DeviceProcess$RemoveDevice$PE = function (DeviceID, __$PROTOCOL$VERSION) {
    var tup = new TarsStream.UniAttribute();
    tup.tupVersion = __$PROTOCOL$VERSION;
    tup.writeInt32("DeviceID", DeviceID);
    return tup;
};

var __CivetDevicePluginCenter_DeviceProcess$RemoveDevice$PD = function (data) {
    try {
        var tup = data.response.tup;
        return {
            "request" : data.request,
            "response" : {
                "costtime" : data.request.costtime,
                "return" : tup.readInt32("", 0),
                "arguments" : {
                    "res" : tup.readInt32("res")
                }
            }
        };
    } catch (e) {
        throw _makeError(data, e.message, TarsError.CLIENT.DECODE_ERROR);
    }
};

var __CivetDevicePluginCenter_DeviceProcess$RemoveDevice$ER = function (data) {
    throw _makeError(data, "Call DeviceProcess::RemoveDevice failed");
};

CivetDevicePluginCenter.DeviceProcessProxy.prototype.RemoveDevice = function (DeviceID) {
    var version = this._worker.version;
    if (version === TarsStream.Tup.TUP_SIMPLE || version === TarsStream.Tup.TUP_COMPLEX) {
        return this._worker.tup_invoke("RemoveDevice", __CivetDevicePluginCenter_DeviceProcess$RemoveDevice$PE(DeviceID, version), arguments[arguments.length - 1], __CivetDevicePluginCenter_DeviceProcess$RemoveDevice$IF).then(__CivetDevicePluginCenter_DeviceProcess$RemoveDevice$PD, __CivetDevicePluginCenter_DeviceProcess$RemoveDevice$ER);
    } else {
        return this._worker.tars_invoke("RemoveDevice", __CivetDevicePluginCenter_DeviceProcess$RemoveDevice$IE(DeviceID), arguments[arguments.length - 1], __CivetDevicePluginCenter_DeviceProcess$RemoveDevice$IF).then(__CivetDevicePluginCenter_DeviceProcess$RemoveDevice$ID, __CivetDevicePluginCenter_DeviceProcess$RemoveDevice$ER);
    }
};
CivetDevicePluginCenter.DeviceProcessProxy.RemoveDevice = __CivetDevicePluginCenter_DeviceProcess$RemoveDevice$IF;


