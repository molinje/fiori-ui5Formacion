sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator"
], (Controller, Filter, FilterOperator) => {
    "use strict";

    return Controller.extend("logaligroup.invoices.controller.MainView", {
        onInit() {
            const oJSONModel = new sap.ui.model.json.JSONModel();
            const oView = this.getView();
            oJSONModel.loadData("./model/SelectionScreenMenu.json");
            oView.setModel(oJSONModel, "selectionScreen" );


        },
        onFilter: function(oEvent){

            let filters = [];

            const oData = this.getView().getModel("selectionScreen").getData();

            if (oData.ShipName !== ""){
                
                // Con filters.push se adiciona un registro al array filters, el registro es de tipo Filter
                filters.push(new Filter("ShipName", FilterOperator.Contains, oData.ShipName))

            }

            if (oData.CountryKey !== ""){
                
                // Con filters.push se adiciona un registro al array filters, el registro es de tipo Filter
                filters.push(new Filter("Country", FilterOperator.EQ, oData.CountryKey))

            }
             
            // invoicesList es el id del Listado de la vista, con la siguiente linea obtenemos una instancia del listado 
            // que se esta mostrando en la vista 
            const oList = this.getView().byId("invoicesList");
            const oBinding = oList.getBinding("items");
            oBinding.filter(filters);

        },
        onFilterClear: function(oEvent){

           const oModelSelScreen =  this.getView().getModel("selectionScreen");

           oModelSelScreen.setProperty("/ShipName", "");
           oModelSelScreen.setProperty("/CountryKey", "");
           // para limpiar los filtros le enviamos un array vacio para que me consulte de nuevo 
           // el listado por medio del servicio
           const oList = this.getView().byId("invoicesList");
           const oBinding = oList.getBinding("items");
           oBinding.filter([]);
          


        },

    });
});