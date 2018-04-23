'use strict';

LCC.sendMessage = function(userMessage) {
    if (typeof LCC !== "undefined" && typeof LCC.onlineSupport !== "undefined") {
        LCC.onlineSupport.sendMessage("containerUserMessage", {payload: userMessage});
    }
    else {
        // TODO: offline
    }
}

LCC.addErrorHandler = function(handler) {
    if (typeof LCC !== "undefined" && typeof LCC.onlineSupport !== "undefined") {
        LCC.onlineSupport.addErrorHandler(handler);
    }
    else {
        // TODO: offline
    }
}

LCC.removeErrorHandler = function(handler) {
    if (typeof LCC !== "undefined" && typeof LCC.onlineSupport !== "undefined") {
        LCC.onlineSupport.removeErrorHandler(handler);
    }
    else {
        // TODO: offline
    }
}

LCC.addMessageHandler = function(handler) {
    if (typeof LCC !== "undefined" && typeof LCC.onlineSupport !== "undefined") {
        LCC.onlineSupport.addMessageHandler(handler);
    }
    else {
        // TODO: offline
    }
}

LCC.removeMessageHandler = function(handler) {
    if (typeof LCC !== "undefined" && typeof LCC.onlineSupport !== "undefined") {
        LCC.onlineSupport.removeMessageHandler(handler);
    }
    else {
        // TODO: offline
    }
}

LCC.getRESTAPISessionKey = function() {
    if (typeof LCC !== "undefined" && typeof LCC.onlineSupport !== "undefined") {
        return LCC.onlineSupport.getRESTAPISessionKey();
    }
    else {
        // TODO: offline
        return "";
    }
}

LCC.callApex = function(fullyQualifiedApexMethodName,
                                   apexMethodParameters,
                                   callbackFunction,
                                   apexCallConfiguration) {
    if (typeof Visualforce !== "undefined" && 
        typeof Visualforce.remoting !== "undefined" &&
        typeof Visualforce.remoting.Manager !== "undefined") {

            Visualforce.remoting.Manager.invokeAction(fullyQualifiedApexMethodName,
                                                      apexMethodParameters,
                                                      callbackFunction,
                                                      apexCallConfiguration);
    }
    else {
        // TODO: offline
    }
}