
var htmlString = '<html><div id="div1">content</div></html>';
var html = (new window.DOMParser()).parseFromString(htmlString, "text/html");


//mailto method

function mailFeedback() {window.location.href = "mailto:CapacityManagementandTelemetryteam@libertyglobal.com  ?subject=Request for alert Notification&body=Hi ODH-CM team,   %0d%0a Dasboard URL : %0d%0a Requseted details : ";}