sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

	return Controller.extend("git_appgit_app.controller.View1", {
	onInit: function() {
		var url = "/sap/opu/odata/SAP/zodata_porject_srv/";
			var oModel = new sap.ui.model.odata.v2.ODataModel(url, {
				json: true
			});
			oModel.setUseBatch(false);
			this.getView().setModel(oModel);
			//local update
			//this.byId("listid").bindItems(oModel);
			//oModel.setSizeLimit(10);
		}
	});
});