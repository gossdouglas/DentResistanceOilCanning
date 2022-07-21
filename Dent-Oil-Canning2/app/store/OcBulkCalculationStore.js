//Ext.define('TiSlots.store.TiSlots', {
Ext.define('DentResistanceOilCanning.store.OcBulkCalculationStore', {
    extend: 'Ext.data.Store',
    //alias: 'store.tislots',
    alias: 'store.oc-bulk-calculation-store',
    //storeId: 'truckStore',
    storeId: 'OcBulkCalculationStore',
    //model: 'TiSlots.model.TiSlot',
    model: 'DentResistanceOilCanning.model.VmOilCanningReturnModel',
    //autoLoad: true,
    //un-comment to add paging
    //items per page   
    //pageSize: 25,

    data: [
        //{
        //    "ocvar": "",
        //    "peakld": "",
        //    "fvr": "6000",
        //    "svr": "6000",
        //    "gaugeini": "0.6",
        //    "span": "150",
        //    "emaj": "0",
        //    "emin": "0",
        //    "DDQ": "",
        //    "BH210": ""
        //},
        //{
        //    "ocvar": "",
        //    "peakld": "",
        //    "fvr": "3000",
        //    "svr": "3000",
        //    "gaugeini": "0.6",
        //    "span": "320",
        //    "emaj": "0",
        //    "emin": "0",
        //    "DDQ": "",
        //    "BH210": ""
        //}
    ],

    //proxy: {
    //    type: 'memory',
    //    reader: {
    //        type: 'json',
    //        rootProperty: 'data'           
    //    }
    //},
    //listeners: {
    //    //load: function () {
    //    loadData: function (data, x) {
    //        console.log('loadData event');
    //        console.log(data);
    //        console.log(x);
    //    },
    //    load: function (data, x) {           
    //        console.log('load event');
    //        console.log(data);
    //        console.log(x);
    //    }
    //},

    //proxy: {
    //    type: 'ajax',
    //    url: 'api/OilCanning/CalculateBulkOilCanning',
    //    //extraParams: { State: 'Active' },
    //    //appendId: true,
    //    //noCache: false,
    //    reader: {
    //        type: 'json',
    //        rootProperty: function (data) {

    //                console.log("returned data:")
    //                console.log(data.data)
    //                //return data.data.TiSlots;              
    //        },
    //        //un-comment to add paging
    //        //totalProperty: function (data) {

    //        //    return data.data.TotalCount;
    //        //},
    //    }
    //},
    //sorters: [
    //    {
    //        property: 'TiSlotNumber',
    //        direction: 'DESC'
    //    }
    //],
    //listeners: {
    //    load: function (store, records, successful, operation, eOpts) {
    //        var rec = records;
    //    }
    //}
});
