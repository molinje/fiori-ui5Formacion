sap.ui.define([
    "sap/ui/core/mvc/Controller"
], (Controller) => {
    "use strict";

    return Controller.extend("logaligroup.invoices.controller.MainView", {
        onInit() {
            const oJSONModel = new sap.ui.model.json.JSONModel();
            const oView = this.getView();
            oJSONModel.loadData("./model/SelectionScreenMenu.json");
            oView.setModel(oJSONModel, "selectionScreen" );


        },
        onFilter: function(oEvent){

        },
        onFilterClear: function(oEvent){

           const oModelSelScreen =  this.getView().getModel("selectionScreen");

           oModelSelScreen.setProperty("/ShipName", "");
           oModelSelScreen.setProperty("/CountryKey", "");
          


        },

    });
});